import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { HistoresPage } from '../histores/histores';
import { HistoryOrderDetailPage } from '../history-order-detail/history-order-detail';
import { HistoryorderPage } from '../historyorder/historyorder';

/**
 * Generated class for the EtrackingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etrackings',
  templateUrl: 'etrackings.html',
})
export class EtrackingsPage {

  favorites
  result2
  booking_email1
  code_id: any;
  name_delivery
  code_delivery
  link_delivery

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private https: Http,
    private storage: Storage) {
    this.storage.get('session_storage').then((booking) => {

      this.booking_email1 = booking;

      this.getdata_favorites();

      // this.comfrim();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtrackingsPage');
    this.code_id = this.navParams.get('code');
    console.log("code", this.code_id);
  }
  test() {
    this.iab.create("https://www.google.co.th", "_blank");
  }
  test1() {
    this.iab.create(
      "https://line.me/R/ti/p/%40208ljxrl",
      "_system"
    );
  }
  getdata_favorites() {
    this.https.get(' https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_EEEEr.php?code_id=' + this.code_id)
      .map(res => res.json())
      .subscribe(data => {
        this.favorites = data;
        console.log(this.favorites.length)
        console.log(this.favorites)

        this.favorites = data;
        for (let ite of this.favorites) {
          // console.log("4444,",ite.user_buy_time)

          this.name_delivery = ite.name_etraking
          this.code_delivery = ite.code_etracking
          this.link_delivery = ite.link_etraking



        }

      });

  }
  link_onclick() {
    this.iab.create(this.link_delivery, "_blank");

  }

  comfrim() {

    let alert = this.alertCtrl.create({
      message: '<img src = "assets/imgs/exclamation-mark.png" >',
      subTitle: 'คุณได้รับสินค้าแล้วใช่ไหม',
      cssClass: 'custom-alertout',
      buttons: [
        {
          text: 'ใช่',
          role: 'ใช่',
          cssClass: 'custom-alertbutton',
          handler: () => {
            this.comfrim_API();
            // this.app.getRootNav().setRoot(LoginedPage);
          }
        },
        {
          text: 'ไม่',
          cssClass: 'custom-alertbuttonc',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();


  }

  comfrim_API() {
    let body: String = "code=" + this.code_id,

      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/Update_order_susscess_user.php";
    this.https.post(url, body, option).subscribe((data) => {
      if (data.status === 200) {

        this.navCtrl.push(HistoryorderPage, {});

      }

    })
  }
}
