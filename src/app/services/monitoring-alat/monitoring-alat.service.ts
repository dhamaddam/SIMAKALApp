import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class MonitoringAlatService {

  private _allContentDummy = new BehaviorSubject<any>(null)
  private _allDataAlatKesehatan = new BehaviorSubject<any>(null)

  constructor(
    private api : DatabaseService
  ) { }

  get allContentDummy(){
    return this._allContentDummy.asObservable();
  }

  get allDataAlatKesehatan(){
    return this._allDataAlatKesehatan.asObservable();
  }

  getContentDummy(){
    try {
      let contentDummy : any[] = this.api.getViewListContent;
      this._allContentDummy.next(contentDummy);
    }catch (error){
      console.log("getContentDummy",error);
      throw(error)
    }
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
}
