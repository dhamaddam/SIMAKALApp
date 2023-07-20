"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1065,5557,2618],{1065:(U,_,n)=>{n.r(_),n.d(_,{UpdateKalibrasiPageModule:()=>S});var p=n(6814),i=n(7852),l=n(4670),b=n(5861),r=n(95),K=n(6676),h=n(7394),a=n(6689),o=n(3454),u=n(2690),c=n(5175),d=n(5557);function g(s,v){1&s&&(a.TgZ(0,"div",13),a._UZ(1,"ion-spinner",14),a.qZA())}const A=[{path:"",component:(()=>{class s{constructor(t,e,f,y,M,T){this.router=t,this.global=e,this.inputAlatKesehatanServices=f,this.authServices=y,this.fb=M,this.navExtras=T,this.formTitle="Update Kalibrasi",this.isLoading=!1,this.allDataAlatKesehatanById=[],this.allDataAlatKesehatanByIdSub=new h.w0,this.today=K().format("YYYY-MM-DD"),this.resultData=[],this.calibration_status="",this.id_alat=""}ngOnInit(){this.getAuth(),this.allDataAlatKesehatanById=this.navExtras.getExtras(),this.resultData.push(this.navExtras.getExtras()),this.resultData.forEach(t=>{console.log("element",t.details[0].calibration_status),this.myForm=this.fb.group({tanggal:[this.today,[r.kI.required]],monitoring_status:[""],name:[t.name],pic:[t.pic],inventory_no:[t.inventory_no],room:[t.room],type:[t.type],calibration_status:[""],owner_id:[t.owner_id],initial_calibration:[t.details[0].initial_calibration],re_calibration:[t.details[0].re_calibration],initial_monitoring:[t.details[0].initial_monitoring],re_monitoring:[t.details[0].re_monitoring]}),this.id_alat=t.id,null==t.calibration_status?(this.myForm.form="gagal_kalibrasi",this.calibration_status="status_belum_diisi"):(this.myForm.form=t.calibration_status,this.calibration_status=t.calibration_status)})}getAuth(){var t=this;return(0,b.Z)(function*(){const e=yield t.authServices.getId();if(e){let f=JSON.parse(e);console.log("this.token",f.access_token),t.token=f.access_token}})()}placeData(t){var e=this;try{setTimeout((0,b.Z)(function*(){yield e.inputAlatKesehatanServices.updateAlatKesehatanCalibration(e.id_alat,t,e.token),e.isLoading=!1,e.global.hideLoader(),e.router.navigate(["/menu/jadwal-kalibrasi"],{})}),1e3)}catch(f){throw f}}saveData(){this.isLoading=!0,this.global.showLoader(),console.log(this.myForm.value),this.placeData(this.myForm.value),this.isLoading=!1,this.global.hideLoader()}}return s.\u0275fac=function(t){return new(t||s)(a.Y36(l.F0),a.Y36(o.U),a.Y36(u.f),a.Y36(c.e),a.Y36(r.qu),a.Y36(d.l))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-update-kalibrasi"]],decls:43,vars:6,consts:[[1,"ion-no-border"],["slot","start"],[3,"fullscreen"],[1,"ion-margin",3,"formGroup","ngSubmit"],["class","ion-text-center alignSpinner",4,"ngIf"],[1,"ctm-font-2"],["formControlName","name","type","text",3,"readonly"],["interface","action-sheet","formControlName","calibration_status","placeholder","Status Kalibrasi",3,"ngModel","ngModelChange"],["value","berhasil_kalibrasi"],["value","gagal_kalibrasi"],["type","file"],["type","submit","expand","full","color","success","shape","round","expand","block"],["expand","full","color","medium","shape","round"],[1,"ion-text-center","alignSpinner"],["color","primary"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),a._uU(3),a.qZA(),a.TgZ(4,"ion-buttons",1),a._UZ(5,"ion-back-button"),a.qZA()()(),a.TgZ(6,"ion-content",2)(7,"form",3),a.NdJ("ngSubmit",function(){return e.saveData()}),a.YNc(8,g,2,0,"div",4),a.TgZ(9,"ion-grid")(10,"ion-row")(11,"ion-col")(12,"ion-label",5),a._uU(13,"Nama Alat"),a.qZA(),a.TgZ(14,"ion-item"),a._UZ(15,"ion-input",6),a.qZA()()()(),a.TgZ(16,"ion-grid")(17,"ion-row")(18,"ion-col")(19,"ion-label",5),a._uU(20,"Kondisi Alat"),a.qZA(),a.TgZ(21,"ion-list")(22,"ion-item")(23,"ion-select",7),a.NdJ("ngModelChange",function(y){return e.myForm.form=y}),a.TgZ(24,"ion-select-option",8),a._uU(25,"Berhasil Kalibrasi"),a.qZA(),a.TgZ(26,"ion-select-option",9),a._uU(27,"Gagal Kalibrasi"),a.qZA()()()()()()(),a.TgZ(28,"ion-grid")(29,"ion-row")(30,"ion-col")(31,"ion-label",5),a._uU(32,"Nama Alat"),a.qZA(),a.TgZ(33,"ion-item"),a._UZ(34,"ion-input",10),a.qZA()()()(),a.TgZ(35,"ion-grid")(36,"ion-row")(37,"ion-col")(38,"ion-button",11),a._uU(39,"Simpan"),a.qZA()(),a.TgZ(40,"ion-col")(41,"ion-button",12),a._uU(42,"Kembali"),a.qZA()()()()()()),2&t&&(a.xp6(3),a.hij(" ",e.formTitle," "),a.xp6(3),a.Q6J("fullscreen",!0),a.xp6(1),a.Q6J("formGroup",e.myForm),a.xp6(1),a.Q6J("ngIf",e.isLoading),a.xp6(7),a.Q6J("readonly",!0),a.xp6(8),a.Q6J("ngModel",e.myForm.form))},dependencies:[p.O5,r._Y,r.JJ,r.JL,r.sg,r.u,i.oU,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.pK,i.Ie,i.Q$,i.q_,i.Nd,i.t9,i.n0,i.PQ,i.wd,i.sr,i.QI,i.j9,i.cs]}),s})()}];let Z=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[l.Bz.forChild(A),l.Bz]}),s})(),S=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[p.ez,r.u5,r.UX,i.Pc,Z]}),s})()},2690:(U,_,n)=>{n.d(_,{f:()=>K});var p=n(5861),i=n(5619),l=n(6689),b=n(7852),r=n(6751);let K=(()=>{class h{constructor(o,u){this.loadingController=o,this.api=u,this._modeldataNotification=new i.X(null)}saveInputAlatKesehatan(o,u){this.api.saveInputAlatKesehatan(o,u).then(function(){var c=(0,p.Z)(function*(d){"success"==JSON.parse(d).meta.status?console.log("data sukses disimpan"):console.log("data gagal disimpan")});return function(d){return c.apply(this,arguments)}}())}updateAlatKesehatan(o,u,c){var d=this;this.api.updateAlatKesehatan(o,u,c).then(function(){var g=(0,p.Z)(function*(m){const A=JSON.parse(m);"success"==A.meta.status?(console.log("data sukses disimpan"),d.sendAndCreateNotificationMonitoring(o,A,c)):console.log("data gagal disimpan")});return function(m){return g.apply(this,arguments)}}())}updateAlatKesehatanCalibration(o,u,c){var d=this;this.api.updateAlatKesehatanCalibration(o,u,c).then(function(){var g=(0,p.Z)(function*(m){"success"==JSON.parse(m).meta.status?(console.log("data sukses disimpan"),d.sendAndCreateNotificationCalibration(o,u,c)):console.log("data gagal disimpan")});return function(m){return g.apply(this,arguments)}}())}sendAndCreateNotificationMonitoring(o,u,c){this.api.sendAndCreateNotificationMonitoring(o,u,c).then(function(){var d=(0,p.Z)(function*(g){JSON.parse(g),console.log("data sukses disimpan")});return function(g){return d.apply(this,arguments)}}())}sendAndCreateNotificationCalibration(o,u,c){this.api.sendAndCreateNotificationCalibration(o,u,c).then(function(){var d=(0,p.Z)(function*(g){JSON.parse(g),console.log("data sukses disimpan")});return function(g){return d.apply(this,arguments)}}())}}return h.\u0275fac=function(o){return new(o||h)(l.LFG(b.HT),l.LFG(r.k))},h.\u0275prov=l.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},5557:(U,_,n)=>{n.d(_,{l:()=>i});var p=n(6689);let i=(()=>{class l{constructor(){}setExtras(r){this.extras=r}getExtras(){return this.extras}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);