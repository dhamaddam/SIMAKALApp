import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Alat } from 'src/app/models/alat.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InputAlatKesehatanService {

  private _modeldataNotification = new BehaviorSubject<any>(null);

  constructor(
    private loadingController : LoadingController,
    private api : DatabaseService,
  ) {

  }

  saveInputAlatKesehatan(data : Alat[], token : string){
    this.api.saveInputAlatKesehatan(data, token).then(async (params:any) => {
      const data = JSON.parse(params)
       if (data.meta.status == "success") {
        console.log("data sukses disimpan")
       } 
       else { 
        console.log("data gagal disimpan")
       }
    })
  }

  updateAlatKesehatan(id_alat: string, data : any, token : string){
    this.api.updateAlatKesehatan(id_alat,data, token).then(async (params:any) => {
      const data = JSON.parse(params)
       if (data.meta.status == "success") {
        console.log("data sukses disimpan")
        this.sendAndCreateNotificationMonitoring(id_alat,data,token)
       } 
       else { 
        console.log("data gagal disimpan")
       }
    })
  }

  updateAlatKesehatanCalibration(id_alat: string, data : any, token : string){
    this.api.updateAlatKesehatanCalibration(id_alat,data, token).then(async (params:any) => {
      const data = JSON.parse(params)
       if (data.meta.status == "success") {
        console.log("data sukses disimpan")
        this.sendAndCreateNotificationCalibration(id_alat,data,token)
       } 
       else { 
        console.log("data gagal disimpan")
       }
    })
  }

  sendAndCreateNotificationMonitoring(tanggal : string, data : any, token:string){
    this.api.sendAndCreateNotificationMonitoring(tanggal, data, token).then(async (params : any) => {
      const data = JSON.parse(params)
      if (data.meta.status == "success"){
        console.log("data sukses disimpan")
      } else {
        console.log("data sukses disimpan")
      }
    })
  }
  sendAndCreateNotificationCalibration(tanggal : string, data : any, token:string){
    this.api.sendAndCreateNotificationCalibration(tanggal, data, token).then(async (params : any) => {
      const data = JSON.parse(params)
      if (data.meta.status == "success"){
        console.log("data sukses disimpan")
      } else {
        console.log("data sukses disimpan")
      }
    })
  }

  
}
