import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { JadwalKalibrasiService } from 'src/app/services/jadwal-kalibrasi/jadwal-kalibrasi.service';
import { NavExtrasServiceService } from 'src/app/services/nav-extras-service/nav-extras-service.service';
import { SeluruhAlatService } from 'src/app/services/seluruh-alat/seluruh-alat.service';

@Component({
  selector: 'app-jadwal-kalibrasi',
  templateUrl: './jadwal-kalibrasi.page.html',
  styleUrls: ['./jadwal-kalibrasi.page.scss'],
})
export class JadwalKalibrasiPage implements OnInit {
  token : any; 
  myForm : any;
  allContentDummy : any[] = [];
  allContentDummySub : Subscription = new Subscription;
  isLoading: boolean = false;
  formTitle = "Jadwal Kalibrasi";
  allAlatData : any[] = [];
  today: any = moment().format("YYYY-MM-DD");
  allAlatDataSub : Subscription = new Subscription;
  roles : any;


  allInstalasi : any[] = [];
  _allAlatData : any[] = [];
  allInstalasiSubs: Subscription = new Subscription;
  
  constructor(
    private global : GlobalService,
    private jadwalKalibrasiServices : JadwalKalibrasiService,
    private authServices : AuthService,
    private router: Router, 
    private seluruhAlatServices : SeluruhAlatService,
    private fb: FormBuilder,
    private navExtras : NavExtrasServiceService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({ 
      tanggal: [this.today, [Validators.required]],
      pilih_instalasi: ['', ],
    });

    this.getAuth();

    this.allInstalasiSubs = this.seluruhAlatServices.allAllInstalasi.subscribe( result => {
      if (result instanceof Array){
        this.allInstalasi = result;
      } else {
        this.allInstalasi = this.allInstalasi.concat(result);
      }
    })

    this.allAlatDataSub = this.jadwalKalibrasiServices.allDataAlatKesehatan.subscribe(data => {
      if (data instanceof Array){
        this.allAlatData = data;
        this._allAlatData = data;
      } else {
        this.allAlatData = this.allAlatData.concat(data);
      }
    })

    this.getAllData()

   
  }

  handleInstalasi(event : any) {
    let currentAlat = this._allAlatData
    currentAlat = currentAlat.filter(x => x.room == event.detail.value);
    this.allAlatData = currentAlat
  }

  async getAuth(){
    const val = await this.authServices.getId();
    
    if(val){
      let data = JSON.parse(val)
      this.roles = data.role
      this.token = data.access_token
    }
   
  }

  async getAllData (){
    this.isLoading = true;
    this.global.showLoader();
    
    setTimeout(async() => {
      await this.jadwalKalibrasiServices.getSeluruhAlatData(this.token);
      await this.seluruhAlatServices.getInstalasi();

      this.isLoading = false;
      this.global.hideLoader();
      
    }, 1000);

  }

  handleClick(event : any, param : any){
    this.navExtras.setExtras(param)
    this.router.navigateByUrl('update-kalibrasi');
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.allAlatDataSub = this.jadwalKalibrasiServices.allDataAlatKesehatan.subscribe(data => {
        if (data instanceof Array){
          this.allAlatData = data;
          this._allAlatData = data;
        } else {
          this.allAlatData = this.allAlatData.concat(data);
        }
      })
  
      this.getAllData()
      event.target.complete();
      }, 2000);
    }

  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
   }
}
