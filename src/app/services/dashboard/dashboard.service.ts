import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _allDataDashboard = new BehaviorSubject<any>(null)


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
      console.log("isi auth service",res);
      const data = JSON.parse(res)
      console.log(data.status)
      
      if(data.status == true){ 
        await loading.dismiss();
        let result =  data.data
        console.log("result", result)
        this.setUserData(JSON.stringify(result))
        if (result.role_id == 2){
          this.router.navigateByUrl('/menu/dashboard', { replaceUrl: true });
        } else {
          this.router.navigateByUrl('/menu/dashboard', { replaceUrl: true });
        }
      }
      else if (data.status == false){
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

  get allDataDashboard(){
    return this._allDataDashboard.asObservable();
  }
  
  async getDataDashboard(token : string) {
    try {
      let getDataDashboard : any = this.DB.getDataDashboard(token).then(async (params : any) =>{
        const data = JSON.parse(params)
        await this._allDataDashboard.next(data.data)
      } )
    } catch (error){
      console.log(error)
      throw(error)
    }
  }

  setUserData(uid : any) {
    this.storage.setStorage('uid', uid);
  }
}
