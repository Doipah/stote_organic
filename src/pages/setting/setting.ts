import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';

import { RegisterPage } from '../register/register';

import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { LanguageEnProvider } from '../../providers/language-en/language-en';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  public title: string;
  public description: string;
  public language: string;
  public pepperoni: boolean;
  public textpepperoni: any = [];
  public checktext: any = "en";
  public text_Setting :string="";
  cklan :string="" ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _translate: TranslateService,
    public storage: Storage,public viewCtrl: ViewController,private languageEn:LanguageEnProvider) {
    // this._initialiseTranslation();
    // this.storage.get('lang').then((ress) => {

    // }

    this.storage.get('lang').then((ress) => {
      if (ress == "th") {

        this.textpepperoni = "ภาษาอังกฤษ  ";
        this.pepperoni = false;
        this.cklan = "เปลี่ยนภาษา";

      }
      else {
        this.textpepperoni = " English language  ";
        this.pepperoni = true;
        this.cklan = "Change language";

      }

    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.storage.get('lang').then((ress) => {
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);

    })
    this._initialiseTranslation();
  }
  _initialiseTranslation() {
    setTimeout(() => {

      this.text_Setting = this._translate.instant("home.text_Setting");

    }, 25);
  }
  changeLanguage() {
    // this.storage.set('lang', this.language);
    this._translate.use(this.language);
    // this._initialiseTranslation();
  }
  switchLanguage() {
    // this._translate.use(this.lang);
    // localStorage.setItem("lang",this.lang);

    // this._initialiseTranslation();
  }
  // _initialiseTranslation() {
  //   setTimeout(() => {
  //     this.title = this._translate.instant("home.heading");
  //     this.description = this._translate.instant("home.description");

  //   }, 250);
  // }
//   ngOnInit() {
//     this.viewCtrl.didEnter.subscribe(() => {
//        console.log('Component active');
//     });
//  }

  e() {
    if (this.pepperoni == true) {
      this.textpepperoni = "English";

      this.storage.set('lang', 'en');
      this._translate.use('en');
      this._initialiseTranslation();
      // this.navCtrl.push(TabsPage);
      // let active = this.navCtrl.getActive(); // or getByIndex(int) if you know it
      // this.navCtrl.remove(active.index);
      // this.navCtrl.push(active.component);
      // this.navCtrl.setRoot(this.navCtrl.getActive().component);
      this.languageEn.reload(true);
      this.navCtrl.push(TabsPage);

    }
    else {
      this.textpepperoni = "English";
      this.storage.set('lang', 'th');
      this._translate.use('th');
      this._initialiseTranslation();

      this.languageEn.reload(false);
      this.navCtrl.push(TabsPage);
      // this.navCtrl.setRoot(this.navCtrl.getActive().component);
      // this.navCtrl.push(TabsPage);
    }
  }
  // gotogroup() {
  //   this.navCtrl.setRoot(TabsPage, { tabIndex: 3 });
  // }
}
