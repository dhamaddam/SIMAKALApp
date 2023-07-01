import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { InputAlatKesehatanPageRoutingModule } from './input-alat-kesehatan-routing.module';

import { InputAlatKesehatanPage } from './input-alat-kesehatan.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InputAlatKesehatanPageRoutingModule
  ],
  declarations: [InputAlatKesehatanPage]
})
export class InputAlatKesehatanPageModule {}
