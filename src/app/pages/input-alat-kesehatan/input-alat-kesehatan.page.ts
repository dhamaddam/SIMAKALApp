import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

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
  
  today: any = moment().format("YYYY-MM-DD");
  
  constructor(
    private global : GlobalService, 
    private fb: FormBuilder,
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

  }

  handleInstalasi(event : any) {

  }

  async saveData(){
    this.isLoading = true;
    this.global.showLoader();

    console.log(this.myForm
      )

      this.isLoading = false;
      this.global.hideLoader();
  }

}
