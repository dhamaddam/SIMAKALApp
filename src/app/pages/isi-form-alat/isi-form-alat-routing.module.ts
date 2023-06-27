import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsiFormAlatPage } from './isi-form-alat.page';

const routes: Routes = [
  {
    path: '',
    component: IsiFormAlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsiFormAlatPageRoutingModule {}
