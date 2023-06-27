import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDetailSemuaAlatPageRoutingModule } from './view-detail-semua-alat-routing.module';

import { ViewDetailSemuaAlatPage } from './view-detail-semua-alat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDetailSemuaAlatPageRoutingModule
  ],
  declarations: [ViewDetailSemuaAlatPage]
})
export class ViewDetailSemuaAlatPageModule {}
