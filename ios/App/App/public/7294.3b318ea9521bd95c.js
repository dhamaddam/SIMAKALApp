"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7294,3454,3929],{7294:(C,T,i)=>{i.r(T),i.d(T,{MonitoringAlatPageModule:()=>U});var g=i(6814),m=i(95),a=i(7852),p=i(4670),A=i(5861),h=i(7394),t=i(6689),n=i(3454),l=i(7750),r=i(5175),u=i(5557);function v(o,c){if(1&o&&t.GkF(0,17),2&o){t.oxw();const e=t.MAs(25);t.Q6J("ngTemplateOutlet",e)}}function M(o,c){if(1&o&&t.GkF(0,17),2&o){t.oxw();const e=t.MAs(21);t.Q6J("ngTemplateOutlet",e)}}function D(o,c){if(1&o&&t.GkF(0,17),2&o){t.oxw();const e=t.MAs(23);t.Q6J("ngTemplateOutlet",e)}}function x(o,c){if(1&o&&t.GkF(0,17),2&o){t.oxw();const e=t.MAs(19);t.Q6J("ngTemplateOutlet",e)}}function y(o,c){if(1&o&&t.GkF(0,17),2&o){t.oxw();const e=t.MAs(17);t.Q6J("ngTemplateOutlet",e)}}function S(o,c){if(1&o&&t.GkF(0,17),2&o){t.oxw();const e=t.MAs(15);t.Q6J("ngTemplateOutlet",e)}}function b(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(_){t.CHM(e);const d=t.oxw().$implicit,f=t.oxw();return t.KtG(f.handleClick(_,d))}),t._uU(1,"Danger"),t.qZA()}}function P(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(_){t.CHM(e);const d=t.oxw().$implicit,f=t.oxw();return t.KtG(f.handleClick(_,d))}),t._uU(1,"Sdg Perb."),t.qZA()}}function w(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",19),t.NdJ("click",function(_){t.CHM(e);const d=t.oxw().$implicit,f=t.oxw();return t.KtG(f.handleClick(_,d))}),t._uU(1,"Selesai Perb."),t.qZA()}}function Z(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",20),t.NdJ("click",function(_){t.CHM(e);const d=t.oxw().$implicit,f=t.oxw();return t.KtG(f.handleClick(_,d))}),t._uU(1,"Tunggu Spar."),t.qZA()}}function O(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",19),t.NdJ("click",function(_){t.CHM(e);const d=t.oxw().$implicit,f=t.oxw();return t.KtG(f.handleClick(_,d))}),t._uU(1,"Pakai"),t.qZA()}}function E(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",21),t.NdJ("click",function(_){t.CHM(e);const d=t.oxw().$implicit,f=t.oxw();return t.KtG(f.handleClick(_,d))}),t._uU(1,"Nihil"),t.qZA()}}function k(o,c){if(1&o&&(t.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col",7),t._uU(3),t.qZA(),t.TgZ(4,"ion-col"),t._uU(5),t.qZA(),t.TgZ(6,"ion-col"),t.ynx(7,9),t.YNc(8,v,1,1,"ng-container",10),t.YNc(9,M,1,1,"ng-container",10),t.YNc(10,D,1,1,"ng-container",10),t.YNc(11,x,1,1,"ng-container",10),t.YNc(12,y,1,1,"ng-container",10),t.YNc(13,S,1,1,"ng-container",10),t.BQk(),t.YNc(14,b,2,0,"ng-template",null,11,t.W1O),t.YNc(16,P,2,0,"ng-template",null,12,t.W1O),t.YNc(18,w,2,0,"ng-template",null,13,t.W1O),t.YNc(20,Z,2,0,"ng-template",null,14,t.W1O),t.YNc(22,O,2,0,"ng-template",null,15,t.W1O),t.YNc(24,E,2,0,"ng-template",null,16,t.W1O),t.qZA()()()),2&o){const e=c.$implicit,s=c.index;t.xp6(3),t.Oqu(s+1),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Q6J("ngSwitch",null==e?null:e.monitoring_status),t.xp6(1),t.Q6J("ngSwitchCase",null),t.xp6(1),t.Q6J("ngSwitchCase","menunggu_sparepart"),t.xp6(1),t.Q6J("ngSwitchCase","layak_pakai"),t.xp6(1),t.Q6J("ngSwitchCase","selesai_perbaikan"),t.xp6(1),t.Q6J("ngSwitchCase","sedang_dalam_perbaikan"),t.xp6(1),t.Q6J("ngSwitchCase","gagal_perbaikan")}}const L=[{path:"",component:(()=>{class o{constructor(e,s,_,d,f,N){this.global=e,this.monitoringAlatServices=s,this.activatedRoute=_,this.authServices=d,this.router=f,this.navExtras=N,this.formTitle="Monitoring Alat",this.allContentDummy=[],this.allContentDummySub=new h.w0,this.isLoading=!1,this.allAlatData=[],this.allAlatDataSub=new h.w0}ngOnInit(){this.getAuth(),this.allContentDummySub=this.monitoringAlatServices.allContentDummy.subscribe(e=>{this.allContentDummy=e instanceof Array?e:this.allContentDummy.concat(e)}),this.allAlatDataSub=this.monitoringAlatServices.allDataAlatKesehatan.subscribe(e=>{this.allAlatData=e instanceof Array?e:this.allAlatData.concat(e)}),this.getAllData()}getAuth(){var e=this;return(0,A.Z)(function*(){const s=yield e.authServices.getId();if(s){let _=JSON.parse(s);console.log("this.token",_.access_token),e.token=_.access_token}})()}handleRefresh(e){setTimeout(()=>{this.allAlatDataSub=this.monitoringAlatServices.allDataAlatKesehatan.subscribe(s=>{this.allAlatData=s instanceof Array?s:this.allAlatData.concat(s)}),this.getAllData(),e.target.complete()},2e3)}getAllData(){var e=this;return(0,A.Z)(function*(){setTimeout((0,A.Z)(function*(){yield e.monitoringAlatServices.getContentDummy(),yield e.monitoringAlatServices.getSeluruhAlatData(e.token),e.isLoading=!1,e.global.hideLoader()}),1e3)})()}handleClick(e,s){console.log("isi monitoring row",s),this.navExtras.setExtras(s),this.router.navigateByUrl("details-monitoring")}ngOnDestroy(){this.allContentDummySub&&this.allContentDummySub.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.U),t.Y36(l.c),t.Y36(p.gz),t.Y36(r.e),t.Y36(p.F0),t.Y36(u.l))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-monitoring-alat"]],decls:19,vars:4,consts:[[3,"translucent"],["mode","md","color","success"],["slot","start"],["autoHide","false"],["slot","end"],[1,"ion-padding",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["size","2"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],["Danger",""],["sedangDalamPerbaikan",""],["selesai_perbaikan",""],["masaWarning",""],["siapPakai",""],["default",""],[3,"ngTemplateOutlet"],["size","small","color","danger",3,"click"],["size","small","color","success",3,"click"],["size","small","color","warning",3,"click"],["size","small",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-buttons",2),t._UZ(5,"ion-menu-button",3),t.qZA(),t._UZ(6,"ion-buttons",4),t.qZA()(),t.TgZ(7,"ion-content",5)(8,"ion-refresher",6),t.NdJ("ionRefresh",function(d){return s.handleRefresh(d)}),t._UZ(9,"ion-refresher-content"),t.qZA(),t.TgZ(10,"ion-grid")(11,"ion-row")(12,"ion-col",7),t._uU(13,"No"),t.qZA(),t.TgZ(14,"ion-col"),t._uU(15,"Alat"),t.qZA(),t.TgZ(16,"ion-col"),t._uU(17,"Status Alat"),t.qZA()()(),t.YNc(18,k,26,9,"ion-grid",8),t.qZA()),2&e&&(t.Q6J("translucent",!0),t.xp6(3),t.hij(" ",s.formTitle," "),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(11),t.Q6J("ngForOf",s.allAlatData))},dependencies:[g.sg,g.tP,g.RF,g.n9,a.YG,a.Sm,a.wI,a.W2,a.jY,a.Gu,a.fG,a.nJ,a.Wo,a.Nd,a.wd,a.sr]}),o})()}];let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(L),p.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,m.u5,a.Pc,F]}),o})()},3454:(C,T,i)=>{i.d(T,{U:()=>A});var g=i(5861),m=i(6689),a=i(7852),p=i(6593);let A=(()=>{class h{constructor(n,l,r,u,v,M){this.alertCtrl=n,this.toastCtrl=l,this.loadingCtrl=r,this.modalCtrl=u,this.sanitizer=v,this.navCtrl=M,this.isLoading=!1}setLoader(){this.isLoading=!this.isLoading}showAlert(n,l,r){this.alertCtrl.create({header:l||"Authentication failed",message:n,buttons:r||["Okay"]}).then(u=>u.present())}showToast(n,l,r,u=3e3){var v=this;return(0,g.Z)(function*(){(yield v.toastCtrl.create({message:n,duration:u,color:l,position:r})).present()})()}errorToast(n,l=4e3){this.showToast(n||"No Internet Connection","danger","bottom",l)}successToast(n){this.showToast(n,"success","bottom")}showLoader(n,l){return this.isLoading||this.setLoader(),this.loadingCtrl.create({message:n,spinner:l||"bubbles"}).then(r=>{r.present().then(()=>{this.isLoading||r.dismiss().then(()=>{console.log("abort presenting")})})}).catch(r=>{console.log("show loading error: ",r)})}hideLoader(){return this.isLoading&&this.setLoader(),this.loadingCtrl.dismiss().then(()=>console.log("dismissed")).catch(n=>console.log("error hide loader: ",n))}createModal(n){var l=this;return(0,g.Z)(function*(){const r=yield l.modalCtrl.create(n);yield r.present();const{data:u}=yield r.onWillDismiss();if(console.log(u),u)return u})()}modalDismiss(n){let l=n||null;console.log("data",l),this.modalCtrl.dismiss(l)}getIcon(n){switch(n.toLowerCase()){case"home":return"home-outline";case"work":return"briefcase-outline";default:return"location-outline"}}getSantizeUrl(n){return this.sanitizer.bypassSecurityTrustUrl(n)}apiErrorHandler(n){return n&&401==n.status&&n.error.error?(this.errorToast(n.error.error),this.navCtrl.navigateRoot("/login"),!1):n&&500==n.status&&n.error.error?(this.errorToast(n.error.error),!1):-1==n.status?(this.errorToast("Failed To Connect With Server"),!1):401==n.status?(this.errorToast("Unauthorized Request!"),localStorage.removeItem("token"),localStorage.removeItem("uid"),this.navCtrl.navigateRoot("/login"),!1):500==n.status?(this.errorToast("Something went wrong"),!1):422==n.status&&n.error.error?(this.errorToast(n.error.error),!1):(this.errorToast("Something went wrong"),!1)}show(n){var l=this;return(0,g.Z)(function*(){return l.isLoading=!0,yield l.loadingCtrl.create({message:n&&""!=n&&null!=n?n:"",spinner:"bubbles"}).then(r=>{r.present().then(()=>{l.isLoading||r.dismiss().then(()=>console.log("abort presenting"))})})})()}hide(){var n=this;return(0,g.Z)(function*(){return n.isLoading=!1,yield n.loadingCtrl.dismiss().then(()=>console.log("dismissed"))})()}}return h.\u0275fac=function(n){return new(n||h)(m.LFG(a.Br),m.LFG(a.yF),m.LFG(a.HT),m.LFG(a.IN),m.LFG(p.H7),m.LFG(a.SH))},h.\u0275prov=m.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},7750:(C,T,i)=>{i.d(T,{c:()=>A});var g=i(5861),m=i(5619),a=i(6689),p=i(6751);let A=(()=>{class h{constructor(n){this.api=n,this._allContentDummy=new m.X(null),this._allDataAlatKesehatan=new m.X(null),this._allDataAlatKesehatanById=new m.X(null)}get allContentDummy(){return this._allContentDummy.asObservable()}get allDataAlatKesehatan(){return this._allDataAlatKesehatan.asObservable()}get allDataAlatKesehatanById(){return this._allDataAlatKesehatanById.asObservable()}getContentDummy(){try{this._allContentDummy.next(this.api.getViewListContent)}catch(n){throw console.log("getContentDummy",n),n}}getSeluruhAlatData(n){var l=this;return(0,g.Z)(function*(){console.log("token getSeluruhAlatData",n);try{l.api.getAllAlatKesehatan(n).then(function(){var u=(0,g.Z)(function*(v){const M=JSON.parse(v);yield l._allDataAlatKesehatan.next(M.data)});return function(v){return u.apply(this,arguments)}}())}catch(r){throw console.log(r),r}})()}getSeluruhAlatDataById(n,l){var r=this;return(0,g.Z)(function*(){try{r.api.getAllAlatKesehatanById(n,l).then(function(){var v=(0,g.Z)(function*(M){const D=JSON.parse(M);console.log("token getSeluruhAlatData",D.data),yield r._allDataAlatKesehatanById.next(D.data)});return function(M){return v.apply(this,arguments)}}())}catch(u){throw console.log(u),u}})()}}return h.\u0275fac=function(n){return new(n||h)(a.LFG(p.k))},h.\u0275prov=a.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},5557:(C,T,i)=>{i.d(T,{l:()=>m});var g=i(6689);let m=(()=>{class a{constructor(){}setExtras(A){this.extras=A}getExtras(){return this.extras}}return a.\u0275fac=function(A){return new(A||a)},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);