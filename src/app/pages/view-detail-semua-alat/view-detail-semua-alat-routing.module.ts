import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDetailSemuaAlatPage } from './view-detail-semua-alat.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDetailSemuaAlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDetailSemuaAlatPageRoutingModule {}
