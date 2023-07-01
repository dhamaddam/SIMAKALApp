import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalKalibrasiPage } from './jadwal-kalibrasi.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalKalibrasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalKalibrasiPageRoutingModule {}
