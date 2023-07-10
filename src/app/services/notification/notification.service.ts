import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

  @Injectable({
    providedIn: 'root'
  })

export class NotificationService {

  private _modeldataNotification = new BehaviorSubject<any>(null);

  constructor(
    private storage: StorageService,
    private router: Router,
    private alertController : AlertController,
    private loadingController : LoadingController,
    private DB : DatabaseService
  ) { 

  }
  
  get alldataNotification() {
    return this._modeldataNotification.asObservable();
  }

  async getNotifications(role : string){
    const loading = await this.loadingController.create();
    await loading.present();

    this.DB.getNotification(role).then (async (res : any) => {
      console.log("isi auth service",res);
      const data = JSON.parse(res)
      console.log(data.status)
    }).catch ( async (e) => {
      console.log("log Notification", e)
      throw(e)
    })
    await loading.dismiss();
  }
}
