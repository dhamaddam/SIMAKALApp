import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { JadwalKalibrasiService } from 'src/app/services/jadwal-kalibrasi/jadwal-kalibrasi.service';

@Component({
  selector: 'app-jadwal-kalibrasi',
  templateUrl: './jadwal-kalibrasi.page.html',
  styleUrls: ['./jadwal-kalibrasi.page.scss'],
})
export class JadwalKalibrasiPage implements OnInit {
  token : any; 
  re_calibration : string = "false";
  allContentDummy : any[] = [];
  allContentDummySub : Subscription = new Subscription;
  isLoading: boolean = false;
  formTitle = "Jadwal Kalibrasi";
  allAlatData : any[] = [];
  allAlatDataSub : Subscription = new Subscription;
  
  constructor(
    private global : GlobalService,
    private jadwalKalibrasiServices : JadwalKalibrasiService,
    private authServices : AuthService,
  
  ) { }

  ngOnInit() {
    
    this.getAuth();

    this.allAlatDataSub = this.jadwalKalibrasiServices.allDataAlatKesehatan.subscribe(data => {
      if (data instanceof Array){
        this.allAlatData = data;
        this.allAlatData.forEach(element => {
          if (element.details[0].re_calibration == null){
            this.re_calibration = "false"
          } else {
            this.re_calibration = "true"
          }
          // console.log("element.details", this.re_calibration)
          
        });
      } else {
        this.allAlatData = this.allAlatData.concat(data);
      }
    })

    this.getAllData()
  }

  async getAuth(){
    const val = await this.authServices.getId();
    
    if(val){
      let data = JSON.parse(val)
      console.log("this.token", data.access_token)
      this.token = data.access_token
    }
  }

  async getAllData (){
    this.isLoading = true;
    this.global.showLoader();
    
    setTimeout(async() => {
      await this.jadwalKalibrasiServices.getSeluruhAlatData(this.token);

      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }
  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
   }
}
