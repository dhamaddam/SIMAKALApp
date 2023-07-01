import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputAlatKesehatanPage } from './input-alat-kesehatan.page';

const routes: Routes = [
  {
    path: '',
    component: InputAlatKesehatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputAlatKesehatanPageRoutingModule {}
