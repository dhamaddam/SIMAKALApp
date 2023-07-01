import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateLaporanPage } from './generate-laporan.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateLaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateLaporanPageRoutingModule {}
