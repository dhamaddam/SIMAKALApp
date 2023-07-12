import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { SeluruhAlatService } from 'src/app/services/seluruh-alat/seluruh-alat.service';
import { InputAlatKesehatanService } from 'src/app/services/input-alat-kesehatan/input-alat-kesehatan.service';
import { Alat } from 'src/app/models/alat.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-input-alat-kesehatan',
  templateUrl: './input-alat-kesehatan.page.html',
  styleUrls: ['./input-alat-kesehatan.page.scss'],
})
export class InputAlatKesehatanPage implements OnInit {

  formTitle = "Input Alat Kesehatan"
  isLoading: boolean = false; 
  myForm : any;
  token : any;
  monul_date : any = moment("2023-01-15T08:47").format("YYYY-MM-DDTHH:mm");
  waktuAwal : any = moment("2023-01-15T08:47").format("YYYY-MM-DDTHH:mm");
  waktuFinish : any = moment("2023-12-30T16:00").format("YYYY-MM-DDTHH:mm");
  dateExample = new Date().toISOString();

  allInstalasi : any[] = [];
  allInstalasiSubs: Subscription = new Subscription;
  
  allKondisiAlat : any[] = [];
  allKondisiAlatSubs : Subscription = new Subscription;
  
  allAlatKesehatan : any[] = [];
  allAlatKesehatanSubs : Subscription = new Subscription; 

  today: any = moment().format("YYYY-MM-DD");
  
  constructor(
    private global : GlobalService, 
    private fb: FormBuilder,
    private inputAlatKesehatanServices : InputAlatKesehatanService,
    private seluruhAlatServices : SeluruhAlatService,
    private authServices : AuthService,
    
  ) { }

  ngOnInit() {
    this.getAuth();

    this.myForm = this.fb.group({ 
      tanggal: [this.today, [Validators.required]],
      pilih_instalasi: ['', ],
      nama_alat: ['', ],
      nomer_seri: ['', ],
      nomer_inventaris: ['', ],
      merk_type: ['', ],
      kondisi_alat: ['', ],
      kalibrasi_awal: ['', ],
      kalibrasi_ulang: ['', ],
      monitoring_awal: ['', ],
      monitoring_ulang: ['', ],
      calibration_status: ['',],
      owner: ['',],
      pic: ['',],
    });

    this.allInstalasiSubs = this.seluruhAlatServices.allAllInstalasi.subscribe( result => {
      if (result instanceof Array){
        this.allInstalasi = result;
      } else {
        this.allInstalasi = this.allInstalasi.concat(result);
      }
    })
    this.allAlatKesehatanSubs = this.seluruhAlatServices.allDataAlatKesehatan.subscribe( result => {
      if (result instanceof Array){
        this.allAlatKesehatan = result;
      } else {
        this.allAlatKesehatan = this.allAlatKesehatan.concat(result);
      }
    })
    this.getAllData();
    
  }

  async getAuth(){
    const val = await this.authServices.getId();
    
    if(val){
      let data = JSON.parse(val)

      console.log("this.token", data.access_token)
      this.token = data.access_token
    }
  }

  handleInstalasi(event : any) {

  }

  async getAllData(){    
    this.isLoading = true;
    this.global.showLoader();
    setTimeout(async() => {
      await this.seluruhAlatServices.getInstalasi();

      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }
  
  placeData (param : any) {
    try {
      let currentAlat : Alat[] = []
      currentAlat.push(
        new Alat(
          param.pic,
          param.nama_alat,
          param.nomer_seri,
          param.nomer_inventaris,
          param.pilih_instalasi,
          param.merk_type,
          param.calibration_status ,
          param.kondisi_alat ,
          param.owner ,
          param.kalibrasi_awal,
          param.kalibrasi_ulang ,
          param.monitoring_awal ,
          param.monitoring_ulang 
        )
      )
      this.isLoading = true;
      this.global.showLoader();

      console.log("this.token",this.token)
      setTimeout(async() => {
         await this.inputAlatKesehatanServices.saveInputAlatKesehatan(currentAlat, this.token)
         this.isLoading = false;
         this.global.hideLoader();
       }, 1000);

    } catch (error) {
      throw(error);
    }
  }
  async saveData(){
    this.isLoading = true;
    this.global.showLoader();
    
    console.log(this.myForm.value)
    this.placeData(this.myForm.value)

    this.isLoading = false;
    this.global.hideLoader();
  }

}
