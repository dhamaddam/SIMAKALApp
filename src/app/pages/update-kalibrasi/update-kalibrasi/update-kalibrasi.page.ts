import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { InputAlatKesehatanService } from 'src/app/services/input-alat-kesehatan/input-alat-kesehatan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavExtrasServiceService } from 'src/app/services/nav-extras-service/nav-extras-service.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-update-kalibrasi',
  templateUrl: './update-kalibrasi.page.html',
  styleUrls: ['./update-kalibrasi.page.scss'],
})
export class UpdateKalibrasiPage implements OnInit {

  formTitle : string = "Update Kalibrasi"
  isLoading: boolean = false; 
  myForm : any;
  token : any;
  allDataAlatKesehatanById : any[] = [];
  allDataAlatKesehatanByIdSub : Subscription = new Subscription;
  today: any = moment().format("YYYY-MM-DD");
  resultData : any[] = [];
  calibration_status : string = ""
  id_alat : string = ""
  imgUrl : string = ""
  image_ext : string = ""
  blobData : any;
  messageMonth : any = ""

  constructor(
    private router: Router, 
    public global : GlobalService, 
    private inputAlatKesehatanServices : InputAlatKesehatanService, 
    private authServices : AuthService,
    private fb: FormBuilder,
    private navExtras: NavExtrasServiceService,
    private actionSheetController: ActionSheetController
    ) { }

  ngOnInit(
  ) {
    this.getAuth();
    this.allDataAlatKesehatanById = this.navExtras.getExtras()
    this.resultData.push(this.navExtras.getExtras())
    this.resultData.forEach(element => {
      console.log("element",element.details[0].calibration_status)
      this.myForm = this.fb.group({ 
        tanggal: [this.today, [Validators.required]],
        monitoring_status: ['', ],
        name:[element.name,],
        pic:[element.pic, ],
        inventory_no:[element.inventory_no,],
        room : [element.room,],
        type : [element.type,],
        calibration_status: ['',],
        owner_id : [element.owner_id,],
        initial_calibration : [element.details[0].initial_calibration,],
        re_calibration : [element.details[0].re_calibration],
        initial_monitoring : [element.details[0].initial_monitoring],
        re_monitoring : [element.details[0].re_monitoring],
      
      });
      this.messageMonth = element.details[0].month_diff
      this.messageMonth =  this.messageMonth > 6  ? false : true
      console.log("this.messageMonth",this.messageMonth)
      this.id_alat = element.id
      this.imgUrl = element.image
      if (element.calibration_status == null){
        this.myForm.form = "gagal_kalibrasi"
        this.calibration_status = "status_belum_diisi"
      } else {
        this.myForm.form = element.calibration_status
        this.calibration_status = element.calibration_status
      }
      console.log("this imgUrl",this.imgUrl)

    });
  }

  async getAuth(){
    const val = await this.authServices.getId();
    if(val){
      let data = JSON.parse(val)
      console.log("this.token", data.access_token)
      this.token = data.access_token
    }
  }

  sendNotificationBPFK(){
    let param = this.myForm.value
    try{
      setTimeout(async() => { 
        console.log("getAuth(){", this.token)
        await this.inputAlatKesehatanServices.sendAndCreateNotificationBPFK(param, this.token)
      
      }, 1000);
    } catch (error) {
      throw(error);
    }
  }

  async uploadImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose from',
      buttons: [ {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          console.log('gallery clicked');
          this.upload(CameraSource.Photos);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  async upload(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        source,
        quality: 50,
        resultType: CameraResultType.Base64
      });
      console.log('image output', image);
      if (image && image.base64String) {
        const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
        // this.global.show('Uploading..');
        this.image_ext = image.format
        this.blobData = blobData
        // this.inputAlatKesehatanServices.uploadImage(blobData, image.format, this.token)
      }
    } catch (error) {
      console.log(error);
      this.global.apiErrorHandler(error);
    }
  }

  

  b64toBlob(b64Data: any, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  placeData (param : any){
    try{
      setTimeout(async() => {
        await this.inputAlatKesehatanServices.updateAlatKesehatanCalibration(this.id_alat,param, this.token)
        await this.inputAlatKesehatanServices.uploadImage(this.id_alat,this.blobData, this.image_ext, this.token)
        this.isLoading = false;
        this.global.hideLoader();
        // this.router.navigateByUrl('/menu/monitoring-alat', { replaceUrl: true });
        this.router.navigate(['/menu/jadwal-kalibrasi'], {
          // queryParams: {
          //   param: x
          // }
          });
      }, 1000);
    } catch (error) {
      throw(error);
    }
  }
  saveData(){
    this.isLoading = true;
    this.global.showLoader();
    
    console.log(this.myForm.value)
    this.placeData(this.myForm.value)

    this.isLoading = false;
    this.global.hideLoader();
  }
}
