import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { SeluruhAlatService } from 'src/app/services/seluruh-alat/seluruh-alat.service';

@Component({
  selector: 'app-input-alat-kesehatan',
  templateUrl: './input-alat-kesehatan.page.html',
  styleUrls: ['./input-alat-kesehatan.page.scss'],
})
export class InputAlatKesehatanPage implements OnInit {

  formTitle = "Input Alat Kesehatan"
  isLoading: boolean = false; 
  myForm : any;

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
    private seluruhAlatServices : SeluruhAlatService
  ) { }

  ngOnInit() {

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

  async saveData(){
    this.isLoading = true;
    this.global.showLoader();
    console.log('isi storage ',this.allAlatKesehatan)
    console.log(this.myForm.value)

    this.isLoading = false;
    this.global.hideLoader();
  }

}
