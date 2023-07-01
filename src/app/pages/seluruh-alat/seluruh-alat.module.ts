import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeluruhAlatPageRoutingModule } from './seluruh-alat-routing.module';

import { SeluruhAlatPage } from './seluruh-alat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeluruhAlatPageRoutingModule
  ],
  declarations: [SeluruhAlatPage]
})
export class SeluruhAlatPageModule {}
