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
      console.log(params)
       if (params.status == "success") {
        console.log("data sukses disimpan")
       } 
       else { 
        console.log("data gagal disimpan")
       }
    })
  }

  
}
