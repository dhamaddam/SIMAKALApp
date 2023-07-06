import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMonitoringPageRoutingModule } from './details-monitoring-routing.module';

import { DetailsMonitoringPage } from './details-monitoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMonitoringPageRoutingModule
  ],
  declarations: [DetailsMonitoringPage]
})
export class DetailsMonitoringPageModule {}
