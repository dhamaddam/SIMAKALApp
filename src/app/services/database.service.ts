import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alat } from '../models/alat.model';
import { AuthService } from './auth/auth.service';
import { StorageService } from './storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseUrl: string;
  key: string;

  constructor(
    public http: HttpClient,
    private storage: StorageService,
  ) {
    this.baseUrl = environment.baseUrl + 'api/'
    this.key = environment.key
   }

   getViewListContent : any[] = [
        {
            "id" : 1,
            "name": "Will Smith",
            "gender": "Male",
            "country": "USA",
            "status" : 1
        },
        {
            "id" : 2,
            "name": "Jackline Joy",
            "gender": "Female",
            "country": "Sri Lanak",
            "status" : 2
        },
        {
            "id" : 3,
            "name": "Alu Arjun",
            "gender": "Male",
            "country": "Microsoft",
            "status" : 3
        },
        {
            "id" : 4,
            "name": "Kavitha Kumar",
            "gender": "Female",
            "country": "India",
            "status" : 4
        },
        {
            "id" : 5,
            "name": "John Snow",
            "gender": "Male",
            "country": "United Kingdom",
            "status" : 1
        },
        {
            "id" : 6,
            "name": "Priya kanana",
            "gender": "Female",
            "country": "India",
            "status" : 2
        },
        {
            "id" : 7,
            "name": "Shri Devi",
            "gender": "Female",
            "country": "Sri Lanka",
            "status" : 3
        },
        {
            "id" : 8,
            "name": "Richard Roy",
            "gender": "Male",
            "country": "France",
            "status" : 4
        },
        {
            "id" : 9,
            "name": "Sonu Nigam",
            "gender": "Male",
            "country": "India",
            "status" : 1
        },
        {
            "id" : 10,
            "name": "Priya Dutt",
            "gender": "Female",
            "country": "USA",
            "status" : 2
        }
    ]

    getInstalasi : any[] = [
      {
          "id": "01",
          "name": "IGD",
          "full_name": "Instalasi Gawat Darurat",
          "status" : 1
      },
      {
        "id": "02",
        "name": "Heamodialisa",
        "full_name": "Heamodialisa",
        "status" : 1
      },
      {
        "id": "03",
        "name": "Patologi Klinik",
        "full_name": "Patologi Klinik",
        "status" : 1
      },
      {
        "id": "04",
        "name": "Anggrek 1",
        "full_name": "Anggrek 1",
        "status" : 1
      }, 
      {
        "id": "05",
        "name": "Poli Kebidanan",
        "full_name": "Poli Kebidanan",
        "status" : 1
      },
    ]
  // POST 
  getLogin(email : any, password: any) {
    let params = {
      'email': email,
      'password' : password
    };
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'login', params, httpHeader).subscribe( result => {
        resolve(JSON.stringify(result))
      },
        err => {
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("password incorect!");
            } else if (err.status == 404) { 
              console.log("password or Username incorect!");
            } else {
              console.log(err)
            }
            reject(err);
        })
    })
  }

  getNotification(token : string) {
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'notification', httpHeader).subscribe( result => {
        resolve(JSON.stringify(result))
      },
        err => {
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("password incorect!");
            } else if (err.status == 404) { 
              console.log("password or Username incorect!");
            } else {
              console.log(err)
            }
            reject(err);
        })
    })
  }
  
  public uploadImage(id: string ,blobData: any, ext: any, token : string): Promise<any> {
    
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise<any>((resolve, reject) => {
      
      const formData = new FormData();
      formData.append('file', blobData,`image.${ext}`);
      console.log("formData",formData)
      
      this.http.post(this.baseUrl + 'deviceDetail/updateCalibrationStatus?id='+id, formData, httpHeader).subscribe((data) => {
        resolve(JSON.stringify(data));
      }, error => {
        reject(error);
      });
    });
  }

  getAllAlatKesehatan( token : string){
    
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };

    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'medicalDevice',httpHeader).subscribe( result => {
        resolve(JSON.stringify(result))
      },
        err => {
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("password incorect!");
            } else if (err.status == 404) { 
              console.log("password or Username incorect!");
            } else {
              console.log(err)
            }
            reject(err);
        })
    })
  }

  getAllAlatKesehatanById(id : string,token : string){
    
    let params = {
      'id': id
    };

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };

    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'medicalDevice?id='+id,httpHeader).subscribe( result => {
        resolve(JSON.stringify(result))
      },
        err => {
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("password incorect!");
            } else if (err.status == 404) { 
              console.log("password or Username incorect!");
            } else {
              console.log(err)
            }
            reject(err);
        })
    })
  }

  saveInputAlatKesehatan(data : Alat[], token : string){
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    console.log("data saveInputAlatKesehatan",data[0])
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'medicalDevice/create', data[0], httpHeader).subscribe(result => {
        //console.log(res.data);
        resolve(JSON.stringify(result))
      },
        err => {
            // reject(err);
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
            } else if (err.status == 404) { 
              console.log("Not Found");
            } else {
              console.log(err)
            }
            reject(err);
        })
      })

  }

  // updateOneSignal

  updateOneSignal(idDevice: string ,token : string){
    console.log("updateOneSignal idDevice",idDevice)
    let params = {
      'one_signal': idDevice,
    };

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    console.log("data saveInputAlatKesehatan")
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'updateOneSignal', params, httpHeader).subscribe(result => {
        //console.log(res.data);
        resolve(JSON.stringify(result))
      },
        err => {
            // reject(err);
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
            } else if (err.status == 404) { 
              console.log("Not Found");
            } else {
              console.log(err)
            }
            reject(err);
        })
      })
  }

  updateAlatKesehatan(id:string, data : any, token : string){
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'medicalDevice/update?id='+id, data, httpHeader).subscribe(result => {
        resolve(JSON.stringify(result))
      },
        err => {
            // reject(err);
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
            } else if (err.status == 404) { 
              console.log("Not Found");
            } else {
              console.log(err)
            }
            reject(err);
        })
      })
  }

  updateAlatKesehatanCalibration(id:string, data : any, token : string){
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'deviceDetail/updateCalibrationStatus?id='+id, data, httpHeader).subscribe(result => {
        resolve(JSON.stringify(result))
      },
        err => {
            // reject(err);
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
            } else if (err.status == 404) { 
              console.log("Not Found");
            } else {
              console.log(err)
            }
            reject(err);
        })
      })
  }

  sendAndCreateNotificationMonitoring(tanggal:string, data : any, token : string){

    let params = {
      'roles' : ["ADMIN","KSO","BPFK","KATIM"],
      'title' : 'Notifikasi Status Alat '+tanggal,
      'link' : '/menu/monitoring-alat' ,
      'device_id':data.data.id,
      'message' : data.data.name + " dalam status "+ data.data.monitoring_status,
    };

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'notification/createForRoles', params, httpHeader).subscribe(result => {
        resolve(JSON.stringify(result))
      },
        err => {
            // reject(err);
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
            } else if (err.status == 404) { 
              console.log("Not Found");
            } else {
              console.log(err)
            }
            reject(err);
        })
      })
  }

  sendAndCreateNotificationCalibration(tanggal:string, data : any, token : string){

    console.log("data sendAndCreateNotificationCalibration",data)
    var date = new Date(data.re_calibration);
    let params = {
      'roles' : ["ADMIN","BPFK","KSO"],
      'title' : 'Notifikasi Kalibrasi Alat',
      'link' : '/menu/jadwal-kalibrasi' ,
      'device_id' : data.id,
      'message' : data.name + "data Diperbaharui dengan status "+data.calibration_status,
    };

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'notification/createForRoles', params, httpHeader).subscribe(result => {
        resolve(JSON.stringify(result))
      },
        err => {
            // reject(err);
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
            } else if (err.status == 404) { 
              console.log("Not Found");
            } else {
              console.log(err)
            }
            reject(err);
        })
      })
  }

  sendAndCreateNotificationBPFK(data : any, token : string){

    console.log("data sendAndCreateNotificationBPFK",data)
    var date = new Date(data.re_calibration);
    let params = {
      'roles' : ["BPFK","KSO"],
      'title' : 'Notifikasi Kalibrasi Alat',
      'link' : '/menu/jadwal-kalibrasi' ,
      'device_id' : data.id,
      'message' : data.name + " Memasuki Tanggal Expired Untuk Dikalibrasi Ulang Tanggal "+date.toLocaleString("en-ID"),
    };

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'notification/createForRoles', params, httpHeader).subscribe(result => {
        resolve(JSON.stringify(result))
      },
        err => {
            // reject(err);
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
            } else if (err.status == 404) { 
              console.log("Not Found");
            } else {
              console.log(err)
            }
            reject(err);
        })
      })
  }
}
