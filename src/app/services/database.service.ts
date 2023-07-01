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
    this.baseUrl = environment.baseUrl + '/api/v1/'
    this.key = environment.key
   }

   getViewListContent : any[] = [
        {
            "name": "Will Smith",
            "gender": "Male",
            "country": "USA",
            "status" : 1
        },
        {
            "name": "Jackline Joy",
            "gender": "Female",
            "country": "Sri Lanak",
            "status" : 2
        },
        {
            "name": "Alu Arjun",
            "gender": "Male",
            "country": "Microsoft",
            "status" : 3
        },
        {
            "name": "Kavitha Kumar",
            "gender": "Female",
            "country": "India",
            "status" : 4
        },
        {
            "name": "John Snow",
            "gender": "Male",
            "country": "United Kingdom",
            "status" : 1
        },
        {
            "name": "Priya kanana",
            "gender": "Female",
            "country": "India",
            "status" : 2
        },
        {
            "name": "Shri Devi",
            "gender": "Female",
            "country": "Sri Lanka",
            "status" : 3
        },
        {
            "name": "Richard Roy",
            "gender": "Male",
            "country": "France",
            "status" : 4
        },
        {
            "name": "Sonu Nigam",
            "gender": "Male",
            "country": "India",
            "status" : 1
        },
        {
            "name": "Priya Dutt",
            "gender": "Female",
            "country": "USA",
            "status" : 2
        }
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
        'key': this.key
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
}
