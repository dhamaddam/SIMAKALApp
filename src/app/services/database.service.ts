import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseUrl: string;
  key: string;

  constructor(
    public http: HttpClient
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
        "name": "HD",
        "full_name": "Hemodialisis",
        "status" : 1
      },
      {
        "id": "03",
        "name": "Patologi",
        "full_name": "Patologi Klinik",
        "status" : 1
      },
      {
        "id": "04",
        "name": "Rawat Inap Anggrek",
        "full_name": "Rawat Inap Anggrek",
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

  getAllAlatKesehatan(id : string, uid : string){
    let params = {
      'id': id,
      'uid' : uid
    };
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'key': this.key
      })
    };

    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'getAllAlatKesehatan', params, httpHeader).subscribe( result => {
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
}
