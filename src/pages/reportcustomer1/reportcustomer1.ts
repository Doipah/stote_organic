import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Platform, AlertController, ToastController, LoadingController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import axios from 'axios';
import { HistoresPage } from '../histores/histores';
import { isRightSide } from 'ionic-angular/umd/util/util';

declare var Omise;

@IonicPage()
@Component({
  selector: 'page-reportcustomer1',
  templateUrl: 'reportcustomer1.html',
})
export class Reportcustomer1Page {
  public data: any = [];
  public one_user: any = [];
  public one_user1: any = [];
  public sum_total: any = [];
  public sum_booking_count: any = [];
  public form: FormGroup;

  user_buy_time
  id_product_re
  id_order
  user_order
  u_name
  total3: any = [];
  total: number = 0;
  num: any = [];
  user_email: any;
  cklan: boolean
  item: any;
  email: string = "";
  data_end: string = ""
  name_credit: string = "";
  Payment: string = "";
  level
  alertinf: any = "";
  selecttopay: any = "";
  wait: any = "";
  numbercard: any = "";
  pay_com:any="";
  _noti:any="";
  _ok:any="";

  private readonly emailRegex = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`;
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private loadingCtrl: LoadingController,
    public https: Http, public fb: FormBuilder, public printer: Printer, public platform: Platform, public toastCtrl: ToastController,
    public alertCtrl: AlertController, public storage: Storage) {
    this.form = fb.group({
      'u_name': ["", Validators.compose([Validators.minLength(10), Validators.pattern(this.emailRegex)])],
      'credit': ["", Validators.compose([Validators.maxLength(16), Validators.minLength(0), Validators.required])],
      'data_date': ["", Validators.compose([Validators.maxLength(20), Validators.minLength(0), Validators.required])],
      'data_cvc': ["", Validators.compose([Validators.maxLength(3), Validators.minLength(0), Validators.required])]
    });
    var newval = '';
    let credit: String = this.form.controls["credit"].value
    for (var i = 0; i < credit.length; i++) {
      if (i % 4 == 0 && i > 0) {
        newval.concat(' ');
        newval = newval.concat(credit[i]);
      }


    }

    // this.item = {
    //   u_name: 
    //   credit: "",
    //   data_date: "",
    //   data_cvc: ""
    // }

  }
  ngOnInit() {
    console.log("bell", this.form.controls.credit.valid)

  }



  ionViewDidLoad() {
    this.storage.get('session_storage').then((booking_email) => {
      console.log("User", booking_email);
      this.user_email = booking_email;

      console.log('ionViewDidLoad Reportcustomer1Page');

      this.user_buy_time = this.navParams.get('code');

      this.id_product_re = this.navParams.get('id_product_re');
      this.id_order = this.navParams.get('id_order');
      this.total = this.navParams.get('total');

      console.log("OK555", this.user_buy_time, this.total)



      // this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_check_tableorder.php?user_order=' + this.user_email + "&code=" + this.user_buy_time)
      //   .map(res => res.json()).subscribe(data1 => {
      //     // this.one_user = data1;

      //     this.one_user = data1;
      //     console.log(this.one_user)
      //     // console.log(itemspro);
      //     var ii = 1
      //     for (let item of this.one_user) {
      //       this.num[ii] = item.user_count * item.user_price
      //       // console.log(this.num[ii])
      //       var num_p = Number(this.num[ii]);
      //       this.total = this.total + num_p
      //       console.log(this.total)
      //       ii++;
      //     }

      //     for (var i = 0; i <= this.one_user.length; i++) {
      //       // this.total3[i] = this.one_user.user_count[i] * this.one_user.user_price[i];
      //       // var num_p = Number(this.total3[i]);
      //       // this.total = this.total + num_p
      //       console.log(i)

      //     }





      // });

    });

    this.storage.get('lang').then((ress) => {
      console.log("Loss", ress);


      if (ress == "en") {
        this.cklan = true;
        this.email = "Email"
        this.name_credit = "Credit"
        this.data_end = "Expiration date "
        this.Payment = "Payment"
        this.alertinf = "Please enter all information."
        this.selecttopay = " Please select the item to pay."
        this.wait = "Wait..."
        this.numbercard = "Invalid card number"
        this.pay_com="Payment completed"
        this._ok="Ok";

      } else {
        this.cklan = false;
        this.email = "อีเมล์"
        this.name_credit = "บัตรเครดิต"
        this.data_end = "วันหมดอายุ"
        this.Payment = "ชำระเงิน"
        this.alertinf = "กรุณาป้อนข้อมูลให้ครบ"
        this.selecttopay = "กรุณาเลือกรายการที่ต้องชำระ"
        this.wait = "กรุณารอสักครู่..."
        this.numbercard = "หมายเลขบัตรไม่ถูกต้อง"
        this.pay_com="ชำระเงินเรียบร้อย"
        this._ok="ตกลง"
      }

    })



  }


  test() {
    this.iab.create("https://www.google.co.th", "_blank");
  }
  test1() {
    this.iab.create(
      "https://adminshop.kwanpat.com/admin-2-gh-pages/payment.php",
      "_system"
    );
  }





  // presentToast() {
  //   const data_key = "pkey_test_5j19jz7h2fylp9fb4gq";
  //   const data_currency="THB";
  //   const   data_amount="4000";

  //   console.log(this.total)
  //   let u_name: String = this.form.controls["u_name"].value,
  //     credit: String = this.form.controls['credit'].value,
  //     data_date: String = this.form.controls['data_date'].value,
  //     data_cvc: String = this.form.controls['data_cvc'].value

  //   if (u_name != "" && credit != "" && data_date != "" && data_cvc != "") {
  //     let body: String = "data-key="+data_key+"&data_currency="+data_currency+"&data-amount="+this.total+ "&u_name=" + u_name + "&credit=" + credit + "&data_date=" + data_date + "&data_cvc=" + data_cvc ,
  //       type: string = "application/x-www-form-urlencoded; charset = UTF-8",
  //       headers: any = new Headers({ 'Content-Type': type }),
  //       option: any = new RequestOptions({ headers: headers }),
  //       url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/checkout.php';
  //     this.https.post(url, body, option)
  //       .map(res => res.json())
  //       .subscribe((data1) => {
  //         // for (this.dataets of data1) {
  //         //   console.log(this.dataets.u_email);
  //         // }
  //         if (data1 == true) {

  //           // const alert = this.alertCtrl.create({

  //           //   message: '<img src = "assets/imgs/success.png" >',

  //           //   subTitle: this.alert_Successregister,
  //           //   buttons: [this.alert_OK],
  //           //   cssClass: 'custom-alert'

  //           // });
  //           // alert.present();
  //           // this.navCtrl.push(LoginedPage);
  //           // this.navCtrl.setRoot(LoginedPage);

  //         } else {
  //           //   const alert = this.alertCtrl.create({

  //           //     message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

  //           //     subTitle: this.alert_errornewemail,
  //           //     buttons: [this.alert_OK],
  //           //     cssClass: 'custom-alert01'

  //           //   });
  //           //   alert.present();

  //           // }
  //           // console.log(data1);





  //         }
  //       });
  //   }
  // }

  presentToast() {
    let u_name: String = this.form.controls["u_name"].value,
      credit: String = this.form.controls["credit"].value,
      data_cvc: String = this.form.controls["data_cvc"].value,
      data_date: String = this.form.controls["data_date"].value

    // this.item

    if (u_name != null && credit != null && data_cvc != null && data_date != null) {

      const date = data_date.split("-")
      console.log("---", date)

      const loader = this.loadingCtrl.create({
        content: this.wait,
        duration: 4000

      });
      loader.present();
      if (this.total != 0) {
        this.omiseConfig(date[1], date[0], u_name, credit, data_cvc, this.total * 100);

      } else {
        this.navCtrl.push(HistoresPage, {});
        const toast = this.toastCtrl.create({
          message: this.selecttopay,
          duration: 2000
        });
        toast.present();
      }




    } else {
      const toast = this.toastCtrl.create({
        message: this.alertinf,
        duration: 2000
      });
      toast.present();


    }

  }

  // omiseConfig(month, year, name, cardId, code, amount) {
  //   const tokenParameters = {
  //     "expiration_month": month,
  //     "expiration_year": year,
  //     "name": name,
  //     "number": cardId,
  //     "security_code": code
  //   };
  //   Omise.setPublicKey("pkey_test_5j19jz7h2fylp9fb4gq");
  //   Omise.createToken("card",
  //     tokenParameters,
  //     function (statusCode, response) {
  //       console.log(response.id);
  //       try {
  //         axios({
  //           method: 'post',
  //           url: 'http://localhost/admin.test/admin-2-gh-pages/checkout1.php',
  //           data: {
  //             amount: amount,
  //             token: response.id
  //           },
  //           headers: {
  //             "Content-Type": "application/json"
  //           }
  //         })
  //           .then(function (res) {
  //             console.log(res.data);
  //             ///
  //           });
  //       } catch (err) {
  //         console.log(err);
  //       }

  //     });
  // }

  omiseConfig(month, year, name, cardId, code, amount) {
    const tokenParameters = {
      "expiration_month": month,
      "expiration_year": year,
      "name": name,
      "number": cardId,
      "security_code": code
    };
    Omise.setPublicKey("pkey_test_5j19jz7h2fylp9fb4gq");
    Omise.createToken("card", tokenParameters, ((statusCode, response) => {

      console.log("id0", response.id, statusCode)
      if (statusCode == 400) {
        setTimeout(() => {
          const toast = this.toastCtrl.create({
            message: this.numbercard,
            duration: 3000
          });

          toast.present();
        }, 2000);
      } else {
        let type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ 'Content-Type': type }),
          option: any = new RequestOptions({ headers: headers })
        this.https.post('https://adminshop.kwanpat.com/admin-2-gh-pages/checkout1.php',
          {
            amount: amount,
            token: response.id
          },
          option).map(res => res.json())
          .subscribe((data1) => {
            let body: String = "code=" + this.user_buy_time + "&user_order=" + this.user_email,

              type: string = "application/x-www-form-urlencoded; charset=UTF-8",
              headers: any = new Headers({ 'Content-Type': type }),
              option: any = new RequestOptions({ headers: headers }),
              url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/update_status_userbuyorder.php";
            this.https.post(url, body, option).subscribe((data) => { })
            // setTimeout(() => {


            //   console.log(data1)
            //   const toast = this.toastCtrl.create({
            //     message: this.pay_com,
            //     duration: 3000
            //   });
            //   toast.present();
            //   this.total = 0;
            // }, 2000);
            
        const alertCtrl = this.alertCtrl.create({
          message: '<img src = "assets/imgs/success.png" >',
          subTitle: this.pay_com,
          buttons: [
            {
              text: this._ok,
              role: this._ok,
              cssClass: 'custom-alertbutton',
              handler: () => {
                // this.storage.clear();
                this.navCtrl.push(HistoresPage, {});
                this.total = 0;
              }
            }
          ]

          ,
          cssClass: 'custom-alert1'
        });
        alertCtrl.present();

            // let alert = this.alertCtrl.create({
            //   message: '<img src = "assets/imgs/success.png" >',
            //   subTitle: this.alert_logout,
            //   cssClass: 'custom-alertout',
            //   buttons: [
            //     {
            //       text: this.alert_Confirm,
            //       role: this.alert_Confirm,
            //       cssClass: 'custom-alertbutton',
            //       handler: () => {
            //         // this.storage.clear();
            //         // this.app.getRootNav().setRoot(LoginedPage);
            //       }
            //     },
               
            //   ]
            // });
            // alert.present();

          })
      }
    }))
    // });
  }
}











