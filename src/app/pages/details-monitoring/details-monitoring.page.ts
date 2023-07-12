import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { MonitoringAlatService } from 'src/app/services/monitoring-alat/monitoring-alat.service';
import { NavExtrasServiceService } from 'src/app/services/nav-extras-service/nav-extras-service.service';

@Component({
  selector: 'app-details-monitoring',
  templateUrl: './details-monitoring.page.html',
  styleUrls: ['./details-monitoring.page.scss'],
})
export class DetailsMonitoringPage implements OnInit {

  param: any;
  myForm : any;
  isLoading: boolean = false;
  formTitle : string = "Detail Monitoring"
  token : any; 
  allDataAlatKesehatanById : any[] = [];
  resultData : any[] = [];
  allDataAlatKesehatanByIdSub : Subscription = new Subscription;
  detailsAlat : any[] = [];
  today: any = moment().format("YYYY-MM-DD");
  status_alat : string = ""
  
  constructor(
    private router: Router, 
    private global : GlobalService,
    private activatedRoute: ActivatedRoute, 
    private monitoringAlatServices : MonitoringAlatService,
    private authServices : AuthService,
    private fb: FormBuilder,
    private navExtras: NavExtrasServiceService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({ 
      tanggal: [this.today, [Validators.required]],
      pilih_instalasi: ['', ],
      status_monitoring: ['', ],
      kondisi_alat: ['', ],
      nama_alat:["",]
    });

    this.allDataAlatKesehatanById = this.navExtras.getExtras()
    this.resultData.push(this.navExtras.getExtras())
    this.resultData.forEach(element => {
      if (element.monitoring_status == null){
        this.myForm.form = "status_belum_diisi"
        this.status_alat = "status_belum_diisi"
      } else {
        this.status_alat = element.monitoring_status
      }
    });
  }

  async saveData(){
    this.isLoading = true;
    this.global.showLoader();
    
    // console.log(this.myForm.value)
    // this.placeData(this.myForm.value)

    this.isLoading = false;
    this.global.hideLoader();
  }
}
