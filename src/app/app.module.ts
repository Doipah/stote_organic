import { MbscModule } from '@mobiscroll/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera } from '@ionic-native/camera/';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingPage } from '../pages/setting/setting';
import { GroupPage } from '../pages/group/group';

import { RegisterPage } from '../pages/register/register';
import { LoginedPage } from '../pages/logined/logined';


import { AddProduct2Page } from '../pages/add-product2/add-product2';
// import { Push, PushObject, PushOptions } from "@ionic-native/push";

import { HomeLoadingPage } from '../pages/home-loading/home-loading';

import { MyaddPage } from '../pages/myadd/myadd';
import { AddstorPage } from '../pages/addstor/addstor';

import { AddLocationPage } from '../pages/add-location/add-location';

import { ReportPage } from '../pages/report/report';
import { ImagesProvider } from '../providers/images/images';


import { ShowproductPage } from '../pages/showproduct/showproduct';
import { LogouttestPage } from '../pages/logouttest/logouttest';
import { HistoresPage } from '../pages/histores/histores';
import { ProfileUserPage } from '../pages/profile-user/profile-user';
import { ListProduct1Page } from '../pages/list-product1/list-product1';



import { Printer, PrintOptions } from '@ionic-native/printer';
import { ReportCustomerPage } from '../pages/report-customer/report-customer';
import { Reportcustomer1Page } from '../pages/reportcustomer1/reportcustomer1';
import { ReportDateCumstomerPage } from '../pages/report-date-cumstomer/report-date-cumstomer';
import { ReportcustomerBuyPage } from '../pages/reportcustomer-buy/reportcustomer-buy';
import { DescriptionProductPage } from '../pages/description-product/description-product';
import { YourServiceProvider } from '../providers/your-service/your-service';
import { AddcartProvider } from '../providers/addcart/addcart';
import { CartproductPage } from '../pages/cartproduct/cartproduct';

import { IonicStorageModule } from '@ionic/storage';
// import { LocalNotifications } from "@ionic-native/local-notifications";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
// import {PayPal,PayPalPayment} from '@ionic-native/paypal/ngx';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { ValidatorUserProvider } from '../providers/validator-user/validator-user';
// import { ProgressBarComponent } from '@angular/animations'

import { LanguageEnProvider } from '../providers/language-en/language-en';
export function createTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen';
import { EtrackingsPage } from '../pages/etrackings/etrackings';
import { HistoresListcodePage } from '../pages/histores-listcode/histores-listcode';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PromptPayPage } from '../pages/prompt-pay/prompt-pay';
import { PromptpayUploadPage } from '../pages/promptpay-upload/promptpay-upload';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Downloader } from '@ionic-native/downloader/ngx';
import { Screenshot } from '@ionic-native/screenshot';
import { CreateaddressPage } from '../pages/createaddress/createaddress';
import { PolicyPage } from '../pages/policy/policy';
import { HistoryorderPage } from '../pages/historyorder/historyorder';
import { HistorycodePage } from '../pages/historycode/historycode';
import { HistoryOrderDetailPage } from '../pages/history-order-detail/history-order-detail';
import { CreateaddressEditPage } from '../pages/createaddress-edit/createaddress-edit';





@NgModule({

  declarations: [
    CreateaddressEditPage,
    HistoryorderPage,
    PolicyPage,
    HistoresListcodePage,
    EtrackingsPage,
    MyApp,
    AboutPage,
    CreateaddressPage,

    HomePage,
    TabsPage,
    SettingPage,
    GroupPage,

    RegisterPage,
    LoginedPage,

    AddProduct2Page,

    ListProduct1Page,


    HomeLoadingPage,

    MyaddPage,
    AddstorPage,

    PromptpayUploadPage,
    CartproductPage,

    AddLocationPage,

    FavoritesPage,

    ReportPage,
    PromptPayPage,


    ShowproductPage,
    LogouttestPage,
    HistoresPage,
    ProfileUserPage,
    ReportCustomerPage,
    Reportcustomer1Page,
    ReportDateCumstomerPage,
    ReportcustomerBuyPage,
    DescriptionProductPage,
    HistorycodePage,
    HistoryOrderDetailPage


  ],
  imports: [


    MbscModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CreateaddressEditPage,
    HistoryorderPage,
    PolicyPage,
    HistoresListcodePage,
    EtrackingsPage,
    MyApp,
    AboutPage,
    CreateaddressPage,
    HomePage,
    TabsPage,
    SettingPage,
    GroupPage,

    RegisterPage,
    LoginedPage,

    FavoritesPage,
    AddProduct2Page,
    PromptpayUploadPage,

    ListProduct1Page,

    PromptPayPage,

    HomeLoadingPage,

    MyaddPage,
    AddstorPage,
    CartproductPage,

    AddLocationPage,

    ReportPage,


    ShowproductPage,
    LogouttestPage,
    HistoresPage,
    ProfileUserPage,
    ReportCustomerPage,
    Reportcustomer1Page,
    ReportDateCumstomerPage,
    ReportcustomerBuyPage,
    DescriptionProductPage,
    HistorycodePage,
    HistoryOrderDetailPage,
    

  ],

  providers: [
    Downloader,
    StatusBar,
    SplashScreen,
    LottieSplashScreen,
   
  
    File,
    Transfer,
    Camera,
    FilePath,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    HttpModule,
    HttpClientModule,

    ImagePicker,
    ImagesProvider,
    Printer,
    YourServiceProvider,
    AddcartProvider,

    LanguageEnProvider,
    NativePageTransitions,
    ValidatorUserProvider,
    InAppBrowser,
    PayPal,
    
   
    // Push,

  ]

})
export class AppModule { }
