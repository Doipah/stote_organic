import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, Platform } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';


import { MyaddPage } from '../myadd/myadd';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { ReportcustomerBuyPage } from '../reportcustomer-buy/reportcustomer-buy';


@IonicPage()
@Component({
  selector: 'page-report-date-cumstomer',
  templateUrl: 'report-date-cumstomer.html',
})
export class ReportDateCumstomerPage {

  public data_date: any = [];
  public data_date1: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public alertCtrl: AlertController,  public fb: FormBuilder, public printer: Printer,
    public platform: Platform) {
    this.showdate();
    // this.showdate1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportDateCumstomerPage');
  }
  showdate() {
    this.http.get('http://student.crru.ac.th/591463046/SmartFarm/AIP_PLANT/select_date_search.php')
      .map(res => res.json())
      .subscribe(data => {
        this.data_date = data;
      });
  }

  // showdate1(){
  //   http://student.crru.ac.th/591463046/SmartFarm/booking/user_booking_list.php?booking_email=

  // }

  setDatadate(datadate) {
    console.log("sssssssss");
    console.log(datadate);

    // this.data_date1 = this.data_date1.filter(ampor => ampor.datadate == datadate)
    this.http.get(' http://student.crru.ac.th/591463046/SmartFarm/AIP_PLANT/select_alldate_search.php?data_date='+ datadate)

      .map(res => res.json())
      .subscribe(data => {
        this.data_date1 = data;
      });
  }
  report_customer(item) {
    console.log("item");
    console.log(item);

   this.navCtrl.push(ReportcustomerBuyPage,{item});

  }

}
