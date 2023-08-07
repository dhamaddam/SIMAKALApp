import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeluruhAlatAdminPageRoutingModule } from './seluruh-alat-admin-routing.module';

import { SeluruhAlatAdminPage } from './seluruh-alat-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeluruhAlatAdminPageRoutingModule
  ],
  declarations: [SeluruhAlatAdminPage]
})
export class SeluruhAlatAdminPageModule {}
