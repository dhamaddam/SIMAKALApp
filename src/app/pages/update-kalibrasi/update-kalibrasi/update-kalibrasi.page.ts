import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { InputAlatKesehatanService } from 'src/app/services/input-alat-kesehatan/input-alat-kesehatan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavExtrasServiceService } from 'src/app/services/nav-extras-service/nav-extras-service.service';


@Component({
  selector: 'app-update-kalibrasi',
  templateUrl: './update-kalibrasi.page.html',
  styleUrls: ['./update-kalibrasi.page.scss'],
})
export class UpdateKalibrasiPage implements OnInit {

  formTitle : string = "Update Kalibrasi"
  isLoading: boolean = false; 
  myForm : any;
  token : any;
  allDataAlatKesehatanById : any[] = [];
  allDataAlatKesehatanByIdSub : Subscription = new Subscription;
  today: any = moment().format("YYYY-MM-DD");
  resultData : any[] = [];
  calibration_status : string = ""
  id_alat : string = ""

  constructor(
    private router: Router, 
    private global : GlobalService, 
    private inputAlatKesehatanServices : InputAlatKesehatanService, 
    private authServices : AuthService,
    private fb: FormBuilder,
    private navExtras: NavExtrasServiceService
    ) { }

  ngOnInit(
  ) {
    this.getAuth();
    this.allDataAlatKesehatanById = this.navExtras.getExtras()
    this.resultData.push(this.navExtras.getExtras())
    this.resultData.forEach(element => {
      console.log("element",element.details[0].calibration_status)
      this.myForm = this.fb.group({ 
        tanggal: [this.today, [Validators.required]],
        monitoring_status: ['', ],
        name:[element.name,],
        pic:[element.pic, ],
        inventory_no:[element.inventory_no,],
        room : [element.room,],
        type : [element.type,],
        calibration_status: ['',],
        owner_id : [element.owner_id,],
        initial_calibration : [element.details[0].initial_calibration,],
        re_calibration : [element.details[0].re_calibration],
        initial_monitoring : [element.details[0].initial_monitoring],
        re_monitoring : [element.details[0].re_monitoring]
      });
      this.id_alat = element.id
      if (element.calibration_status == null){
        this.myForm.form = "gagal_kalibrasi"
        this.calibration_status = "status_belum_diisi"
      } else {
        this.myForm.form = element.calibration_status
        this.calibration_status = element.calibration_status
      }

    });
  }

  async getAuth(){
    const val = await this.authServices.getId();
    if(val){
      let data = JSON.parse(val)
      console.log("this.token", data.access_token)
      this.token = data.access_token
    }
  }

  placeData (param : any){
    try{
      setTimeout(async() => {
        await this.inputAlatKesehatanServices.updateAlatKesehatanCalibration(this.id_alat,param, this.token)
        this.isLoading = false;
        this.global.hideLoader();
        // this.router.navigateByUrl('/menu/monitoring-alat', { replaceUrl: true });
        this.router.navigate(['/menu/jadwal-kalibrasi'], {
          // queryParams: {
          //   param: x
          // }
          });
      }, 1000);
    } catch (error) {
      throw(error);
    }
  }
  saveData(){
    this.isLoading = true;
    this.global.showLoader();
    
    console.log(this.myForm.value)
    this.placeData(this.myForm.value)

    this.isLoading = false;
    this.global.hideLoader();
  }
}
