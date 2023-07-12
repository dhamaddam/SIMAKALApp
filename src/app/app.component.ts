import { Component } from '@angular/core';
import { Router } from '@angular/router';
import OneSignal from 'onesignal-cordova-plugin';
import { environment } from 'src/environments/environment';
import { ToastService } from './services/toast/toast.service';
// import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth/auth.service';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private ONESIGNAL_APP_ID : string = '';
  private lastTimeBackButtonWasPressed = 0;
  private timePeriodToAction = 2000;

  constructor(
    private router: Router,
    private storage: StorageService,
    // private ap: AndroidPermissions, 
    private toast: ToastService,
    private platform: Platform
  ) {

    this.ONESIGNAL_APP_ID = environment.ONESIGNAL_APP_ID;
    this.platform.ready().then(() => {
      // OneSignalInit();
    });
    OneSignal.setAppId(this.ONESIGNAL_APP_ID);
    OneSignal.setNotificationOpenedHandler( (jsonData: any) => {
      this.toast.show(jsonData.notification.body);
      this.router.navigateByUrl('/notification', { replaceUrl: true });
    });
    
    OneSignal.setNotificationWillShowInForegroundHandler(
       (jsonData: any) => {
        this.toast.show(jsonData.notification.body);
        this.router.navigateByUrl('/notification', { replaceUrl: true });
    });

    OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
      // console.log("User accepted notifications: " + accepted);
    });
    
    
    this.checkPermissionCamera()
    this.checkBackgroundPermission()
  }

  setUserData(notication : any) {
    this.storage.setStorage('notication', notication);
  }

  private async checkPermissionCamera() {
    // this.ap.requestPermission(this.ap.PERMISSION.CAMERA)
    //   .then(
    //     result => {
    //       // code where you call camera directive
    //       console.log('Has permission?', result.hasPermission)
    //     },
    //     err => this.ap.requestPermission(this.ap.PERMISSION.CAMERA)
    //   );
  }

  private async checkBackgroundPermission() {
    // try {
    //   const result = await this.ap.checkPermission(this.ap.PERMISSION.ACCESS_BACKGROUND_LOCATION);
    //   if (!result || result.hasPermission === false) {
    //     this.requestPermissions();
    //   }
    // } catch (error) {
    //   this.requestPermissions();
    // }
  }

  private async requestPermissions() {
    // try {
    //   const data = await this.ap.requestPermissions([
    //     "android.permission.ACCESS_BACKGROUND_LOCATION",
    //     "android.permission.ACCESS_COARSE_LOCATION",
    //     this.ap.PERMISSION.ACCESS_FINE_LOCATION,
    //   ]);
    //   if (!data.hasPermission) {
    //     throw new Error('No permission');
    //   }
    // } catch (error) {
    //   // await alert('Membuutuhkah Persmission')
    //   // this.signOut();
    //   // console.log(error, 'error permission')
    //   // this.alert.show('','Permission belum di setting silahkan setting terlebih dahulu', this.platform.exitApp())
    // }
  }
  
 
}
