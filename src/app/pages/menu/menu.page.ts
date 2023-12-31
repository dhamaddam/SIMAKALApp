import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  username : string = ""
  role_name : string = ""

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

  pages_instalasi = [
    {
      title : 'Dashboard',
      description : "Tampilan Utama Halaman Utama",
      url: '/menu/dashboard',
      icon: 'grid-outline'
    }, 
    {
      title:'Lihat Seluruh Alat',
      description : "Laporan Berupa Grafik Persentase Keberhasilan  kalibrasi alat",
      url: '/menu/seluruh-alat',
      icon: 'layers-outline'
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
  ];

  pages_katim =  [
    {
      title : 'Dashboard',
      description : "Tampilan Utama Halaman Utama",
      url: '/menu/dashboard',
      icon: 'grid-outline'
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

  pages_bpfk = [
    {
      title : 'Jadwal Kalibrasi',
      description : "Lihat Seluruh Alat Terdaftar yang akan di jadwalkan kalibrasi" ,
      url: '/menu/jadwal-kalibrasi',
      icon: 'calendar-outline'
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
      if (data.role == "USER" ){ // rekomendator
        this.pages = this.pages
        this.username = data.username
        this.role_name = "superAdmin"
      }
      else if (data.role == "ADMIN"){
        this.pages = this.pages
        this.username = data.username
        this.role_name = "ADMIN"
      }
       else if (data.role == "INSTALASI"){
        this.pages = this.pages_instalasi
        this.username = data.username
        this.role_name = "Instalasi"
      } else if (data.role == "KATIM"){
        this.pages = this.pages_katim
        this.username = data.username
        this.role_name = "KATIM"
      } else if (data.role == "BPFK"){
        this.pages = this.pages_bpfk
        this.username = data.username
        this.role_name = "BPFK"
      }
      else {
        this.pages = this.pages
        this.username = data.name
        this.role_name = "Instalasi"
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
