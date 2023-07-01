import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  
  constructor(
    private global : GlobalService,
    private seluruhAlatServices : SeluruhAlatService
 
  ) { }

  ngOnInit() {
    this.allContentDummySub = this.seluruhAlatServices.allContentDummy.subscribe(data => {
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
      await this.seluruhAlatServices.getContentDummy();
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }
  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
   }
}
