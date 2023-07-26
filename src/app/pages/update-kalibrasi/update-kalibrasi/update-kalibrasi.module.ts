import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { UpdateKalibrasiPageRoutingModule } from './update-kalibrasi-routing.module';

import { UpdateKalibrasiPage } from './update-kalibrasi.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderModule } from "angular-uploader";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UploaderModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateKalibrasiPageRoutingModule
  ],
  declarations: [UpdateKalibrasiPage]
})
export class UpdateKalibrasiPageModule {}
