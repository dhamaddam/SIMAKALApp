import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsiFormAlatPageRoutingModule } from './isi-form-alat-routing.module';

import { IsiFormAlatPage } from './isi-form-alat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsiFormAlatPageRoutingModule
  ],
  declarations: [IsiFormAlatPage]
})
export class IsiFormAlatPageModule {}
