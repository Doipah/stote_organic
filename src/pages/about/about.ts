import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, Platform } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

import { HistoresPage } from '../histores/histores';
import { ProfileUserPage } from '../profile-user/profile-user';
import { Storage } from '@ionic/storage';
import { LoginedPage } from '../logined/logined';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AddcartProvider } from '../../providers/addcart/addcart';
import { CartproductPage } from '../cartproduct/cartproduct';
import { map } from 'rxjs/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  ckland:boolean;


  counter = 0;
  name = '';
  cart: any = [];
  public id2: any = [];
  items1 = [];
  public SUM: any = [];
  public SUM_To: any = [];
  public sum_push4: any = [];
  sumset: any = [];
  public num: number = 0;
  public User_email: any = "";
  public frist: boolean;
  scheduled: any = [];
  public text_myProfile: string = "";
  public text_myPurchaese: string = "";
  public text_Setting:string ="";
  public text_Loguot:string ="";
  public alert_logout:string="";
  public alert_Cancel:string="";
  public alert_Confirm:string="";
  public prifile_user:any="";
  public baseUrl: any = "https://adminshop.kwanpat.com";
  private fakeusesr: Array<any> = new Array (1);
  srtting:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private addCart: AddcartProvider,
    public alertCtrl: AlertController, public storage: Storage, public https: Http,
    public plt: Platform, private _translate: TranslateService) {


      this.storage.get('session_storage').then((res) => {
        // res ="anuchit";

        console.log(res);
        this.showHotel_data(res);


      });

  }
  Noti() {

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad LogouttestPage');

    //   this.languageEn.tet;
    //  console.log(this.languageEn.title);
    this.storage.get('lang').then((ress) => {

      if(ress == "en"){

        this.ckland = true;

        this.srtting="setting"
      

      }else{
        this.ckland = false;
        this.srtting="ตั้งค่า"


      }

      this._translate.setDefaultLang(ress);
      this._translate.use(ress);

    })
    this._initialiseTranslation();
  }

  _initialiseTranslation() {
    setTimeout(() => {
      // this.title = this._translate.instant("home.heading");
      // this.description = this._translate.instant("home.description");
      // this. text_home = this._translate.instant("home.text_home");
      // this. text_news = this._translate.instant("home.text_news");
      // this. text_Product = this._translate.instant("home.text_Product");
      // this. text_Shop = this._translate.instant("home.text_Shop");
      // this. text_profile = this._translate.instant("home.text_profile");
      this. text_myProfile = this._translate.instant("home.text_myProfile");
      this. text_myPurchaese =this._translate.instant("home.text_myPurchaese");
      this. text_Setting =this._translate.instant("home.text_Setting");
      this. text_Loguot =this._translate.instant("home.text_Loguot");
      this. alert_logout =this._translate.instant("home.alert_logout");
      this. alert_Cancel =this._translate.instant("home.alert_Cancel");
      this. alert_Confirm =this._translate.instant("home.alert_Confirm");

    }, 250);
  }



  presentConfirm() {
    let alert = this.alertCtrl.create({
      message: '<img src = "assets/imgs/exclamation-mark.png" >',
      subTitle: this.alert_logout,
      cssClass: 'custom-alertout',
      buttons: [
        {
          text: this.alert_Confirm,
          role: this.alert_Confirm,
          cssClass: 'custom-alertbutton',
          handler: () => {
            this.storage.clear();
            this.app.getRootNav().setRoot(LoginedPage);
          }
        },
        {
          text: this.alert_Cancel,
          cssClass: 'custom-alertbuttonc',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  histores() {
    this.navCtrl.push(HistoresPage);
  }
  profile() {
    // this.navCtrl.push(ProfileUserPage);
    this.navCtrl.push(ProfileUserPage, {});

  }
  setting() {
    this.navCtrl.push(SettingPage, {});
    // this.app.getRootNav().setRoot(SettingPage);
  }



  ngOnInit() {
    this.items1 = this.addCart.getProducts();

    // this.id2 = this.addCart.getCart2();
    this.sum_push4 = this.addCart.getsum_push();

    this.cart = this.addCart.getCart();
  }
  addToCart(product) {

    this.addCart.addProduct(product);

  }
  openCart(cart: string, status_c: string) {
    // console.log("open นะ");
    this.navCtrl.push(CartproductPage, { cart: cart, status_c: status_c });
    // this.navCtrl.push(CartproductPage,[ this.cart]);

  }
  ionViewWillEnter() {

   

  }
 

  showHotel_data(u_email: string) {
    console.log("มาแล้ว ", u_email)
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_email.php?u_email=' + u_email).map(res => res.json()).subscribe(data => {
      this.prifile_user = data;
      // console.log(this.prifile_user.u_name);
      for (let item of this.prifile_user){
        console.log("USEER",item.u_name);
      }

    });
  }



}
