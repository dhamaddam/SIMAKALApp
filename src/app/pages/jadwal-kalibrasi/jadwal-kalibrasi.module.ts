import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalKalibrasiPageRoutingModule } from './jadwal-kalibrasi-routing.module';

import { JadwalKalibrasiPage } from './jadwal-kalibrasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalKalibrasiPageRoutingModule
  ],
  declarations: [JadwalKalibrasiPage]
})
export class JadwalKalibrasiPageModule {}
