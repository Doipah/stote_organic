import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Platform, AlertController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-reportcustomer-buy',
  templateUrl: 'reportcustomer-buy.html',
})
export class ReportcustomerBuyPage {
  public data: any = [];
  public one_user_buy: any = [];
  public one_user1: any = [];
  public sum_total: any = [];
  public sum_booking_count: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public fb: FormBuilder, public printer: Printer, 
    public platform: Platform, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportcustomerBuyPage');
    this.data = this.navParams.get('item');
    console.log("มาแล้ว");
    console.log(this.data);
    this.http.get('http://student.crru.ac.th/591463046/SmartFarm/AIP_PLANT/get_user_buy_report.php?booking_email=' + this.data)
    .map(res => res.json()).subscribe(data1 => {
      this.one_user_buy = data1;

    });
    this.data = this.navParams.get('item');
    console.log("มาแล้ว");
    console.log(this.data);
    this.http.get('http://student.crru.ac.th/591463046/SmartFarm/AIP_PLANT/get_sum_user_one_report.php?booking_email=' + this.data)
    .map(res => res.json()).subscribe(data2 => {
      this.one_user1 = data2;

      for (let Item of this.one_user1) {

        this.sum_total = Item.sum_total;
        this.sum_booking_count = Item.sum_booking_count;


      }
    });
  }
  // print() {
  //   this.data = this.navParams.get('item');

  //   this.platform.ready().then(success => {
  //     this.printer.print('http://student.crru.ac.th/591463046/SmartFarm/AIP_PLANT/get_user_one_report_html.php?booking_email='+this.data).then( data => {
  //       this.showAlert('Print', data);
  //     }, error => {
  //       this.showAlert('Print Failed', error);
  //     });
  //   },
  //     error => {
  //       this.showAlert('Platform Not Ready', error);
  //     });
  //     console.log(this.data);
  // }
  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: JSON.stringify(message),
      buttons: ['OK']
    });
    alert.present();

  }
}
