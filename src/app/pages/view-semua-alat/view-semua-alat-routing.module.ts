import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSemuaAlatPage } from './view-semua-alat.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSemuaAlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSemuaAlatPageRoutingModule {}
