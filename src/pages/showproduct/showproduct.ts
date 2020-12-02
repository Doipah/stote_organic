import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Reportcustomer1Page } from '../reportcustomer1/reportcustomer1';

import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import { PromptPayPage } from '../prompt-pay/prompt-pay';
declare var Omise;

@IonicPage()
@Component({
  selector: 'page-showproduct',
  templateUrl: 'showproduct.html',
})
export class ShowproductPage {
  public hotel_list: any = [];

  //  Omise = require('omise/')({
  //   'secretKey': '',
  //   'omiseVersion': ''
  // });
  // function resourceName(name) { return require('./resources/'+name)(omiseConfig); }
  price_QR :number=40000;
  public keyword: any;
  public items: any = [];
  splash = true;
  tabBarElement: any;

  public data_nameproduct: any = [];
  user_buy_time
  id_product_re
  id_order
  user_order
  code
  num: any = [];
  one_user: any = [];
  total
  booking_email1: any = [];
  cklan:boolean
  payway :string = "";
  credit:string="";
  Prompt_Pay:string="";

  
Payment_channel:string="";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public https: Http, public toastCtrl: ToastController,
    public alertCrt: AlertController, private iab: InAppBrowser, private paypal: PayPal, private storage: Storage) {

    this.storage.get('session_storage').then((booking) => {

      this.booking_email1 = booking;


    });


  }

  ionViewDidLoad() {
    console.log("SHSOSHSOSHSO","YYUUUU")
    this.user_buy_time = this.navParams.get('user_buy_time');
    // this.id_product_re = this.navParams.get('id_product_re');
    // this.id_order = this.navParams.get('id_order');
    // this.user_order = this.navParams.get('user_order');
    // this.total = this.navParams.get('total');

    this.code = this.navParams.get('code');
    
    this.id_product_re = this.navParams.get('id_product_re');
    this.id_order = this.navParams.get('id_order');
    this.user_order = this.navParams.get('user_order');
    this.total = this.navParams.get('total');
    console.log("SHSOSHSOSHSO",this.code,this.total,this.user_order)

    this.storage.get('lang').then((ress) => {
      console.log("Loss", ress);
      
  
      if(ress == "en"){
        this.cklan = true;
        this.payway="payment method "
        this.Payment_channel="Payment channel"
        this.credit="Credit"
        this.Prompt_Pay="Prompt Pay"
      
      }else{
        this.cklan = false;
        this.payway="เลือกวิธีการชำระเงิน "
        this.Payment_channel="ช่องทางการชำระเงิน"
        this.credit="เครดิต"
        this.Prompt_Pay="พร้อมเพย์"
      
      }

    })


  }

  

 



 
  textpayment() {
    //     this.Omise.setPublicKey('pkey_test_5j19jz7h2fylp9fb4gq');

    // this.Omise.createSource('internet_banking_scb', {
    //   "amount": 400000,
    //   "currency": "THB"
    // }, function(statusCode, response) {
    //   console.log(response)
    // });

    this.iab.create("https://adminshop.kwanpat.com/admin-2-gh-pages/payment.php", "_blank");
  }
  paymentcredit( ){

    


    this.navCtrl.push(Reportcustomer1Page,{ code:this.code,id_product_re:this.id_product_re,id_order:this.id_order,user_order: this.user_order ,total:this.total})

  }
  // payWithPaypal() {
  //   this.total = 0;
  //   this.code = this.navParams.get('code');

  //   this.id_product_re = this.navParams.get('id_product_re');
  //   this.id_order = this.navParams.get('id_order');
  //   this.user_order = this.navParams.get('user_order');

  //   this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_check_tableorder.php?user_order=' + this.booking_email1 + "&code=" + this.code)
  //     .map(res => res.json()).subscribe(data1 => {
  //       // this.one_user = data1;

  //       this.one_user = data1;
  //       console.log(this.one_user)
  //       // console.log(itemspro);
  //       var ii = 1
  //       for (let item of this.one_user) {
  //         this.num[ii] = item.user_count * item.user_price
  //         // console.log(this.num[ii])
  //         var num_p = Number(this.num[ii]);
  //         this.total = this.total + num_p
  //         // console.log(this.total)
  //         ii++;
  //       }

  //       for (var i = 0; i <= this.one_user.length; i++) {
  //         // this.total3[i] = this.one_user.user_count[i] * this.one_user.user_price[i];
  //         // var num_p = Number(this.total3[i]);
  //         // this.total = this.total + num_p
  //         console.log(i)

  //       }


  //       console.log(this.code)
  //       console.log(this.id_product_re)
  //       console.log(this.id_order)
  //       console.log(this.user_order)

  //       var x = this.total * 0.031;

  //       //  var x = 1500;
  //       //  x = x * 0.031;
  //       var b = x.toFixed(2); // 162.29
  //       var tt = b.toString();

  //       //  console.log("total",tt ) 
  //       this.paypal.init({
  //         PayPalEnvironmentProduction: '',
  //         PayPalEnvironmentSandbox: 'Afuxf7ceaY5-uYJbol4wMqZLqDrTqflUceLkEgF9Z_Utur0HbZeBEmzdEC64bk38QJzxF9ipWy4iI0i4'
  //       }).then(() => {
  //         this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
  //           acceptCreditCards: true,
  //           languageOrLocale: 'th_TH',
  //           merchantName: 'ราคาสินค้า',
  //           merchantPrivacyPolicyURL: '',
  //           merchantUserAgreementURL: ''
  //         })).then(() => {
  //           0
  //           let detail = new PayPalPaymentDetails(tt, '0.00', '0.00');
  //           let payment = new PayPalPayment(tt, 'USD', 'ราคาสินค้า' + 'x' + (ii - 1), 'Sale', detail);
  //           this.paypal.renderSinglePaymentUI(payment).then((response) => {

  //             if (response.response.state == "approved") {

  //               let body: String = "code=" + this.code + "&user_order=" + this.booking_email1,

  //                 type: string = "application/x-www-form-urlencoded; charset=UTF-8",
  //                 headers: any = new Headers({ 'Content-Type': type }),
  //                 option: any = new RequestOptions({ headers: headers }),
  //                 url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/update_status_userbuyorder.php";
  //               this.https.post(url, body, option).subscribe((data) => { })
  //             }

  //               const toast = this.toastCtrl.create({
  //                 message: 'ชำระเงินเรียบร้อย',
  //                 duration: 10000
  //               });
  //               toast.present();


  //             }, () => {
  //               const toast = this.toastCtrl.create({
  //                 message: 'ชำระเงินไม่สำเร็จ!!',
  //                 duration: 3000
  //               });
  //               toast.present();

  //             })

  //         })

  //       })

  //     });


  // }
 

  promptpay(){
    this.navCtrl.push(PromptPayPage,{code:this.code,id_order:this.id_order,user_order: this.user_order ,total:this.total});

  }
  omiseConfig(price){
    const tokenParameters = {
      "amount": price,
      "currency": "THB",
      "type":"promptpay"
    };
    Omise.setPublicKey("pkey_test_5j19jz7h2fylp9fb4gq");
    Omise.createSource("promptpay", tokenParameters, ((statusCode, response) => {
      console.log("id0", response, statusCode)
      let type: string = "application/x-www-form-urlencoded; charset = UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers })
    this.https.post('https://api.omise.co/charges',
      {
        amount: price,
        token: response.id
      },
      option).map(res => res.json())
      .subscribe((data1) => {})
    }));

  }




}








