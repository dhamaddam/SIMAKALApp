import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: any;
  passwordIcon = 'eye-outline';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController : AlertController,
    private loadingController: LoadingController,
    private authServices : AuthService,
    private global : GlobalService,
    private DB : DatabaseService
  ) { }
  
  result = null;

  ngOnInit() {
    
    this.isLoggedin();
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    if (this.passwordIcon == 'eye-outline') {
      this.passwordIcon = 'eye-off-outline'
    } else {
      this.passwordIcon = 'eye-outline';
    }
  }
  
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authServices.login(this.myForm.value.email, this.myForm.value.password).then(data => {
      console.log(data);
    }).catch( e => {
      console.log(e);
    })
    await loading.dismiss();
  }


  async isLoggedin(){
    try {
      this.global.showLoader();
      const val = await this.authServices.getId();
      if (val){
        this.router.navigateByUrl('/menu/dashboard', { replaceUrl: true });
      }
    } catch (error) {
      console.log(error)
      this.global.hideLoader();
    }
    this.global.hideLoader();
  }
}
