import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';
import { MonitoringAlatService } from 'src/app/services/monitoring-alat/monitoring-alat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavExtrasServiceService } from 'src/app/services/nav-extras-service/nav-extras-service.service';
import { SeluruhAlatService } from 'src/app/services/seluruh-alat/seluruh-alat.service';

@Component({
  selector: 'app-monitoring-alat',
  templateUrl: './monitoring-alat.page.html',
  styleUrls: ['./monitoring-alat.page.scss'],
})

export class MonitoringAlatPage implements OnInit {


  param: any;
  formTitle = "Monitoring Alat"
  allContentDummy : any[] = [];
  allContentDummySub : Subscription = new Subscription;
  isLoading: boolean = false;
  allAlatData : any[] = [];
  allAlatDataSub : Subscription = new Subscription;
  token : any; 
  roles : any;

  allInstalasi : any[] = [];
  _allAlatData : any[] = [];
  allInstalasiSubs: Subscription = new Subscription;
  

  constructor(
    private global : GlobalService,
    private monitoringAlatServices : MonitoringAlatService,
    private activatedRoute: ActivatedRoute, 
    private authServices : AuthService,
    private router: Router, 
    private seluruhAlatServices : SeluruhAlatService,
    private navExtras : NavExtrasServiceService
  ) { 

  }

  handleInstalasi(event : any) {
    console.log("event id",event.detail.value)
    let currentAlat = this._allAlatData
    currentAlat = currentAlat.filter(x => x.room == event.detail.value);
    this.allAlatData = currentAlat
  }

  ngOnInit() {
    this.getAuth();

    this.allInstalasiSubs = this.seluruhAlatServices.allAllInstalasi.subscribe( result => {
      if (result instanceof Array){
        this.allInstalasi = result;
      } else {
        this.allInstalasi = this.allInstalasi.concat(result);
      }
    })

    this.allContentDummySub = this.monitoringAlatServices.allContentDummy.subscribe(data => {
      if (data instanceof Array){
        this.allContentDummy = data;
      } else {
        this.allContentDummy = this.allContentDummy.concat(data);
      }
    })

    this.allAlatDataSub = this.monitoringAlatServices.allDataAlatKesehatan.subscribe(data => {
      if (data instanceof Array){
        this.allAlatData = data;
        this._allAlatData = data;
      } else {
        this.allAlatData = this.allAlatData.concat(data);
      }
    })

    this.getAllData()
  }


  async getAuth(){
    const val = await this.authServices.getId();
    if(val){
      let data = JSON.parse(val)
      this.roles = data.role
      this.token = data.access_token
    }
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.allAlatDataSub = this.monitoringAlatServices.allDataAlatKesehatan.subscribe(data => {
        if (data instanceof Array){
          this.allAlatData = data;
        } else {
          this.allAlatData = this.allAlatData.concat(data);
        }
      })
  
      this.getAllData()
      event.target.complete();
      }, 2000);
    }

  async getAllData (){
    // this.isLoading = true;
    // this.global.showLoader();
    setTimeout(async() => {
      await this.seluruhAlatServices.getInstalasi();
      await this.monitoringAlatServices.getContentDummy();
      await this.monitoringAlatServices.getSeluruhAlatData(this.token);
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }

  handleClick (event : any, param : any){
    this.navExtras.setExtras(param)
    this.router.navigateByUrl('details-monitoring');
  }

  

  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
   }
}
