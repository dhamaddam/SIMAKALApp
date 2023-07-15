import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';
import { MonitoringAlatService } from 'src/app/services/monitoring-alat/monitoring-alat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavExtrasServiceService } from 'src/app/services/nav-extras-service/nav-extras-service.service';

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

  constructor(
    private global : GlobalService,
    private monitoringAlatServices : MonitoringAlatService,
    private activatedRoute: ActivatedRoute, 
    private authServices : AuthService,
    private router: Router, 
    private navExtras : NavExtrasServiceService
  ) { 

  }

  ngOnInit() {
    this.getAuth();
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
      console.log("this.token", data.access_token)
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
      await this.monitoringAlatServices.getContentDummy();
      await this.monitoringAlatServices.getSeluruhAlatData(this.token);
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }

  handleClick (event : any, param : any){
    console.log("isi monitoring row", param)
    this.navExtras.setExtras(param)
    this.router.navigateByUrl('details-monitoring');
  }

  

  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
   }
}
