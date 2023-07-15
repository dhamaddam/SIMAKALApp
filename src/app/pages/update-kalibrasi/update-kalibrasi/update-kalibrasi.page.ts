import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';


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
  today: any = moment().format("YYYY-MM-DD");
  

  constructor(
    private global : GlobalService, 
    private authServices : AuthService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(
  ) {
    this.myForm = this.fb.group({ 
      tanggal: [this.today, [Validators.required]],
      calibration_status: ['', ],
    });
  }
  saveData(){
    this.isLoading = true;
    this.global.showLoader();
    
    console.log(this.myForm.value)

    this.isLoading = false;
    this.global.hideLoader();
  }
}
