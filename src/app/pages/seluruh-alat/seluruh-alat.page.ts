import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { SeluruhAlatService } from 'src/app/services/seluruh-alat/seluruh-alat.service';

@Component({
  selector: 'app-seluruh-alat',
  templateUrl: './seluruh-alat.page.html',
  styleUrls: ['./seluruh-alat.page.scss'],
})
export class SeluruhAlatPage implements OnInit {

  formTitle = "Seluruh Alat"
  allContentDummy : any[] = [];
  allContentDummySub : Subscription = new Subscription;
  isLoading: boolean = false;
  allAlatData : any[] = [];
  allAlatDataSub : Subscription = new Subscription;
  
  token : any; 

  constructor(
    private global : GlobalService,
    private seluruhAlatServices : SeluruhAlatService,
    private authServices : AuthService,
  ) { }

  ngOnInit() {

    this.getAuth();
    
    this.allAlatDataSub = this.seluruhAlatServices.allDataAlatKesehatan.subscribe(data => {
      if (data instanceof Array){
        this.allAlatData = data;
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
      await this.seluruhAlatServices.getSeluruhAlatData(this.token);
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }
  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
    if(this.allAlatDataSub) this.allAlatDataSub.unsubscribe();
   }
}
