import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';
import { JadwalKalibrasiService } from 'src/app/services/jadwal-kalibrasi/jadwal-kalibrasi.service';

@Component({
  selector: 'app-jadwal-kalibrasi',
  templateUrl: './jadwal-kalibrasi.page.html',
  styleUrls: ['./jadwal-kalibrasi.page.scss'],
})
export class JadwalKalibrasiPage implements OnInit {

  allContentDummy : any[] = [];
  allContentDummySub : Subscription = new Subscription;
  isLoading: boolean = false;
  formTitle = "Jadwal Kalibrasi";
  
  constructor(
    private global : GlobalService,
    private jadwalKalibrasiServices : JadwalKalibrasiService
 
  ) { }

  ngOnInit() {
    this.allContentDummySub = this.jadwalKalibrasiServices.allContentDummy.subscribe(data => {
      if (data instanceof Array){
        this.allContentDummy = data;
      } else {
        this.allContentDummy = this.allContentDummy.concat(data);
      }
    })

    this.getAllData()
  }
  async getAllData (){
    this.isLoading = true;
    this.global.showLoader();
    setTimeout(async() => {
      await this.jadwalKalibrasiServices.getContentDummy();
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }
  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
   }
}
