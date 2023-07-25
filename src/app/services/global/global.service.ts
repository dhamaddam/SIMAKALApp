import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { 
  AlertButton,
  AlertController, 
  LoadingController, 
  ModalController, 
  ModalOptions, 
  NavController, 
  ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isLoading: boolean = false;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    public sanitizer: DomSanitizer,
    private navCtrl: NavController,
  ) { }

  setLoader() {
    this.isLoading = !this.isLoading;
  }

  showAlert(message: string, header?: string | undefined, buttonArray?: (string | AlertButton)[] | undefined) {
    this.alertCtrl.create({
      header: header ? header : 'Authentication failed',
      message: message,
      buttons: buttonArray ? buttonArray : ['Okay']
    })
    .then(alertEl => alertEl.present());
  }

  async showToast(msg: any, color: any, position: any, duration = 3000) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duration,
      color: color,
      position: position
    });
    toast.present();
  }

  errorToast(msg?: any, duration = 4000) {
    this.showToast(msg ? msg : 'No Internet Connection', 'danger', 'bottom', duration);
  }

  successToast(msg: any) {
    this.showToast(msg, 'success', 'bottom');
  }


  showLoader(msg?: any, spinner?: any | null | undefined) {
    // this.isLoading = true;
    if(!this.isLoading) this.setLoader();
    return this.loadingCtrl.create({
      message: msg,
      spinner: spinner ? spinner : 'bubbles'
    }).then(res => {
      res.present().then(() => {
        if(!this.isLoading) {
          res.dismiss().then(() => {
            console.log('abort presenting');
          });
        }
      })
    })
    .catch(e => {
      console.log('show loading error: ', e);
    });
  }

  hideLoader() {
    // this.isLoading = false;
    if(this.isLoading) this.setLoader();
    return this.loadingCtrl.dismiss()
    .then(() => console.log('dismissed'))
    .catch(e => console.log('error hide loader: ', e));
  }

  async createModal(options: any) {
    const modal = await this.modalCtrl.create(options);
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    if(data) return data;
  }

  modalDismiss(val: any) {
    let data: any = val ? val : null;
    console.log('data', data);
    this.modalCtrl.dismiss(data);
  }

  getIcon(title: string) {
    const name = title.toLowerCase();
    switch(name) {
      case 'home': return 'home-outline';
      case 'work': return 'briefcase-outline';
      default: return 'location-outline';
    }
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  apiErrorHandler(err: any) {
    // console.log('Error got in service =>', err)
    if (err && err.status == 401 && err.error.error) {
      this.errorToast(err.error.error);
      this.navCtrl.navigateRoot('/login');
      return false;
    }
    if (err && err.status == 500 && err.error.error) {
      this.errorToast(err.error.error);
      return false;
    }
    if (err.status == -1) {
      this.errorToast('Failed To Connect With Server');
      return false;
    } else if (err.status == 401) {
      this.errorToast('Unauthorized Request!');
      localStorage.removeItem('token');
      localStorage.removeItem('uid');
      this.navCtrl.navigateRoot('/login');
      return false;
    } else if (err.status == 500) {
      this.errorToast('Something went wrong');
      return false;
    } else if (err.status == 422 && err.error.error) {
      this.errorToast(err.error.error);
      return false;
    } else {
      this.errorToast('Something went wrong');
      return false;
    }
  }
  async show(msg?: any) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg && msg != '' && msg != null ? msg : '',
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }
}
