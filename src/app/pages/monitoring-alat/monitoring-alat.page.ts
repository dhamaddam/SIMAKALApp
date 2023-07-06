import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';
import { MonitoringAlatService } from 'src/app/services/monitoring-alat/monitoring-alat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monitoring-alat',
  templateUrl: './monitoring-alat.page.html',
  styleUrls: ['./monitoring-alat.page.scss'],
})
export class MonitoringAlatPage implements OnInit {


  param: any;
  formTitle = "Monitoring Alat"
  allContentDummy : any[] = [];
  allContentDummySub : Subscription = new Subscription;
  isLoading: boolean = false;

  constructor(
    private global : GlobalService,
    private monitoringAlatServices : MonitoringAlatService,
    private router: Router, 
    private activatedRoute: ActivatedRoute, 

  ) { 

  }

  ngOnInit() {
    this.allContentDummySub = this.monitoringAlatServices.allContentDummy.subscribe(data => {
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
      await this.monitoringAlatServices.getContentDummy();
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }
  handleClick (event : any, param : string){
    this.router.navigate(['details-monitoring'], {
      queryParams: {
        param: param
      }
    });
  }

  

  ngOnDestroy() {
    if(this.allContentDummySub) this.allContentDummySub.unsubscribe();
   }
}
