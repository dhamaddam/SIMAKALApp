import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetailsMonitoringPageRoutingModule } from './details-monitoring-routing.module';

import { DetailsMonitoringPage } from './details-monitoring.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DetailsMonitoringPageRoutingModule
  ],
  declarations: [DetailsMonitoringPage]
})
export class DetailsMonitoringPageModule {}
