import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';


import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { YourServiceProvider } from '../../providers/your-service/your-service';
import { TranslateService } from '@ngx-translate/core';
import { AddstorPage } from '../addstor/addstor';


@IonicPage()
@Component({
  selector: 'page-logined',
  templateUrl: 'logined.html',
})
export class LoginedPage {

  items: any = [];
  key: string = 'items';
  splash = true;
  u_email: any = "";
  u_password: any = "";
  tes: any = "";
  public text_loginfrist: string = "เข้าสู่ระบบ";
  public text_wellcom: string = "";
  public text_password: string = "";
  public text_Forgot: string = "";
  public text_registerp: string = "";
  public text_register: string = "";
  public alert_erroremail: string = "";
  public alert_errorpass: string = "";
  public text_Email:string="";
  public alert_OK:string="";
  public text_lanTH:string="";
  public text_lanEN:string="";

  // "text_loginfrist" : "Login ",
	// 	"text_wellcom" : "Welcome to App North Organic Thai. ",
	// 	"text_password" :"Password",
	// 	"text_passwordcon" :"Confirm Password ",
	// 	"text_Forgot" :"Forgot password ?",
	// 	"text_registerp" :"Please register?",
	// 	"text_register" : "register.",
	// 	"alert_erroremail":"Please enter your email and password.",
	// 	"alert_errorpass":"Incorrect email or password. ",
	// 	"alert_errorfield":"Please fill out all fields.",
	// 	"alert_errornewemail":"This email is already used. Please enter a new email.",
	// 	"alert_errorsamepass":"Please enter the same password.",
	// 	"text_lanTH":"TH",
	// 	"text_lanEN":"EN"


  public form: FormGroup;
  // private baseUrl = "https://adminshop.kwanpat.com/API_shop/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http, public NP: NavParams, public storage: Storage,
    public fb: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController, public YourService: YourServiceProvider,
    private _translate: TranslateService) {

    this.form = fb.group({
      "u_email": ["", Validators.required],
      "u_password": ["", Validators.required]
    });

    // this._translate.setDefaultLang(ress);
    // this._translate.use(ress);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginedPage');
    setTimeout(() => this.splash = false, 4000);

    this.storage.get('lang').then((ress) => {
      console.log("text",ress)
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);

    })
    this._initialiseTranslation();
  }
  TH(){
    this.storage.set('lang', 'th');
    this._translate.use('th');
    this._initialiseTranslation();

  }
  EN(){
    this.storage.set('lang', 'en');
    this._translate.use('en');
    this._initialiseTranslation();
  }



  _initialiseTranslation() {
    setTimeout(() => {
      this.text_loginfrist = this._translate.instant("home.text_loginfrist");
      this.text_wellcom = this._translate.instant("home.text_wellcom");
      this.text_password = this._translate.instant("home.text_password");
      this.text_Forgot = this._translate.instant("home.text_Forgot");
      this.text_registerp = this._translate.instant("home.text_registerp");
      this.text_register = this._translate.instant("home.text_register");
      this.alert_erroremail = this._translate.instant("home.alert_erroremail");
      this.alert_errorpass = this._translate.instant("home.alert_errorpass");
      this.text_Email = this._translate.instant("home.text_Email");
      this.alert_OK = this._translate.instant("home.alert_OK");
      this.text_lanTH = this._translate.instant("home.text_lanTH");
      this.text_lanEN = this._translate.instant("home.text_lanEN");

    }, 25);
  }



  showAlert(fname): void {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน', subTitle: fname, buttons: ['Ok']
    });
    alert.present();
  }

  signIn(email_send: String) {
    let u_email: string = this.form.controls["u_email"].value,
      u_password: string = this.form.controls["u_password"].value;
    if (this.u_email != "" && this.u_password != "") {
      let body: string = "u_email=" + u_email + "&u_password=" + u_password,
        type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/login.php";

      this.https.post(url, body, option).subscribe((data) => {

        console.log(data['_body']);
        if (data['_body'] == "true") {
          this.select_name(u_email);
          console.log("", u_email);

          const alert = this.alertCtrl.create({

            message: '<img src = "assets/imgs/success.png" >',

            subTitle: this.text_wellcom,
            buttons: [this.alert_OK],
            cssClass: 'custom-alert01'

          });
          alert.present();
          this.YourService.u_email = u_email;
          console.log("ลองลอง", this.YourService.u_email)
          // this.storage.set('session_storage',this.YourService.u_email);
          this.savaData();
          this.navCtrl.push(TabsPage, { email_send: email_send });
          // console.log(this.YourService);
          this.navCtrl.setRoot(TabsPage, { email_send: email_send });

        } else {

          const alert = this.alertCtrl.create({

            message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

            subTitle: this.alert_errorpass,
            buttons: [this.alert_OK],
            cssClass: 'custom-alert'

          });
          alert.present();
        }
        //console.log(data['_body']);
      });
    } else {
      const alert = this.alertCtrl.create({

        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

        subTitle: this.alert_erroremail,
        buttons: [this.alert_OK],
        cssClass: 'custom-alert01'

      });
      alert.present();
    }



  }
  select_name(u_email: String) {
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_email.php?u_email=' + u_email).map(res => res.json()).subscribe(data => {
      this.YourService.u_email = data;

      this.items = data;

      console.log(this.YourService.u_email);
    });
  }
  savaData() {
    this.storage.set('session_storage', this.YourService.u_email);
    console.log("ddddddd", this.YourService.u_email);
  }
  signUp() {
    this.navCtrl.push(RegisterPage, { u_name: "", u_email: "", u_password: "", u_tel: "", u_address: "" });
  }
  resetpass(){
    this.navCtrl.push(AddstorPage)
  }

}
