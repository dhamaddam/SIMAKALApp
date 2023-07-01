import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateLaporanPageRoutingModule } from './generate-laporan-routing.module';

import { GenerateLaporanPage } from './generate-laporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateLaporanPageRoutingModule
  ],
  declarations: [GenerateLaporanPage]
})
export class GenerateLaporanPageModule {}
