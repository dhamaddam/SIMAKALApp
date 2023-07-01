import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoringAlatPageRoutingModule } from './monitoring-alat-routing.module';

import { MonitoringAlatPage } from './monitoring-alat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoringAlatPageRoutingModule
  ],
  declarations: [MonitoringAlatPage]
})
export class MonitoringAlatPageModule {}
