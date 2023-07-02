import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [

    {
      title : 'Dashboard',
      description : "Tampilan Utama Halaman Utama",
      url: '/menu/dashboard',
      icon: 'grid-outline'
    }, 
    {
      title : 'Input Alat Kesehatan',
      description : "Membuat data yang belum pernah terdaftar di  sistem",
      url: '/menu/input-alat-kesehatan',
      icon: 'add-circle-outline'
    }, 
    {
      title : 'Jadwal Kalibrasi',
      description : "Lihat Seluruh Alat Terdaftar yang akan di jadwalkan kalibrasi" ,
      url: '/menu/jadwal-kalibrasi',
      icon: 'calendar-outline'
    }, 
    {
      title:'Monitoring Alat',
      description : 'Lihat Seluruh Alat  Rusak, Sedang Perbaikan, Selesai Perbaikan dan Gagal Perbaikan',
      url: '/menu/monitoring-alat',
      icon: 'albums-outline'
    },
    {
      title:'Lihat Seluruh Alat',
      description : "Laporan Berupa Grafik Persentase Keberhasilan  kalibrasi alat",
      url: '/menu/seluruh-alat',
      icon: 'layers-outline'
    },
    {
      title:'Laporan',
      description : "Laporan Berupa Grafik Persentase Keberhasilan  kalibrasi alat",
      url: '/menu/generate-laporan',
      icon: 'clipboard-outline'
    },

  ];

  pages_rekomendator = [
    {
      title : 'Dashboard',
      url: '/menu/dashboard-rekomendator',
      icon: 'grid-outline'
    }, 
    {
      title : 'Tanah',
      url: '/menu/keragaan-tanah',
      icon: 'globe-outline'
    }, 

  ];
  constructor(
    private authServices : AuthService,
    private navCtrl: NavController
    
  ) { }

  ngOnInit() {
    this.check_login()
  }

  async check_login (){

    const val = await this.authServices.getId();
    
    if (val){
      let data = JSON.parse(val)

      if (data.role_id == 2 ){ // rekomendator
        this.pages = this.pages
      } else {
        this.pages = this.pages
      }
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
