import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Chart } from "chart.js/auto";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit, OnInit {

  @ViewChild("persentaseKalibrasiCanvas") persentaseKalibrasiCanvas: any;
  
  allpersentaseKalibrasiChartSub : Subscription = new Subscription;
  allCompositionChart : any[] = []
  formTitle = "Dashboard"
  constructor(
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
    let composition_area : any[] = []
    let composition_label : any[] = []

    this.allCompositionChart.forEach(data => {
      composition_area.push(data.area)
      composition_label.push(data.category)
    })
    if(!this.doughnutChart){
      this.doughnutChart = new Chart(this.persentaseKalibrasiCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ["Alat terkalibrasi", "Alat Tidak Terkalibrasi"],
          datasets: [{
            label: 'of %',
            data: [73,27],
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
