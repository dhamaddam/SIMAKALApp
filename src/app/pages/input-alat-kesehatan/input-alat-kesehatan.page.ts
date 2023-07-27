import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { SeluruhAlatService } from 'src/app/services/seluruh-alat/seluruh-alat.service';
import { InputAlatKesehatanService } from 'src/app/services/input-alat-kesehatan/input-alat-kesehatan.service';
import { Alat } from 'src/app/models/alat.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader';
import { format } from 'date-fns'

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

  allInstalasi : any[] = [];
  allInstalasiSubs: Subscription = new Subscription;
  
  allKondisiAlat : any[] = [];
  allKondisiAlatSubs : Subscription = new Subscription;
  
  allAlatKesehatan : any[] = [];
  allAlatKesehatanSubs : Subscription = new Subscription; 
  today: any = moment().format("YYYY-MM-DD");
  
  uploader = Uploader({ apiKey: "public_FW25bYRFasDp9zGButccP2qyeEcZ" }); // Your real API key.
  options: UploadWidgetConfig = {
    multi: true
  };
  onComplete = (files: UploadWidgetResult[]) => {
    this.imageLink = files[0]?.fileUrl;
  };
  imageLink: string  = "";
  dateValue = format(new Date(), 'yyyy-MM-dd');

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
      kalibrasi_awal: [this.dateValue, ],
      kalibrasi_ulang: [this.dateValue, ],
      monitoring_awal: [this.dateValue, ],
      monitoring_ulang: [this.dateValue, ],
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
          this.imageLink,
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
    this.myForm.reset()
  }

}
