import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  constructor(private _toast: ToastController) { }

  async show(msg: string, pos:any = 'bottom') {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      position: pos
    });

    await toast.present();
  }
}
