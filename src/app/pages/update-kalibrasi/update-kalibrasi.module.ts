import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateKalibrasiPageRoutingModule } from './update-kalibrasi-routing.module';

import { UpdateKalibrasiPage } from './update-kalibrasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateKalibrasiPageRoutingModule
  ],
  declarations: [UpdateKalibrasiPage]
})
export class UpdateKalibrasiPageModule {}
