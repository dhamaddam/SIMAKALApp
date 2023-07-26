import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { InputAlatKesehatanService } from 'src/app/services/input-alat-kesehatan/input-alat-kesehatan.service';
import { MonitoringAlatService } from 'src/app/services/monitoring-alat/monitoring-alat.service';
import { NavExtrasServiceService } from 'src/app/services/nav-extras-service/nav-extras-service.service';

@Component({
  selector: 'app-details-monitoring',
  templateUrl: './details-monitoring.page.html',
  styleUrls: ['./details-monitoring.page.scss'],
})
export class DetailsMonitoringPage implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  param: any;
  myForm : any;
  isLoading: boolean = false;
  formTitle : string = "Detail Monitoring"
  token : any; 
  allDataAlatKesehatanById : any[] = [];
  allDataAlatKesehatanByIdSub : Subscription = new Subscription;
  resultData : any[] = [];
  detailsAlat : any[] = [];
  today: any = moment().format("YYYY-MM-DD");
  status_alat : string = ""
  id_alat : string = ""
  imgUrl : string = ""
  constructor(
    private router: Router, 
    public global : GlobalService,
    private activatedRoute: ActivatedRoute,
    private inputAlatKesehatanServices : InputAlatKesehatanService, 
    private monitoringAlatServices : MonitoringAlatService,
    private authServices : AuthService,
    private fb: FormBuilder,
    private navExtras: NavExtrasServiceService
  ) { }

  ngOnInit() {
    this.getAuth();

    this.allDataAlatKesehatanById = this.navExtras.getExtras()
    this.resultData.push(this.navExtras.getExtras())
    this.resultData.forEach(element => {

      console.log("element",element.details[0].calibration_status)
      this.myForm = this.fb.group({ 
        tanggal: [this.today, [Validators.required]],
        monitoring_status: ['', ],
        name:[element.name, [Validators.required]],
        pic:[element.pic, ],
        inventory_no:[element.inventory_no,],
        room : [element.room,],
        type : [element.type,],
        calibration_status: [element.calibration_status,],
        owner_id : [element.owner_id,],
        initial_calibration : [element.details[0].initial_calibration,],
        re_calibration : [element.details[0].re_calibration],
        initial_monitoring : [element.details[0].initial_monitoring],
        re_monitoring : [element.details[0].re_monitoring]
      });
      this.pdfSrc = element.details[0].file
      this.id_alat = element.id
      this.imgUrl = element.image
      if (element.monitoring_status == null){
        this.myForm.form = "status_belum_diisi"
        this.status_alat = "status_belum_diisi"
      } else {
        this.myForm.form = element.monitoring_status
        this.status_alat = element.monitoring_status
      }

    });
    console.log("this.status_alat",this.status_alat)
  }

  placeData (param : any){
    try{
      setTimeout(async() => {
        await this.inputAlatKesehatanServices.updateAlatKesehatan(this.id_alat,param, this.token)
        this.isLoading = false;
        this.global.hideLoader();
        // this.router.navigateByUrl('/menu/monitoring-alat', { replaceUrl: true });
        this.router.navigate(['/menu/monitoring-alat'], {
          // queryParams: {
          //   param: x
          // }
          });
      }, 1000);
    } catch (error) {
      throw(error);
    }
  }

  async getAuth(){
    const val = await this.authServices.getId();
    if(val){
      let data = JSON.parse(val)
      console.log("this.token", data.access_token)
      this.token = data.access_token
    }
  }

  async saveData(){
    this.isLoading = true;
    this.global.showLoader();
    
    console.log("save data this.myForm.value",this.myForm.value)
    this.placeData(this.myForm.value)

    this.isLoading = false;
    this.global.hideLoader();
  }
}
