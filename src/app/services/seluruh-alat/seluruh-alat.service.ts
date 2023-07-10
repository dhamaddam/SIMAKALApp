import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeluruhAlatService {

  private _allContentDummy = new BehaviorSubject<any>(null)
  private _allInstalasi = new BehaviorSubject<any>(null)
  private _allDataAlatKesehatan = new BehaviorSubject<any>(null)

  model: [] = [];
  new_model: [] = [];
  
  constructor(
  private api : DatabaseService,
  private storage : StorageService
  ) { }

  get allContentDummy(){
    return this._allContentDummy.asObservable();
  }

  get allAllInstalasi(){
    return this._allInstalasi.asObservable();
  }
  get allDataAlatKesehatan(){
    return this._allDataAlatKesehatan.asObservable();
  }

  getSeluruhAlat(){
    return this.storage.getStorage('seluruhAlat');
  }

  async getSeluruhAlatData(token : string) {
    try {
      let getSeluruhAlat : any = this.api.getAllAlatKesehatan('1',token).then(async (params : any) =>{
        const data = JSON.parse(params)
        await this._allDataAlatKesehatan.next(data.data)
      } )
    } catch (error){
      console.log(error)
      throw(error)
    }
  }

  getContentDummy(){
    try {
      let contentDummy : any[] = this.api.getViewListContent;
      this._allContentDummy.next(contentDummy);
    } catch (error){
      console.log("getContentDummy",error);
      throw(error)
    }
  }

  getInstalasi(){
    try {
      let instalasi : any[] = this.api.getInstalasi;
      this._allInstalasi.next(instalasi);
    }catch (error){
      console.log("instalasi",error);
      throw(error)
    }
  }
}
