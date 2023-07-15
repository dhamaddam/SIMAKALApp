import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateKalibrasiPage } from './update-kalibrasi.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateKalibrasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateKalibrasiPageRoutingModule {}
