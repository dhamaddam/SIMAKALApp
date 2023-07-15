import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { StorageService } from '../storage/storage.service';
import OneSignal from 'onesignal-cordova-plugin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token : any; 
  idDevice : any;
  
  
  constructor(
    private storage: StorageService,
    private router: Router,
    private alertController : AlertController,
    private loadingController : LoadingController,
    private DB : DatabaseService 
  ) { }

  async login(email: any, password : any): Promise<any>{
    

    const loading = await this.loadingController.create();
    await loading.present();
      
    this.DB.getLogin(email, password).then (async (res : any) => {
      
      const data = JSON.parse(res)
      if(data.meta.status == 'success'){ 
        await loading.dismiss();
        let result =  data.data.user
        result.access_token = data.data.access_token
        result.token_type = data.data.token_type

        console.log("result", result)
        this.setUserData(JSON.stringify(result))
        if (result.role == "USER"){
          this.router.navigateByUrl('/menu/dashboard', { replaceUrl: true });
        } else if (result.role == "INSTALASI"){ 
          this.router.navigateByUrl('/menu/dashboard', { replaceUrl: true });
        } else if (result.role == "BPFK"){ 
          this.router.navigateByUrl('/menu/dashboard', { replaceUrl: true });
        } else {
          this.router.navigateByUrl('/menu/dashboard', { replaceUrl: true });
        }
        OneSignal.getDeviceState( (tag : any) => {
          // token = tag.userId;
          this.idDevice = tag.userId
          console.log("this.idDevice",this.idDevice)
        });
        this.DB.updateOneSignal(this.idDevice,result.access_token).then (async (res : any) => {

        }).catch(async (e) => {
          console.log("error updateOneSignal",e)
          throw(e)
        })

      }
      else if (data.meta.status == 'error'){
        this.router.navigateByUrl('/login', { replaceUrl: true });
      }
      else {
        await loading.dismiss();
        const alert = await this.alertController.create({
                  header: 'Login failed',
                  message: 'Mohon maaf akun Anda Belum di Verifikasi',
                  buttons: ['OK'],
                });
        await alert.present();
      }
    }).catch ( async (e) => {
      await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: JSON.stringify(e),
          buttons: ['OK'],
        });
        await alert.present();
      throw(e)
    })
    await loading.dismiss();
  }

  setUserData(uid : any) {
    this.storage.setStorage('uid', uid);
  }

  setUserDeviceNotification(notication : any){
    this.storage.setStorage('notication', notication);
  }

  async getUserDeviceNotificationData(){
    return (await this.storage.getStorage('notication')).value;
  }

  async getId (){
    return (await this.storage.getStorage('uid')).value;
  }

  resetPassword(){}
  
  async logout(){
    return await this.storage.removeStorage('uid');
  }

}
