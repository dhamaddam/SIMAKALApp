"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6488],{6488:(y,f,a)=>{a.r(f),a.d(f,{LoginPageModule:()=>T});var u=a(6814),s=a(7852),c=a(4670),v=a(5861),d=a(95),o=a(6689),L=a(5175),t=a(3454),e=a(6751);function r(i,h){if(1&i&&(o.TgZ(0,"ion-card")(1,"ion-card-content"),o._UZ(2,"img",19),o.qZA()()),2&i){const n=o.oxw();o.xp6(2),o.Q6J("src",n.result,o.LSH)}}const p=[{path:"",component:(()=>{class i{constructor(n,l,m,C,P,_,Z){this.fb=n,this.router=l,this.alertController=m,this.loadingController=C,this.authServices=P,this.global=_,this.DB=Z,this.passwordIcon="eye-outline",this.showPassword=!1,this.result=null}ngOnInit(){this.isLoggedin(),this.myForm=this.fb.group({email:["",[d.kI.required]],password:["",[d.kI.required,d.kI.minLength(6)]]})}toggleShow(){this.showPassword=!this.showPassword,this.passwordIcon="eye-outline"==this.passwordIcon?"eye-off-outline":"eye-outline"}login(){var n=this;return(0,v.Z)(function*(){const l=yield n.loadingController.create();yield l.present(),n.authServices.login(n.myForm.value.email,n.myForm.value.password).then(m=>{console.log(m)}).catch(m=>{console.log(m)}),yield l.dismiss()})()}isLoggedin(){var n=this;return(0,v.Z)(function*(){try{n.global.showLoader(),(yield n.authServices.getId())&&n.router.navigateByUrl("/menu/dashboard",{replaceUrl:!0})}catch(l){console.log(l),n.global.hideLoader()}n.global.hideLoader()})()}}return i.\u0275fac=function(n){return new(n||i)(o.Y36(d.qu),o.Y36(c.F0),o.Y36(s.Br),o.Y36(s.HT),o.Y36(L.e),o.Y36(t.U),o.Y36(e.k))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-login"]],decls:33,vars:5,consts:[["no-border",""],[1,"login-header","ion-padding"],["src","../assets/images1.png",1,"logo-img"],[2,"text-align","center","padding-top","10px"],[2,"text-align","center","padding-top","10px","font-family","'Tahoma' !important"],[1,"center"],[1,"heading-coloumn-lr"],["big-heading",""],[2,"margin-left","40px"],[1,"ion-margin",3,"formGroup","ngSubmit"],[1,"input-group"],["lines","none",1,"item-background-color"],["position","floating"],["type","email","formControlName","email"],["name","person-outline","color","success","slot","end",2,"padding-top","20px"],["formControlName","password",3,"type"],["color","success","slot","end",2,"padding-top","20px",3,"name","click"],["type","submit","shape","round","expand","block","color","success",1,"btnsaja",3,"disabled"],[4,"ngIf"],[3,"src"]],template:function(n,l){1&n&&(o.TgZ(0,"ion-header",0)(1,"div",1),o._UZ(2,"img",2),o.TgZ(3,"ion-label",3),o._uU(4," Monitoring System "),o.qZA(),o.TgZ(5,"ion-label",4)(6,"h1"),o._uU(7,"S I M A K A L"),o.qZA()()()(),o.TgZ(8,"ion-content")(9,"div",5)(10,"div",6)(11,"h1",7),o._uU(12,"Login"),o.qZA()(),o.TgZ(13,"ion-label",8),o._uU(14," Silahkan Masuk Untuk Melanjutkan "),o.qZA(),o.TgZ(15,"form",9),o.NdJ("ngSubmit",function(){return l.login()}),o.TgZ(16,"div",10)(17,"ion-item",11)(18,"ion-label",12),o._uU(19,"Username or Email"),o.qZA(),o._UZ(20,"ion-input",13)(21,"ion-icon",14),o.qZA()(),o.TgZ(22,"div",10)(23,"ion-item",11)(24,"ion-label",12),o._uU(25,"Password"),o.qZA(),o._UZ(26,"ion-input",15),o.TgZ(27,"ion-icon",16),o.NdJ("click",function(){return l.toggleShow()}),o.qZA()()(),o._UZ(28,"br")(29,"br"),o.TgZ(30,"ion-button",17),o._uU(31,"Masuk"),o.qZA()()(),o.YNc(32,r,3,1,"ion-card",18),o.qZA()),2&n&&(o.xp6(15),o.Q6J("formGroup",l.myForm),o.xp6(11),o.Q6J("type",l.showPassword?"text":"password"),o.xp6(1),o.Q6J("name",l.passwordIcon),o.xp6(3),o.Q6J("disabled",!l.myForm.valid),o.xp6(2),o.Q6J("ngIf",l.result))},dependencies:[u.O5,d._Y,d.JJ,d.JL,d.sg,d.u,s.YG,s.PM,s.FN,s.W2,s.Gu,s.gu,s.pK,s.Ie,s.Q$,s.j9],styles:['.login-header[_ngcontent-%COMP%]{background:var(--ion-color-success);position:relative;height:220px;border-radius:0}.login-header[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:15%;width:0;height:0;border:20px solid transparent;border-top-color:var(--ion-color-success);border-bottom:0;margin-left:-15px}.logo-img[_ngcontent-%COMP%]{display:block;width:120px;padding-top:50px;margin:auto;text-align:center}[heading-coloumn-lr][_ngcontent-%COMP%]{display:flex;align-items:center}[big-heading][_ngcontent-%COMP%]{margin-left:40px;font-family:Heebo-Bold!important;font-size:30px!important;color:var(-ion-color-dark-contrast)}ion-label[_ngcontent-%COMP%]{color:#000;opacity:.8;font-size:13px;display:block}ion-content[_ngcontent-%COMP%]{--background: #fafafa}']}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[c.Bz.forChild(p),c.Bz]}),i})(),T=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[u.ez,d.u5,d.UX,s.Pc,b]}),i})()},3454:(y,f,a)=>{a.d(f,{U:()=>d});var u=a(5861),s=a(6689),c=a(7852),v=a(6593);let d=(()=>{class o{constructor(t,e,r,g,p,b){this.alertCtrl=t,this.toastCtrl=e,this.loadingCtrl=r,this.modalCtrl=g,this.sanitizer=p,this.navCtrl=b,this.isLoading=!1}setLoader(){this.isLoading=!this.isLoading}showAlert(t,e,r){this.alertCtrl.create({header:e||"Authentication failed",message:t,buttons:r||["Okay"]}).then(g=>g.present())}showToast(t,e,r,g=3e3){var p=this;return(0,u.Z)(function*(){(yield p.toastCtrl.create({message:t,duration:g,color:e,position:r})).present()})()}errorToast(t,e=4e3){this.showToast(t||"No Internet Connection","danger","bottom",e)}successToast(t){this.showToast(t,"success","bottom")}showLoader(t,e){return this.isLoading||this.setLoader(),this.loadingCtrl.create({message:t,spinner:e||"bubbles"}).then(r=>{r.present().then(()=>{this.isLoading||r.dismiss().then(()=>{console.log("abort presenting")})})}).catch(r=>{console.log("show loading error: ",r)})}hideLoader(){return this.isLoading&&this.setLoader(),this.loadingCtrl.dismiss().then(()=>console.log("dismissed")).catch(t=>console.log("error hide loader: ",t))}createModal(t){var e=this;return(0,u.Z)(function*(){const r=yield e.modalCtrl.create(t);yield r.present();const{data:g}=yield r.onWillDismiss();if(console.log(g),g)return g})()}modalDismiss(t){let e=t||null;console.log("data",e),this.modalCtrl.dismiss(e)}getIcon(t){switch(t.toLowerCase()){case"home":return"home-outline";case"work":return"briefcase-outline";default:return"location-outline"}}getSantizeUrl(t){return this.sanitizer.bypassSecurityTrustUrl(t)}apiErrorHandler(t){return t&&401==t.status&&t.error.error?(this.errorToast(t.error.error),this.navCtrl.navigateRoot("/login"),!1):t&&500==t.status&&t.error.error?(this.errorToast(t.error.error),!1):-1==t.status?(this.errorToast("Failed To Connect With Server"),!1):401==t.status?(this.errorToast("Unauthorized Request!"),localStorage.removeItem("token"),localStorage.removeItem("uid"),this.navCtrl.navigateRoot("/login"),!1):500==t.status?(this.errorToast("Something went wrong"),!1):422==t.status&&t.error.error?(this.errorToast(t.error.error),!1):(this.errorToast("Something went wrong"),!1)}show(t){var e=this;return(0,u.Z)(function*(){return e.isLoading=!0,yield e.loadingCtrl.create({message:t&&""!=t&&null!=t?t:"",spinner:"bubbles"}).then(r=>{r.present().then(()=>{e.isLoading||r.dismiss().then(()=>console.log("abort presenting"))})})})()}hide(){var t=this;return(0,u.Z)(function*(){return t.isLoading=!1,yield t.loadingCtrl.dismiss().then(()=>console.log("dismissed"))})()}}return o.\u0275fac=function(t){return new(t||o)(s.LFG(c.Br),s.LFG(c.yF),s.LFG(c.HT),s.LFG(c.IN),s.LFG(v.H7),s.LFG(c.SH))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);