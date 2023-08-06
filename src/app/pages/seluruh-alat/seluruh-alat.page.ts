import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
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
  _allAlatData : any[] = [];
  allAlatDataSub : Subscription = new Subscription;
  
  token : any; 
  roles : any;
  allInstalasi : any[] = [];
  allInstalasiSubs: Subscription = new Subscription;
  
  constructor(
    private global : GlobalService,
    private seluruhAlatServices : SeluruhAlatService,
    private authServices : AuthService,
  ) { }

  ngOnInit() {
    this.getAuth();
    
    this.allInstalasiSubs = this.seluruhAlatServices.allAllInstalasi.subscribe( result => {
      if (result instanceof Array){
        this.allInstalasi = result;
      } else {
        this.allInstalasi = this.allInstalasi.concat(result);
      }
    })

    
    this.allAlatDataSub = this.seluruhAlatServices.allDataAlatKesehatan.subscribe(data => {
      if (data instanceof Array){
        this.allAlatData = data;
        this._allAlatData = data;
      } else {
        this.allAlatData = this.allAlatData.concat(data);
      }
    })
    this.getAllData()
  }


  deleteItem(id : any ){
    this.isLoading = true;
    this.global.showLoader();
    this.seluruhAlatServices.deleteAlat(id, this.token);
    this.isLoading = false;
    this.global.hideLoader();
    this.getAllData()
  }


  handleInstalasi(event : any) {
    let currentAlat = this._allAlatData
    currentAlat = currentAlat.filter(x => x.room == event.detail.value);
    this.allAlatData = currentAlat
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.allAlatDataSub = this.seluruhAlatServices.allDataAlatKesehatan.subscribe(data => {
        if (data instanceof Array){
          this.allAlatData = data;
        } else {
          this.allAlatData = this.allAlatData.concat(data);
        }
      })
  
      this.getAllData()
      event.target.complete();
      }, 2000);
    }

  async getAuth(){
    const val = await this.authServices.getId();
    if(val){
      let data = JSON.parse(val)
      this.roles = data.role
      this.token = data.access_token
    }
  }

  async getAllData (){
    this.isLoading = true;
    this.global.showLoader();
    setTimeout(async() => {
      await this.seluruhAlatServices.getSeluruhAlatData(this.token);
      await this.seluruhAlatServices.getInstalasi();
    }, 1000);
    this.isLoading = false;
    this.global.hideLoader();
  }
  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
    if(this.allAlatDataSub) this.allAlatDataSub.unsubscribe();
   }
}
