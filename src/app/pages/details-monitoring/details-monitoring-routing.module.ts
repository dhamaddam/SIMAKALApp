import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMonitoringPage } from './details-monitoring.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsMonitoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsMonitoringPageRoutingModule {}
