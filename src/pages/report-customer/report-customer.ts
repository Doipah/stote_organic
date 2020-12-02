// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, Platform, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

import { MyaddPage } from '../myadd/myadd';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { Reportcustomer1Page } from '../reportcustomer1/reportcustomer1';
import { Storage } from '@ionic/storage';
import { ShowproductPage } from '../showproduct/showproduct';
import { ReportPage } from '../report/report';
import { e } from '@angular/core/src/render3';
import { TabsPage } from '../tabs/tabs';
import { HistoresPage } from '../histores/histores';


@IonicPage()
@Component({
  selector: 'page-report-customer',
  templateUrl: 'report-customer.html',
})
export class ReportCustomerPage {
  public data_name: any = [];

  user_email
  address_shoping
  order
  total: any = [];
  totalall: number = 0;
  total_count: number = 0;
  booking_price: any = [];
  booking_count: any = [];
  id_product_re: any = [];
  dataets
  sum_total
  Timedata: any;
  code: any;
  time
  test: string = "flase";
  cklan: boolean
  Loding: string = "";
  code_buy
  id_add: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http,
    public alertCtrl: AlertController, public fb: FormBuilder, public printer: Printer,
    public platform: Platform, private storage: Storage, public toastCtrl: ToastController, private loadingCtrl: LoadingController) {



  }

  ionViewDidLoad() {
    this.sum_total = this.navParams.get('total');
    this.code_buy = this.navParams.get('code_buy');
    this.id_add = this.navParams.get('idadd');
    console.log('ionViewDidLoad ข้อมูลต้องการสั่งซื้อ', this.sum_total, "CODE", this.code_buy, this.id_add);

    this.storage.get('lang').then((ress) => {
      console.log("Loss", ress);


      if (ress == "en") {
        this.cklan = true;

        this.cklan = true;
        this.Loding = "One moment please..."

      } else {
        this.cklan = false;
        this.Loding = "กรุณารอสักครู่..."
      }

    })

    this.storage.get('session_storage').then((booking_email) => {
      console.log("User", booking_email);
      this.user_email = booking_email;
      this.select_address(this.user_email);
      this.select_order(this.user_email);
    });


  }



  ngOnInit() {

  }
  select_address(user: string) {
    console.log("test_user", this.id_add)
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_addrees_buy.php?id_add=' + this.id_add)
      .map(res => res.json())
      .subscribe(data => {
        this.address_shoping = data;
        console.log(this.address_shoping)
      });
  }
  select_order(user1: string) {
    console.log("test_user", user1)
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking_joinpro.php?booking_email=' + user1)
      .map(res => res.json())
      .subscribe(data => {
        this.order = data;
        this.order
        let itemspro = this.order = data;
        itemspro
        let selected = {};

        for (let obj of itemspro) {
          this.order.length
          obj.booking_count
          obj.booking_price
          selected[obj.id_product_re] = { ...obj }
        }
        for (var i = 1; i < this.order.length; i++) {
          this.total[i] = this.order[i].num_count * this.order[i].booking_price;
          console.log(this.total[i])
          var num_p = Number(this.total[i]);
          this.totalall = this.totalall + num_p;
          var conut_p = Number(this.order[i].num_count);
          this.total_count = this.total_count + conut_p;
          // console.log("9"+this.total_count)
          this.totalall
        }

      });
  }
  // presentToast(){

  // }
  // presentToast() {
  //   const toast = this.toastCtrl.create({
  //     message: 'User was added successfully',
  //     duration: 3000
  //   });
  //   toast.present();
  // }
  presentToast1() {
    // console.log("VJK",this.total_count )
    this.code_buy
    // this.address_shoping
  
    this.storage.get('session_storage').then((booking_email) => {

      console.log("VJK",  this.code_buy, this.sum_total,booking_email,this.id_add )
    let body: string = "code_comf=" + this.code_buy + "&user_comf=" + booking_email + "&total=" +this.sum_total +"&total_count="+this.total_count+
    "&id_address=" + this.id_add  ,
    type: string = "application/x-www-form-urlencoded; charset = UTF-8",
    headers: any = new Headers({ 'Content-Type': type }),
    option: any = new RequestOptions({ headers: headers }),
    url: any = "http://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/user_comfirm_order.php";
    this.https.post(url, body, option).map(res => res.json())
    .subscribe((data1) => {

      
    })

  })

  }

  presentToast(sum_total: string) {
    console.log("test", sum_total);

    this.storage.get('session_storage').then((booking_email) => {
      console.log("User", booking_email);

      const loader = this.loadingCtrl.create({
        content: this.Loding,
        duration: 4000

      });
      loader.present();
      setTimeout(() => {
       
        this.presentToast1()

        // this.navCtrl.push(ShowproductPage,{});
        console.log(this.order.length);
        var nL = Number(this.order.length);
        var num_i = 0;
        for (let obj of this.order) {

          this.booking_price = obj.booking_price
          this.booking_count = obj.booking_count
          this.id_product_re = obj.id_product_re
          this.Timedata = obj.Timedata


          console.log("TETS", this.Timedata, this.code_buy);




          let body: string = "user_id_product_re=" + this.id_product_re + "&user_order=" + booking_email + "&user_price=" + this.booking_price +
            "&user_count=" + this.booking_count + "&user_buy_time=" + this.Timedata + "&total=" + sum_total + "&code=" + this.code_buy + "&id_add=" + this.id_add,
            type: string = "application/x-www-form-urlencoded; charset = UTF-8",
            headers: any = new Headers({ 'Content-Type': type }),
            option: any = new RequestOptions({ headers: headers }),
            url: any = "http://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/user_buy_order.php";
          this.https.post(url, body, option)
            .map(res => res.json())
            .subscribe((data1) => {
              // for (this.dataets of data1) {
              this.dataets = data1;
              //  for(let i=0;  ){


              //  }
              if (num_i == 1) {

                // this.sendmail(this.dataets)
              }
              num_i++;
              console.log("num_i", num_i)



            })

        }

       


        // console.log("code", this.Timedata)
        // this.navCtrl.setRoot(TabsPage,{2:2 });
        // this.navCtrl.setRoot(HistoresPage,{ test:this.test});

        this.navCtrl.push(HistoresPage);


        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
        // this.navCtrl.push(TabsPage);


        // gotogroup() {
        //   this.navCtrl.setRoot(TabsPage, { tabIndex: 3 });
        // }
        // this.navCtrl.push(ShowproductPage, { Timedata: this.Timedata });
        this.updatecart(booking_email)


      }, 4000);

    });

  }






  updatecart(email: string) {


    let body: String = "booking_email=" + email,

      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/updete_productart.php";
    this.https.post(url, body, option).subscribe((data) => { })

  }
  sendmail(code_email: string) {
    console.log("code_send_email", code_email, this.user_email)
    let body: String = "code_email=" + code_email + "&user_email=" + this.user_email + "&total=" + this.sum_total,

      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = "http://localhost/admin.test/admin-2-gh-pages/sample_email.php";
    this.https.post(url, body, option).subscribe((data) => { })




  }

  edit(id: string, pemail: string, user_name_buy: string, contry: string, ampor: string, tabon: string, address: string, tel: string, code: string) {

    console.log(contry, ampor, tabon)



    this.navCtrl.push(ReportPage, {
      id: id, user_email: pemail, user_name_buy: user_name_buy, contry: contry,
      ampor: ampor, tabon: tabon, address: address, tel: tel, code_postman: code, total: this.sum_total, code_buy: this.code_buy, id_add: this.id_add
    });

  }

}



