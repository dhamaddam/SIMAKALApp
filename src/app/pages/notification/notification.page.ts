import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  formTitle = "Notifikasi Form"

  token : any;
  isLoading: boolean = false;

  allnotificationData : any[] = [];
  allnotificationDataSubs: Subscription = new Subscription; 
 
  
  constructor(
    public global : GlobalService,
    private notificationServices : NotificationService,
    private navCtrl: NavController,
    private authServices : AuthService, 
  ) { }

  ngOnInit() {

    this.getAuth();

    this.allnotificationDataSubs = this.notificationServices.alldataNotification.subscribe( result => {
      if (result instanceof Array){
        this.allnotificationData = result;
      } else {
        this.allnotificationData = this.allnotificationData.concat(result);
      }
    })
    this.getAllData();
  }

  async getAuth(){
    const val = await this.authServices.getId();
    if(val){
      let data = JSON.parse(val)
      console.log("this.token", data.access_token)
      this.token = data.access_token
    }
  }

  async getAllData(){    
    this.isLoading = true;
    this.global.showLoader();
    setTimeout(async() => {
      await this.notificationServices.getNotifications(this.token);
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }

}
