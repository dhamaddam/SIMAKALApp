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
  @ViewChild("monitoringChartCanvas") monitoringChartCanvas : any;
 

  allpersentaseKalibrasiChartSub : Subscription = new Subscription;
  allCompositionChart : any[] = []
  allDataDashboard : any[] = [];
  allDataDashboardSub : Subscription = new Subscription
  formTitle = "Dashboard"
  isLoading: boolean = false;

  dataPercentage: any[] = []
  dataMonitoring: any[] = []

  token : any;

  CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };
  
   NAMED_COLORS = [
    this.CHART_COLORS.red,
    this.CHART_COLORS.orange,
    this.CHART_COLORS.yellow,
    this.CHART_COLORS.green,
    this.CHART_COLORS.blue,
    this.CHART_COLORS.purple,
    this.CHART_COLORS.grey,
  ];

  constructor(
    public global : GlobalService,
    private DashboardService: DashboardService,
    private authServices : AuthService,
    private navCtrl: NavController
  ) { 

  }

  doughnutChart: any;
  monitoringChart : any;

  ngAfterViewInit() {

    this.allDataDashboardSub = this.DashboardService.allDataDashboard.subscribe(data => 
      {
       
      if (data instanceof Object){
        this.allDataDashboard = data;
        this.dataPercentage.push(data.percent_calibration_failed)
        this.dataPercentage.push(data.percent_calibration_succeed)
        this.dataMonitoring.push(data.count_under_repair)
        this.dataMonitoring.push(data.count_wait_sparepart)
        this.dataMonitoring.push(data.count_repair_succeed)
        this.dataMonitoring.push(data.count_repair_failed)
        this.dataMonitoring.push(data.count_has_broken)
        this.dataMonitoring.push(data.count_has_ready)

        this.ComposisiChartMethod();
        this.monitoringChartMethode();
      } else {
        this.allDataDashboard = this.allDataDashboard.concat(data);
      }
    })

    this.getAllData()

  }

  
  ngOnInit() {
    this.check_login()
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

    this.dataPercentage.forEach(data => {
      composition_area.push(data)
    })

   if(!this.doughnutChart){
      this.doughnutChart = new Chart(this.persentaseKalibrasiCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ["Alat Tidak Terkalibrasi","Alat terkalibrasi"],
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

  monitoringChartMethode(){

    let monitoring_label : string[] = ["Sdg. Perbaikan","Tunggu Spar.","Sukses Perb.", "Gagal Perb.", "Rusak", "Siap Perb."]
    let monitoring_data : number[] = []
    // monitoring_data.
    this.dataMonitoring.forEach(data => {
      monitoring_data.push(data)
    })
    
    if(!this.monitoringChart){
      this.monitoringChart = new Chart(this.monitoringChartCanvas.nativeElement,
        {
          type: 'bar',
          data: {
            labels : monitoring_label,
            datasets: [{
              barPercentage: 1,
              barThickness: 8,
              minBarLength: 2,
              label: 'Status Alat',
              data: monitoring_data,
              yAxisID: 'left-y-axis',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
          
            },
          ]
          }, 
          options: {
            plugins : {
              legend : {
                labels : {
                  boxWidth : 10,
                  font : {
                    size : 10,
                  },
                },
                display : true,
              }
            },
          }
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
