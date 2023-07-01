import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children : [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'input-alat-kesehatan',
        loadChildren: () => import('../input-alat-kesehatan/input-alat-kesehatan.module').then( m => m.InputAlatKesehatanPageModule)
      },
      {
        path: 'jadwal-kalibrasi',
        loadChildren: () => import('../jadwal-kalibrasi/jadwal-kalibrasi.module').then( m => m.JadwalKalibrasiPageModule)
      },
      {
        path: 'monitoring-alat',
        loadChildren: () => import('../monitoring-alat/monitoring-alat.module').then( m => m.MonitoringAlatPageModule)
      },
      {
        path: 'seluruh-alat',
        loadChildren: () => import('../seluruh-alat/seluruh-alat.module').then( m => m.SeluruhAlatPageModule)
      },
      {
        path: 'generate-laporan',
        loadChildren: () => import('../generate-laporan/generate-laporan.module').then( m => m.GenerateLaporanPageModule)
      },
    ]
  },
    {
      path:'',
      redirectTo:'/login',
      pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {


}
