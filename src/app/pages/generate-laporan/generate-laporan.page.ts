import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Chart } from "chart.js/auto";
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-generate-laporan',
  templateUrl: './generate-laporan.page.html',
  styleUrls: ['./generate-laporan.page.scss'],
})
export class GenerateLaporanPage implements  AfterViewInit, OnInit {


  allpersentaseKalibrasiChartSub : Subscription = new Subscription;
  allpersentaseKalibrasiChart : any[] = []


  @ViewChild("persentaseKalibrasiCanvas") persentaseKalibrasiCanvas: any;
 
  formTitle = "Laporan"
  doughnutChart: any;

  constructor(
    private global : GlobalService,
    private dashboarServices : DashboardService,
 
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.persentaseKalibrasiChartMethod();
  }
  persentaseKalibrasiChartMethod (){
    let composition_area : any[] = []
    let composition_label : any[] = []

    this.allpersentaseKalibrasiChart.forEach(data => {
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
}
