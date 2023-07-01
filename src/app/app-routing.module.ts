import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'isi-form-alat',
    loadChildren: () => import('./pages/isi-form-alat/isi-form-alat.module').then( m => m.IsiFormAlatPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'input-alat-kesehatan',
    loadChildren: () => import('./pages/input-alat-kesehatan/input-alat-kesehatan.module').then( m => m.InputAlatKesehatanPageModule)
  },
  {
    path: 'jadwal-kalibrasi',
    loadChildren: () => import('./pages/jadwal-kalibrasi/jadwal-kalibrasi.module').then( m => m.JadwalKalibrasiPageModule)
  },
  {
    path: 'monitoring-alat',
    loadChildren: () => import('./pages/monitoring-alat/monitoring-alat.module').then( m => m.MonitoringAlatPageModule)
  },
  {
    path: 'monitoring-alat',
    loadChildren: () => import('./pages/monitoring-alat/monitoring-alat.module').then( m => m.MonitoringAlatPageModule)
  },
  {
    path: 'seluruh-alat',
    loadChildren: () => import('./pages/seluruh-alat/seluruh-alat.module').then( m => m.SeluruhAlatPageModule)
  },
  {
    path: 'generate-laporan',
    loadChildren: () => import('./pages/generate-laporan/generate-laporan.module').then( m => m.GenerateLaporanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
