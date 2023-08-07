import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeluruhAlatAdminPage } from './seluruh-alat-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SeluruhAlatAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeluruhAlatAdminPageRoutingModule {}
