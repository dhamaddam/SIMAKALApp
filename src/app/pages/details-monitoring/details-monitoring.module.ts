import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetailsMonitoringPageRoutingModule } from './details-monitoring-routing.module';

import { DetailsMonitoringPage } from './details-monitoring.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    ReactiveFormsModule,
    IonicModule,
    DetailsMonitoringPageRoutingModule
  ],
  declarations: [DetailsMonitoringPage]
})
export class DetailsMonitoringPageModule {}
