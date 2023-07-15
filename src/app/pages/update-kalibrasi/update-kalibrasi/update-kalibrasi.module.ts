import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { UpdateKalibrasiPageRoutingModule } from './update-kalibrasi-routing.module';

import { UpdateKalibrasiPage } from './update-kalibrasi.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateKalibrasiPageRoutingModule
  ],
  declarations: [UpdateKalibrasiPage]
})
export class UpdateKalibrasiPageModule {}
