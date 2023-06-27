import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSemuaAlatPageRoutingModule } from './view-semua-alat-routing.module';

import { ViewSemuaAlatPage } from './view-semua-alat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSemuaAlatPageRoutingModule
  ],
  declarations: [ViewSemuaAlatPage]
})
export class ViewSemuaAlatPageModule {}
