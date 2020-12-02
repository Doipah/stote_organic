import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { GroupPage } from '../group/group';
import { SettingPage } from '../setting/setting';



import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, App, Option } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

import { LogouttestPage } from '../logouttest/logouttest';

import { LanguageEnProvider } from '../../providers/language-en/language-en';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { CartproductPage } from '../cartproduct/cartproduct';
// import { LocalNotifications } from "@ionic-native/local-notifications";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { updateDate } from 'ionic-angular/umd/util/datetime-util';
import { HistoresPage } from '../histores/histores';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public hotel_list;
  public sum_count;

  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;
  tab6Root: any;
  tab7Root: any;

  // public hotel_list: any = [];

  public CKland: boolean;

  public u_email: any;
  public u_name: any;

  public home: string = "Home";
  public search: string = "Search";
  public profile: string = "Profile";


  public title: string = "Home";
  public description: string;
  public text_home: string = "home";
  public text_news: string = "home";
  public text_Product: string = "home";
  public text_Shop: string = "home";
  public text_profile: string = "Profile";
  public text_sale: string = "home";
  public text_search: string = "Search";

  loaded: boolean = false
  tabIndex: number = 0



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public NP: NavParams,
    public fb: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController, private app: App,
    public languageEn: LanguageEnProvider, private storage: Storage, private _translate: TranslateService,
    private nativePageTransitions: NativePageTransitions,
  ) {
    this.tab1Root = HomePage;
    this.tab2Root = GroupPage;
    this.tab3Root = CartproductPage;
    this.tab4Root = LogouttestPage;
    this.tab5Root = SettingPage;
    this.tab6Root = HistoresPage;




    let tabIndex = this.navParams.get('tabIndex');
    if (tabIndex) {
      this.tabIndex = tabIndex;
      console.log("tst", this.tabIndex);

    }
    //  this. _initialiseTranslation() ;


  }
  // tabChange(i) {
  //   console.log("index", i);

  // }
  private getAnimationDirection(index: number): string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true) {
      case (currentIndex < index):
        return ('left');
      case (currentIndex > index):
        return ('right');
    }
  }


  // public transition(e:any):void {
  //   console.log("EEEEEEEEEEEEEEEEE",e);

  //   let options: NativeTransitionOptions = {
  //    direction:this.getAnimationDirection(e.index),
  //    duration: 250,
  //    slowdownfactor: -1,
  //    slidePixels: 0,
  //    iosdelay: 20,
  //    androiddelay: 0,
  //    fixedPixelsTop: 0,
  //    fixedPixelsBottom: 48
  //   };

  //   // if (!this.loaded) {
  //   //   this.loaded = true;
  //   //   return;
  //   // }

  //   this.nativePageTransitions.slide(options);
  // }
  transition(e) {
    console.log("ee", e);
    this.nativePageTransitions;

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Tabs");
    //   this.languageEn.tet;
    //  console.log(this.languageEn.title);
    this.storage.get('lang').then((ress) => {
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);

      if (ress == "en") {
        this.CKland = true;
        console.log("Yes EN")

        this.home = "Home"
        this.search ="Category"
        this.profile ="Profile"
      }
      else {
        this.CKland = false;
        console.log("No EN")

        this.home = "หน้าหลัก"
        this.search ="ประเภท"
        this.profile ="ข้อมูลส่วนตัว"
      }

    })
    this._initialiseTranslation()




  }
  _initialiseTranslation() {
    setTimeout(() => {
      this.title = this._translate.instant("home.heading");
      this.description = this._translate.instant("home.description");
      this.text_home = this._translate.instant("home.text_home");
      this.text_news = this._translate.instant("home.text_news");
      this.text_Product = this._translate.instant("home.text_Product");
      this.text_Shop = this._translate.instant("home.text_Shop");
      this.text_profile = this._translate.instant("home.text_profile");
      this.text_search = this._translate.instant("home.text_search");

      console.log('EMTY', this.title);

    }, 250);
  }
  openCart(cart: string) {
    // this.navCtrl.push(CartproductPage, { cart: cart });
    this.app.getRootNav().setRoot(CartproductPage, {});
  }
  presentAlert() {

    // this.localNotification.schedule({
    //   title: 'My first notification',
    //   text: 'Thats pretty easy...',
    //   foreground: true

    // });

  }


}










