import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Tabs, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Events } from 'ionic-angular';
import { AddProduct2Page } from '../pages/add-product2/add-product2';
import { ShowproductPage } from '../pages/showproduct/showproduct';

import { ReportPage } from '../pages/report/report';

import { LogouttestPage } from '../pages/logouttest/logouttest';
import { HomePage } from '../pages/home/home';
import { ReportCustomerPage } from '../pages/report-customer/report-customer';

import { ProfileUserPage } from '../pages/profile-user/profile-user';
import { Reportcustomer1Page } from '../pages/reportcustomer1/reportcustomer1';
import { ReportDateCumstomerPage } from '../pages/report-date-cumstomer/report-date-cumstomer';

import { HomeLoadingPage } from '../pages/home-loading/home-loading';
import { LoginedPage } from '../pages/logined/logined';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { RegisterPage } from '../pages/register/register';
import { MyaddPage } from '../pages/myadd/myadd';
import { AddstorPage } from '../pages/addstor/addstor';
import { AddLocationPage } from '../pages/add-location/add-location';
import { ReportPageModule } from '../pages/report/report.module';
import { HistoresPage } from '../pages/histores/histores';
import { EtrackingsPage } from '../pages/etrackings/etrackings';
import { AboutPage } from '../pages/about/about';
import { PromptPayPage } from '../pages/prompt-pay/prompt-pay';
import { PromptpayUploadPage } from '../pages/promptpay-upload/promptpay-upload';
import { CreateaddressPage } from '../pages/createaddress/createaddress';
import { PolicyPage } from '../pages/policy/policy';
import { HistoryorderPage } from '../pages/historyorder/historyorder';
import { HistoryOrderDetailPage } from '../pages/history-order-detail/history-order-detail';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;
  rootPage: any;
  tabBarElement: any;
  splash = true;
  subscription: any;
  public counter = 0;
  view


  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public toastCtrl: ToastController,
    public events: Events, public storage: Storage, public _translate: TranslateService) {
    this.initializeApp();



    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();


      platform.registerBackButtonAction(() => {
    
          if (this.counter == 0) {
            this.counter++;
            this.presentToast();
            setTimeout(() => { this.counter = 0 }, 3000)
          } else {
            
            platform.exitApp();
          }

     

      }, 0)




    });

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: "กดอีกครั้ง 1 เพื่อออกจากแอพ",
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      

    });
    this.storage.get('lang').then((ress) => {
      if (ress == null) {
        console.log('EMTY', ress);
        this._translate.setDefaultLang('th');
        this._translate.use('th');
      }
      else {
        console.log('Language', ress);
        this._translate.setDefaultLang(ress);
        this._translate.use(ress);
      }

    })

    this.storage.get('session_storage').then((res) => {
     
      if (res == null) {

        this.rootPage = LoginedPage;
        console.log(this.storage);
        console.log("555555");
        console.log(res);
      } else {

        this.rootPage = TabsPage;
      
      }
    });

  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
