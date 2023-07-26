import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import { OneSignalPlugin } from 'onesignal-cordova-plugin';
import { UploaderModule } from 'angular-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, 
    UploaderModule,
    PdfViewerModule,
    IonicModule.forRoot(), 
    AppRoutingModule ],
  providers: [OneSignal, OneSignalPlugin, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
