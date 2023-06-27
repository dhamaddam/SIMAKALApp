import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'view-semua-alat',
    loadChildren: () => import('./pages/view-semua-alat/view-semua-alat.module').then( m => m.ViewSemuaAlatPageModule)
  },
  {
    path: 'view-detail-semua-alat',
    loadChildren: () => import('./pages/view-detail-semua-alat/view-detail-semua-alat.module').then( m => m.ViewDetailSemuaAlatPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
