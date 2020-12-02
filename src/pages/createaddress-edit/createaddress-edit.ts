import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content, Slides, AlertController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { ReportPage } from '../report/report';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ReportCustomerPage } from '../report-customer/report-customer';

/**
 * Generated class for the CreateaddressEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createaddress-edit',
  templateUrl: 'createaddress-edit.html',
})
export class CreateaddressEditPage {
  user_address: any = [];
  dataitem: any = [];
  namec
  defaultSelectedRadio = "radio_2";
  sum_total: any;
  code_buy: any;

  id_add: any;
  cklan: boolean;

  ch_add: any = "";
  name:any="";
  tel:any="";
  add_ress:any="";
  postman:any="";
  new_address:any="";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup: any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem: any;
  ok:any="";
  cancel:any=""
  selectshop:any="";
  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http, private storage: Storage,
    public fb: FormBuilder, public alertCtrl: AlertController) {

    this.form = fb.group({
      'namec': [""],
    })
    this.dataitem = {
      idss: ""
    }

  }

  ionViewDidLoad() {

    this.sum_total = this.navParams.get('total');
    this.code_buy = this.navParams.get('code_buy');
    console.log('ionViewDidLoad ข้อมูลลูกค้า', this.sum_total, this.code_buy);

    this.showdataaddress()

 

    console.log('ionViewDidLoad CreateaddressPage');

    this.storage.get('lang').then((ress) => {

      if (ress == 'en') {
        this.cklan = true;

        this.ch_add="Address"
        this.name="Name"
        this.tel="Phone Number"
        this.add_ress="Address"
        this.postman=" postcode"
        this.new_address="Add address"
        this.selectshop="Do You want delete address?"
        this.ok="Ok"
        this.cancel="Cancel"

      } else {
        this.cklan = false;
        this.ch_add="เลือกที่อยู่จัดส่ง"
        this.name="ชื่อผู้รับ"
        this.tel="เบอร์โทร"
        this.add_ress="ที่อยู่"
        this.postman="รหัสไปรษณีย์"
        this.new_address="เพิ่มที่อยู่จัดส่ง"
        this.selectshop="คุณต้องการลบที่อยู่หรือไม่"
        this.ok="ตกลง"
        this.cancel="ยกเลิก"

      }

    })




  }

  showdataaddress(){

    this.storage.get('session_storage').then((booking_email) => {
    
      
    
    this.https.get(' https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_address_user.php?user_email=' + booking_email)
    .map(res => res.json())
    .subscribe(data => {
      this.user_address = data;

      console.log(this.user_address.length)

      console.log(data)
    })
  })
  }
  // add_address() {
  //   this.navCtrl.push(ReportPage, { total: this.sum_total, code_buy: this.code_buy });
  // }
  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail);
    this.selectedRadioGroup = event.detail;
  }

  radioFocus() {
    console.log("radioFocus");
  }
  delete(id) {
    let alert = this.alertCtrl.create({
      message: '<img src = "assets/imgs/exclamation-mark.png" >',
      subTitle: this.selectshop,
      cssClass: 'custom-alertout',
      buttons: [{
        text: this.ok,
        role: this.ok,
        handler: () => {

          this.cancel_booking(id);
        }
      }, {
        text: this.cancel,
        role: this.cancel,
        handler: () => {

        }
      }]
    });
    alert.present();
  }
  cancel_booking(id){

    let body: String = "id_address=" + id,

    type: string = "application/x-www-form-urlencoded; charset=UTF-8",
    headers: any = new Headers({ 'Content-Type': type }),
    option: any = new RequestOptions({ headers: headers }),
    url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_updete_address_user.php";
  this.https.post(url, body, option).subscribe((data) => { 
    // .subscribe((data) => {
      if (data.status === 200) {

        const alert = this.alertCtrl.create({
          message: '<img src = "assets/imgs/success.png" >',
          subTitle: 'เรียบร้อย',
          buttons: [
            {
              text: 'ตกลง',
              role: 'ตกลง',
              cssClass: 'custom-alertbutton',
            }
          ]

          ,
          cssClass: 'custom-alert1'
        });
        alert.present();
        this.showdataaddress()
      }
  })

 



  }
  // radioSelect(id: string) {

  //   console.log("radioSelect", id);

  //   this.id_add = id;


  //   // this.gotocomfirm(this.id_add)
  //   // this.selectedRadioItem = event.detail;
  // }
  // gotocomfirm() {

  //   console.log(this.id_add)
  //   if (this.id_add == null) {
  //     const alert = this.alertCtrl.create({

  //       message: '<img src="../../assets/imgs/map.png">',

  //       subTitle: this.selectshop,
  //       buttons: [this.ok],
  //       cssClass: 'custom-alert01'

  //     });
  //     alert.present();

  //   } else {
  //     this.navCtrl.push(ReportCustomerPage, { total: this.sum_total, code_buy: this.code_buy, idadd: this.id_add });

  //   }

  // }
  // radioBlur() {
  //   console.log("radioBlur");
  // }

}
