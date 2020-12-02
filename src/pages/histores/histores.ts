import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content, Slides } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Reportcustomer1Page } from '../reportcustomer1/reportcustomer1';
import { ReportcustomerBuyPage } from '../reportcustomer-buy/reportcustomer-buy';
import { ReportCustomerPage } from '../report-customer/report-customer';
import { ShowproductPage } from '../showproduct/showproduct';
import { TabsPage } from '../tabs/tabs';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
import { c } from '@angular/core/src/render3';
import { EtrackingsPage } from '../etrackings/etrackings';
import { HistoresListcodePage } from '../histores-listcode/histores-listcode';
import { HistorycodePage } from '../historycode/historycode';
/**
 * Generated class for the HistoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-histores',
  templateUrl: 'histores.html',
})
export class HistoresPage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
  @ViewChild('scroll') scroll: Content;

  SwipedTabsIndicator: any = null;
  tabElementWidth_px: number = 100;
  tabs1: any = [];

  public hotel_list: any = [];
  pet: string = "puppies";
  // isAndroid: boolean = false;
  districts: any = [];
  booking_email1: any = [];
  tra_date: any = [];
  datasucess: any = [];
  ss: any = [];
  time = "2020-06-01";
  data
  result: any = [];
  result1: any = [];
  resultck: any = [];
  resultsuess: any
  values: any = [];
  sum: any = [];
  sumpush: number = 0;
  ckland: boolean;
  dataetrcking: any = [];
  result2: any = [];
  L: any;
  LL: any;
  LLL: any;
  LLLL: any;
  LLLLL: any;
  checkdata: any = [];
  resultcancel: any = []
  datacancel: any = []
  sta:any="";
  title:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, platform: Platform, private storage: Storage) {

    // this.isAndroid = platform.is('android');

    // datetime.setMinutes(datetime.getMinutes() + 30);
    // datetime.setMinutes(datetime.getMinutes() + 30);
    // this.tabs1 = ['รอชำระเงิน', 'ชำระเงินแล้ว', 'เตรียมจัดส่ง', 'ยกเลิกสินค้า'];
    this.ss = "ชำระเงินแล้ว";


    var d = new Date();
    var n = d.getHours();


    console.log("data", n * 60 * 60)
  }
  if() {


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogouttestPage');

    // this.showHotel_data4();


    //   this.languageEn.tet;
    //  console.log(this.languageEn.title);
    this.storage.get('lang').then((ress) => {
      // this._translate.setDefaultLang(ress);
      // this._translate.use(ress);
      if (ress == "en") {

        this.ckland = true;
        this.tabs1 = ['to pay', 'check pay', 'to ship', 'Waiting for delivery', 'to receive'];

      } else {
        this.ckland = false;
        this.tabs1 = ['รอชำระเงิน', 'ตรวจสอบ', 'ที่ต้องจัดส่ง', 'รอจัดส่ง', 'ยกเลิกสินค้า'];


      }


    })
    // this._initialiseTranslation();
  }

  ionViewWillEnter() {
    this.storage.get('session_storage').then((booking) => {

      this.booking_email1 = booking;



      console.log('ionViewDidLoad HistoresPage');
      this.show_order_all(this.booking_email1);
      this.show_order_sucess(this.booking_email1);
      this.show_order_etrcking(this.booking_email1)
      this.show_order_checkpayment(this.booking_email1)
      this.show_order_cancel(this.booking_email1)
    });

  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }
  selectTab(index) {
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
    this.scroll.scrollTo(index * this.tabElementWidth_px, 0, 500);
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
    this.scroll.scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);

    // this condition is to avoid passing to incorrect index
    if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
    }

  }
  animateIndicator($event) {
    if (this.SwipedTabsIndicator)
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';

  }

  // ionViewDidLoad() {

  // }
  show_order_all(email: string) {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_user_checkorder.php?booking_email=' + email)
      .map(res => res.json())
      .subscribe(data => {
        this.districts = data;
        console.log("L", this.L = this.districts.length)

        var code = new Set(this.districts.map(item => item.code));
        this.result = [];

        code.forEach(getCountry =>
          this.result.push({

            code_id: getCountry,
            values: this.districts.filter(i => i.code === getCountry),

          }

          ))
        console.log(this.result)
      });

  }
  show_order_checkpayment(email: string) {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_check_payment.php?booking_email=' + email)
      .map(res => res.json())
      .subscribe(data => {
        this.checkdata = data;
        console.log("L", this.LL = this.checkdata.length)

        var code = new Set(this.checkdata.map(item => item.code));
        this.resultck = [];

        code.forEach(getCountry =>
          this.resultck.push({

            code_id: getCountry,
            values: this.checkdata.filter(i => i.code === getCountry),

          }

          ))
        console.log(this.resultck)
      });

  }

  show_order_sucess(email: string) {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_user_checkorder_sucess.php?booking_email=' + email)
      .map(res => res.json())
      .subscribe(data => {
        this.datasucess = data;
        console.log("L", this.LLL = this.datasucess.length)

        var code = new Set(this.datasucess.map(item => item.code));
        var ss = new Set(this.datasucess.map(item => item.user_status));
        this.result1 = [];

        code.forEach(getCountry =>
          this.result1.push({

            code_id: getCountry,
            values: this.datasucess.filter(i => i.code === getCountry),

          }

          ))
        console.log("result1", this.result1)
      });

  }

  show_order_etrcking(email: string) {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_Etrcking.php?booking_email=' + email)
      .map(res => res.json())
      .subscribe(data => {
        this.dataetrcking = data;
        console.log("L", this.LLLL = this.dataetrcking.length)

        var code = new Set(this.dataetrcking.map(item => item.code));
        this.result2 = [];

        code.forEach(getCountry =>
          this.result2.push({

            code_id: getCountry,
            values: this.dataetrcking.filter(i => i.code === getCountry),
          }

          ))
        console.log("result2", this.result2)
      });

  }

  show_order_cancel(email: string) {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_cancel_product.php?booking_email=' + email)
      .map(res => res.json())
      .subscribe(data => {
        this.datacancel = data;
        console.log("L", this.LLLLL = this.datacancel.length)

        var code = new Set(this.datacancel.map(item => item.code));
        this.resultcancel = [];

        code.forEach(getCountry =>
          this.resultcancel.push({

            code_id: getCountry,
            values: this.datacancel.filter(i => i.code === getCountry),
          }

          ))
        console.log("result2", this.result2)
      });

  }

  checkout(code: string, id_product_re: string, id_order: string, user_order: string, total: string) {

    console.log("IDID", total)


    this.navCtrl.push(ShowproductPage, { code: code, id_product_re: id_product_re, id_order: id_order, user_order: user_order, total: total });
  }
  close() {
    this.navCtrl.push(TabsPage, { tabIndex: 2 });
  }
  // gotoetracking() {
  //   this.navCtrl.push(EtrackingsPage)
  // }

  gotoDetail(code_id: string) {
    this.navCtrl.push(HistoresListcodePage, { code_id: code_id })

    console.log(code_id)
  }

  gotoDetail1(code_id: string, tex: string) {
    console.log(code_id, "te", tex)
    if (tex == "1") {

      if (this.ckland == true) {

        this.sta="Checking"
        this.title="Checking"
    
      } else {
       this.sta="สถานะ กำลังตรวจสอบ"
       this.title="ตวรจสอบ"

      }


    }else if (tex =="2"){
      if (this.ckland == true) {

        this.sta="Paid"
        this.title="Paid"
       
    
      } else {
       this.sta="สถานะ ชำระเงินแล้ว"
       this.title="ชำระเงินแล้ว"

      }

    }else if (tex =="3"){
      if (this.ckland == true) {

        this.sta="status to ship"
        this.title="To Ship"
   
    
      } else {
       this.sta="สถานะ รอการจัดส่ง"
       this.title="รอการจัดส่ง"
   

      }
      

    }else if (tex =="4"){
      if (this.ckland == true) {

      
        this.sta="status cancel"
        this.title="To Receive"
    
      } else {
        this.sta="สถานะ ยกเลิก"
        this.title="ยกเลิกสินค้า"
     

      }
    }

    console.log("null",this.title)




    this.navCtrl.push(HistorycodePage, { code_id: code_id ,tex:tex, sta:this.sta,ti_ti:this.title})


  }


}
