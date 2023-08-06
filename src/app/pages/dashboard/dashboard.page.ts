import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Chart } from "chart.js/auto";
import { GlobalService } from 'src/app/services/global/global.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit, OnInit {

  @ViewChild("persentaseKalibrasiCanvas") persentaseKalibrasiCanvas: any;
  
  allpersentaseKalibrasiChartSub : Subscription = new Subscription;
  allCompositionChart : any[] = []
  allDataDashboard : any[] = [];
  allDataDashboardSub : Subscription = new Subscription
  formTitle = "Dashboard"
  isLoading: boolean = false;

  dataPercentage: any[] = []

  token : any;

  constructor(
    public global : GlobalService,
    private DashboardService: DashboardService,
    private authServices : AuthService,
    private navCtrl: NavController
  ) { 

  }

  doughnutChart: any;

  ngAfterViewInit() {
    this.ComposisiChartMethod();
  }
  ngOnInit() {
    this.check_login()

    this.allDataDashboardSub = this.DashboardService.allDataDashboard.subscribe(data => 
      {
       
      if (data instanceof Object){
        this.allDataDashboard = data;
        this.dataPercentage.push(data.percent_calibration_failed)
        this.dataPercentage.push(data.percent_calibration_succeed)
        this.ComposisiChartMethod();
        // console.log("data",this.dataPercentage)
      } else {
        this.allDataDashboard = this.allDataDashboard.concat(data);
      }
    })

    this.getAllData()

  }

  async getAllData (){
    // this.isLoading = true;
    // this.global.showLoader();
    setTimeout(async() => {
      await this.DashboardService.getDataDashboard(this.token);
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }

  async check_login (){

    const val = await this.authServices.getId();
    
    if (val){
      let data = JSON.parse(val)

      if (data.role_id == 2 ){ // rekomendator
        // this.pages = this.pages
      } else {
        // this.pages = this.pages
      }
    }
  }

  ComposisiChartMethod() {
    let composition_area : number[] = []
    let composition_label : any[] = []

    this.dataPercentage.forEach(data => {
      composition_area.push(data)
      console.log("composition_area",composition_area)
    })
    console.log("this.dataPercentage",this.dataPercentage)
    if(!this.doughnutChart){
      this.doughnutChart = new Chart(this.persentaseKalibrasiCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ["Alat terkalibrasi", "Alat Tidak Terkalibrasi"],
          datasets: [{
            label: 'of %',
            data: composition_area,
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            hoverBackgroundColor: [
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ]
          }]
        }, 
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
        },
      });
    } 
  }

  logout(){
    this.authServices.logout().then(() => {
      this.navCtrl.navigateRoot('/login');
    }).catch( e => 
      { 
        console.log(e);
      })
  }

}
