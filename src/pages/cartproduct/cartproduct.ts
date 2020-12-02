import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Refresher, Content, LoadingController } from 'ionic-angular';
import { AddcartProvider } from '../../providers/addcart/addcart';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal';
import { ReportPage } from '../report/report';
import { ReportCustomerPage } from '../report-customer/report-customer';
import { CreateaddressPage } from '../createaddress/createaddress';


@IonicPage()
@Component({
  selector: 'page-cartproduct',
  templateUrl: 'cartproduct.html',
})
export class CartproductPage implements OnInit {
  @ViewChild(AddcartProvider)

  selectedItems = [];
  public total: number = 0;
  public total2: number = 0;
  public total3: any = [];
  public num: number = 0;
  public num2: any = [];
  public id: any = [];
  show = null;
  public form: FormGroup;
  loading: any;
  public data2: any = [];
  public booking_email1;
  public test: boolean = true;
  public num_update: any = [];
  public id_product_re_update: any = [];
  public num_count_update: any = [];
  public booking_product: any = [];
  public name: any = [];
  public status: boolean = true;
  public status2: boolean = false;
  public baseUrl: any = "https://adminshop.kwanpat.com";
  public alert_remove: string = "a";
  public alert_Cancel: string = "a";
  public alert_Confirm: string = "a";
  public alert_OK: string = "s";
  public alert_Success: string = "s";
  public alert_shoppinfcart: string = "";
  alert_Not_numproduct: string = "";
  instock: string = "";
  cklan: boolean;
  Total_Payment: string = "";
  text_Product: string = "";
  text_price: string = "";
  paymentdata: any;
  paymentdetails: any;
  youraddress: any = [];
  ttt = 0;
  public keys: boolean = false;
  booking_price;
  order: any = [];
  booking_count;
  id_product_re;
  Timedata;
  Loding: string = "";
  Get_day: any = "";
  code_buy: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http, public loadingCtrl: LoadingController,
    public addCartService: AddcartProvider, public storage: Storage, public alertCtrl: AlertController,
    public fb: FormBuilder, private _translate: TranslateService, private paypal: PayPal) {
    this.form = fb.group({


      "num_c": ["", Validators.required]

    });
    this.select_youraddress();

    this.testcart();
  }

  checkout(dic: string) {
    console.log("..", dic);
    this.paypal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'Afuxf7ceaY5-uYJbol4wMqZLqDrTqflUceLkEgF9Z_Utur0HbZeBEmzdEC64bk38QJzxF9ipWy4iI0i4'
    }).then(() => {
      this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        acceptCreditCards: true,
        languageOrLocale: 'th_TH',
        merchantName: 'CanalDoAbranches',
        merchantPrivacyPolicyURL: '',
        merchantUserAgreementURL: ''
      })).then(() => {
        let detail = new PayPalPaymentDetails(dic, '0.00', '0.00');
        let payment = new PayPalPayment(dic, 'THB', 'CanalDoAbranches', 'Sale', detail);
        this.paypal.renderSinglePaymentUI(payment).then((response) => {

          console.log(response);
        }, () => {
          console.log('error paypal');
        })

      })

    })
  }

  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';

  select_youraddress() {

    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_check_yourAddress.php')
      .map(res => res.json())
      .subscribe(data => {
        this.youraddress = data;
      });

  }
  testcart() {
    this.total = 0;
    this.storage.get('session_storage').then((booking_email) => {
      this.booking_email1 = booking_email;
      booking_email

      this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking_joinpro.php?booking_email=' + booking_email)
        .map(res => res.json())
        .subscribe(data => {
          let itemspro = this.booking_product = data;
          // console.log(itemspro);
          let selected = {};

          for (let obj of itemspro) {
            this.booking_product.length
            console.log(this.booking_product.length);
            obj.id_product_re
            obj.num_count
            // console.log("OOO0",obj.Timedata)
            selected[obj.id_product_re] = { ...obj }
            for (var i = 1; i < this.booking_product.length; i++) {
              this.total3[i] = this.booking_product[i].num_count * this.booking_product[i].booking_price;

            }
            // var dd2 = Number( obj.num_count);
            //   var dd = Number(item.booking_count);
            //   this.SUM_To = dd;
          }
          for (var i = 1; i < this.booking_product.length; i++) {
            this.total3[i] = this.booking_product[i].num_count * this.booking_product[i].booking_price;
            var num_p = Number(this.total3[i]);
            this.total = this.total + num_p
          }

          this.selectedItems = Object.keys(selected).map(key => selected[key])
          console.log("selectedItems", this.selectedItems);

          this.total

          
        });
    });
  }
  ionViewDidLoad() {
    console.log("5")
    console.log('ionViewDidLoad CartproductPage');
    this.storage.get('lang').then((ress) => {
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);
      if (ress == 'en') {
        this.cklan = true;
        this.Loding = "One moment please..."


      } else {
        this.cklan = false;
        this.Loding = "กรุณารอสักครู่..."
      }

    })
    this._initialiseTranslation();
  }

  payWithPaypal(sum_total: string,) {
    console.log("คืดแล้วรวมแล้ว", sum_total)
    this.storage.get('session_storage').then((booking_email) => {
      this.booking_email1 = booking_email;

      for (var i = 0; i < this.youraddress.length; i++) {
        // this.keys = false;

        console.log("this", this.youraddress[i].user_email);

        if (this.booking_email1 == this.youraddress[i].user_email) {
          console.log("ใช่", i);
          this.keys = true;
        }

      }



      var d = new Date();
      var Get_dayall = d.getDate();
      var Get_day = d.getDay();
      var Get_year = d.getFullYear();
      var Get_Month = d.getMonth();
      var Get_Seconds = d.getSeconds();
      var Get_Minutes = d.getMinutes();
      var Get_Hours = d.getHours();

      var d_Get_month = Get_Month.toString();
      var d_Get_dayall = Get_dayall.toString();
      var d_getday7 = Get_day.toString();
      var d_year = Get_year.toString();
      var d_seconds = Get_Seconds.toString();
      var d_minutes = Get_Minutes.toString();
      var d_hours = Get_Hours.toString();



      if (d_seconds <= "10") {
        this.code_buy = d_getday7 + d_Get_dayall + d_Get_month + d_year + d_hours + d_minutes + "0" + d_seconds;

      } else if (d_seconds <= "10" && d_hours <= "10") {
        this.code_buy = d_getday7 + d_Get_dayall + d_Get_month + d_year + "0" + d_hours + d_minutes + "0" + d_seconds;

      } else if (d_seconds <= "10" && d_hours <= "10" && d_Get_dayall <= "10") {
        this.code_buy = d_getday7 + "0" + d_Get_dayall + d_Get_month + d_year + "0" + d_hours + d_minutes + "0" + d_seconds;

      } else {
        this.code_buy = d_getday7 + d_Get_dayall + d_Get_month + d_year + d_hours + d_minutes + d_seconds;

      }


      // if (this.keys == true) {

        // console.log("test");
        // this.storage.get('session_storage').then((booking_email) => {
        //   console.log("User", booking_email);

        //   const loader = this.loadingCtrl.create({
        //     content: "กรุณารอสักครู่...",
        //     duration: 4000

        //   });
        //   loader.present();
        //   setTimeout(() => {

        //     // this.navCtrl.push(ShowproductPage,{});
        //     console.log(this.booking_product);
        //     for (let obj of this.booking_product) {
        //       this.booking_price = obj.booking_price
        //       this.booking_count = obj.booking_count
        //       this.id_product_re = obj.id_product_re
        //       this.Timedata = obj.Timedata

        //       console.log(this.Timedata)



        //       let body: string = "user_id_product_re=" + this.id_product_re + "&user_order=" + booking_email + "&user_price=" + this.booking_price +
        //         "&user_count=" + this.booking_count +"&user_buy_time="+this.Timedata,
        //         type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        //         headers: any = new Headers({ 'Content-Type': type }),
        //         option: any = new RequestOptions({ headers: headers }),
        //         url: any = "http://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/user_buy_order.php";
        //       this.https.post(url, body, option)
        //         .map(res => res.json())
        //         .subscribe((data1) => {
        //           // for (this.dataets of data1) {


        //         })
        //     }
        //     this.updatecart(booking_email);

        //   }, 4000);

        // });

        const loader = this.loadingCtrl.create({
          content: this.Loding,
          duration: 2000

        });
        loader.present();
        setTimeout(() => {

      

         



          // this.navCtrl.push(ReportCustomerPage, { total: sum_total ,code_buy:this.code_buy });


          this.navCtrl.push(CreateaddressPage, { total: sum_total, code_buy: this.code_buy });
          console.log("code", this.code_buy)

        }, 2000);
      // }
      // else {
      //   this.navCtrl.push(ReportPage, { total: sum_total, code_buy: this.code_buy });

      //   console.log("code", this.code_buy)

      // }
    })

  }
  updatecart(email: string) {


    let body: String = "booking_email=" + email,

      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/updete_productart.php";
    this.https.post(url, body, option).subscribe((data) => { })

  }

  ionViewWillEnter() {
    //   for (var i = 0; i < this.youraddress.length; i++) {
    //     this.keys = false;

    //     console.log("this", this.youraddress[i].user_email);

    //     if (this.booking_email1 == this.youraddress[i].user_email) {
    //       console.log("ใช่", i);
    //       this.keys = true;
    //     }

    //   }
    //   if( this.keys == true){
    //     const loader = this.loadingCtrl.create({
    //       content: "กรุณารอสักครู่...",
    //       duration: 2000

    //     });
    //     loader.present();
    //     setTimeout(() => {
    //       this.navCtrl.push(ReportCustomerPage,{});

    //     }, 2000);
    //   }
    //   else{
    //  this.navCtrl.push(ReportPage,{});

    //   }
    console.log("1")
  }
  ionViewDidEnter() {
    console.log("2")
  }
  ionViewWillLeave() {
    console.log("3")
  }
  ionViewDidLeave() {
    console.log("4")
  }
  // console.log("Pay ????");
  // this.paypal.init({
  //   PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
  //   PayPalEnvironmentSandbox: 'AZG6JBAJ_brglDoIg3cVVftBo8Lu4JA-BGdxs5do29V8pYoO4dNjUSOu5HvxS3M3rCmWO21I_9Z6foes'
  // }).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  // this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
  // Only needed if you get an "Internal Service Error" after PayPal login!
  //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  // })).then(() => {
  //   let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
  //   this.paypal.renderSinglePaymentUI(payment).then((res) => {
  //     console.log(res);
  // Successfully paid

  // Example sandbox response
  //
  // {
  //   "client": {
  //     "environment": "sandbox",
  //     "product_name": "PayPal iOS SDK",
  //     "paypal_sdk_version": "2.16.0",
  //     "platform": "iOS"
  //   },
  //   "response_type": "payment",
  //   "response": {
  //     "id": "PAY-1AB23456CD789012EF34GHIJ",
  //     "state": "approved",
  //     "create_time": "2016-10-03T13:33:33Z",
  //     "intent": "sale"
  //   }
  // }
  //       }, () => {
  //          Error or render dialog closed without being successful
  //       });
  //     }, () => {
  //        Error in configuration
  //     });
  //   }, () => {
  //      Error in initialization, maybe PayPal isn't supported or something else
  //   });
  // }



  _initialiseTranslation() {
    setTimeout(() => {

      this.alert_remove = this._translate.instant("home.alert_remove");
      this.alert_Cancel = this._translate.instant("home.alert_Cancel");
      this.alert_Confirm = this._translate.instant("home.alert_Confirm");
      this.alert_OK = this._translate.instant("home.alert_OK");
      this.alert_Success = this._translate.instant("home.alert_Success");
      this.alert_shoppinfcart = this._translate.instant("home.alert_shoppinfcart");
      this.alert_Not_numproduct = this._translate.instant("home.alert_Not_numproduct");
      this.instock = this._translate.instant("home.instock");
      this.Total_Payment = this._translate.instant("home.Total_Payment");
      this.text_Product = this._translate.instant("home.text_Product");
      this.text_price = this._translate.instant("home.text_price");


    }, 25);
  }



  ngOnInit() {
    console.log("6")

    // this.storage.get('session_storage').then((booking_email) => {
    //   this.booking_email1 = booking_email;
    //   booking_email

    //   this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking_joinpro.php?booking_email=' + booking_email)
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       let itemspro = this.booking_product = data;
    //       // console.log(itemspro);
    //       let selected = {};

    //       for (let obj of itemspro) {
    //         this.booking_product.length
    //          obj.id_product_re
    //          obj.num_count
    //          selected[obj.id_product_re] = { ...obj }
    //         for (var i = 1; i < this.booking_product.length; i++) {
    //           this.total3[i] = this.booking_product[i].num_count * this.booking_product[i].booking_price;

    //         }
    //         // var dd2 = Number( obj.num_count);
    //         //   var dd = Number(item.booking_count);
    //         //   this.SUM_To = dd;
    //       }
    //       for (var i = 1; i < this.booking_product.length; i++) {
    //         this.total3[i] = this.booking_product[i].num_count * this.booking_product[i].booking_price;
    //         var num_p = Number(this.total3[i]);
    //         this.total = this.total + num_p
    //       }

    //       this.selectedItems = Object.keys(selected).map(key => selected[key])
    //       console.log("selectedItems", this.selectedItems);

    //        this.total
    //     });
    // });
  }
  // showsum(booking_email: string, ) {

  //   console.log("<01><01><01><01>", booking_email);



  // }

  delete(id_product_re: string, num_count: string) {
    let alert = this.alertCtrl.create({
      message: '<img src = "assets/imgs/exclamation-mark.png" >',
      subTitle: this.alert_remove,
      cssClass: 'custom-alertout',
      buttons: [{
        text: this.alert_Confirm,
        role: this.alert_Confirm,
        handler: () => {

          this.cancel_booking(id_product_re);
        }
      }, {
        text: this.alert_Cancel,
        role: this.alert_Cancel,
        handler: () => {

        }
      }]
    });
    alert.present();
  }
  cancel_booking(id_product_re: string) {


    let body: String = "id_product_re=" + id_product_re + "&booking_email=" + this.booking_email1,

      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/cancel_product.php";
    this.https.post(url, body, option).subscribe((data) => {
      if (data.status === 200) {

        const alert = this.alertCtrl.create({
          message: '<img src = "assets/imgs/success.png" >',
          subTitle: this.alert_Success,
          buttons: [
            {
              text: this.alert_OK,
              role: this.alert_OK,
              cssClass: 'custom-alertbutton',
            }
          ]

          ,
          cssClass: 'custom-alert1'
        });
        alert.present();
        // this.navCtrl.push(CartproductPage);
        // this.navCtrl.setRoot(CartproductPage);

        this.testcart();

      } else {
        this.showAlert("ยกเลิกการจองล้มเหลว");
      }
    });
  }
  showAlert(fname): void {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: fname,
      buttons: ['Ok']
    });
    alert.present();
  }
  close() {
    this.navCtrl.push(TabsPage);
  }
  setDistrictValues(id) {

    console.log("ID", id);

  }
  addupdate(index: number) {
    this.status = false;
    this.status2 = true;

    var i = index + 1;
    var id = 1;
    console.log("I", i);

    var checknum1 = Number(this.booking_product[i].num_count);
    var checknum_product2 = Number(this.booking_product[i].num_product);

    if (checknum1 < checknum_product2) { //check num_couct.booking < num_product
      console.log("DD", this.num_update = this.booking_product[i].num_count++);
      this.total3[i] = this.booking_product[i].num_count * this.booking_product[i].booking_price;
      console.log("gog", this.booking_product[i].num_count);
      console.log("num", this.booking_product[i].num_product);

      // var d = Number(this.total3[i]);
      // var num =Number(this.booking_product[i].num_count ++)
      // var price = Number (this.booking_product[i].booking_price);
      // this.total = this.total + d ;

      this.num_count_update = this.num_update + 1;
      this.id_product_re_update = this.booking_product[i].id_product_re;
      console.log("num_update", this.booking_email1, this.num_count_update, this.id_product_re_update);

      console.log("EE2", this.booking_product[i].booking_price);
      var num_p = Number(this.booking_product[i].booking_price);
      console.log("in++2", this.total = this.total + num_p);

      let body: String = "id_product_re=" + this.id_product_re_update + "&booking_email=" + this.booking_email1 + "&booking_count=" + this.num_count_update + "&booking_price=" + this.booking_product[i].booking_price,
        type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_update_product_.php';
      this.https.post(url, body, option)
        .map(res => res.json())
        .subscribe((data) => {

        });
    } else {
      console.log("gog", this.booking_product[i].num_count);
      console.log("num", this.booking_product[i].num_product);
      console.log("มีสินค้าไม่เพียงพอ");
      const alert = this.alertCtrl.create({

        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',
        subTitle: this.alert_Not_numproduct,
        buttons: [this.alert_OK],
        cssClass: 'custom-alert'

      });
      alert.present();
    }


  }

  decrementQty(index: number) {
    var i = index + 1;
    if (this.booking_product[i].num_count - 1 < 1) {
      this.booking_product[i].num_count = 1;
    }
    else {
      this.booking_product[i].num_count--;
      this.num_count_update = this.booking_product[i].num_count
      this.total3[i] = this.booking_product[i].num_count * this.booking_product[i].booking_price
      console.log("EE2", this.booking_product[i].booking_price);
      var num_p = Number(this.booking_product[i].booking_price);
      console.log("in++2", this.total = this.total - num_p);

      this.id_product_re_update = this.booking_product[i].id_product_re;
      console.log("num_update", this.booking_email1, this.num_count_update, this.id_product_re_update);

      let body: String = "id_product_re=" + this.id_product_re_update + "&booking_email=" + this.booking_email1 + "&booking_count=" + this.num_count_update + "&booking_price=" + this.booking_product[i].booking_price,
        type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_update_product_.php';
      this.https.post(url, body, option)
        .map(res => res.json())
        .subscribe((data) => {

        });


    }

  }

  checkout1(dic) {

    if (dic == 0) {
      console.log("ไม่มีสินค้า กรุณาเลือกซื้อสินค้า")

    }
    else {
      console.log("ok")
    }

  }


}






