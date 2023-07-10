import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  formTitle = "Notifikasi Form"

  isLoading: boolean = false;

  allnotificationData : any[] = [];
  allnotificationDataSubs: Subscription = new Subscription; 
 
  
  constructor(
    public global : GlobalService,
    private notificationServices : NotificationService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.allnotificationDataSubs = this.notificationServices.alldataNotification.subscribe( result => {
      if (result instanceof Array){
        console.log('result allManagementKebun',result)
        this.allnotificationData = result;
      } else {
        this.allnotificationData = this.allnotificationData.concat(result);
      }
    })
    this.getAllData();
  }

  async getAllData(){    
    this.isLoading = true;
    this.global.showLoader();
    setTimeout(async() => {
      await this.notificationServices.getNotifications("USER");
     
      this.isLoading = false;
      this.global.hideLoader();
    }, 1000);
  }

}
