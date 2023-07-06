import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-monitoring',
  templateUrl: './details-monitoring.page.html',
  styleUrls: ['./details-monitoring.page.scss'],
})
export class DetailsMonitoringPage implements OnInit {

  param: any;
  formTitle : string = "Detail Monitoring"
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(async params => {
      console.log(params['param'],'isi ')
      this.param = params['param'];
    }, async err => {
      console.log(err)
      // await loading.dismiss();
    })
  }

}
