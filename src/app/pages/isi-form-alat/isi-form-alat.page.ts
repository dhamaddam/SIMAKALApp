import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global/global.service';


@Component({
  selector: 'app-isi-form-alat',
  templateUrl: './isi-form-alat.page.html',
  styleUrls: ['./isi-form-alat.page.scss'],
})
export class IsiFormAlatPage implements OnInit {

  myForm : any;
  today: any = moment().format("YYYY-MM-DD");
  
  constructor(
    private fb: FormBuilder,
    private global : GlobalService,

  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({ 
      tanggal: [this.today, [Validators.required]],
      pilih_instalasi: ['', ],
      nama_alat: ['', ],
      pemilik: ['', ],
      ruangan: ['', ],
      merk_type: ['', ],
      serial_number: ['', ],
      nomor_inventaris: ['', ],
      kondisi_alat: ['', ],
      kalibrasi_awal: ['', ],
      kalibrasi_ulang: ['', ],
      monitoring_awal: ['', ],
      monitoring_ulang: ['', ],
    });
  }

}
