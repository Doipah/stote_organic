import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { PromptpayUploadPage } from '../promptpay-upload/promptpay-upload';
import {File} from '@ionic-native/file/ngx';
// import { Screenshot } from '@ionic-native/screenshot';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PromptPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prompt-pay',
  templateUrl: 'prompt-pay.html',
})
export class PromptPayPage {
  doc
  code
  user_order
  id_order
  total
  ckland :boolean;
  promptpay="";
  tranf:any="";
  house_t:any="";
  promptpaynoun :any="";
  bath:any="";
  amount:any="";
  Confirm:any="";
  tr_money:any="";
  ok:any="";
  one:any=""
  two:any=""
  three:any=""
  four:any=""

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage : Storage,
    public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromptPayPage');
    this.code = this.navParams.get('code');

    this.user_order = this.navParams.get('user_order');
    this.id_order = this.navParams.get('id_order');
    this.total = this.navParams.get('total');

    console.log("Total",this.total,this.code)


    
    this.storage.get('lang').then((ress) => {
      // this._translate.setDefaultLang(ress);
      // this._translate.use(ress);
      if (ress == "en") {

        this.ckland = true;
        // this.promptpay = "Please pay within 24 hours."
        this.tranf ="After the transferred money Please attach evidence and specify the time of transfer. To confirm the transfer";
      
        this.house_t="** Please pay within 24 hours **";
        // this.tabs1 = ['to pay', 'paid', 'to ship', 'to receive'];
        this.promptpaynoun="PromptPay";
        this.bath="Baht";
        this.amount="Amount to be paid";
        this.Confirm="Confirm transfer";

        this.tr_money ="How to transfer money";
        this.ok ="Ok";
        this.one ="1. Take screenshot with QRcode"
        this.two="2. Open the banking app"
        this.three ="3. Choose Scan to pay"
        this.four="4. Bring the money transfer receipt to confirm."

      } else {
        this.ckland = false;
        // this.tabs1 = ['รอชำระเงิน', 'ชำระเงินแล้ว', 'เตรียมจัดส่ง', 'ยกเลิกสินค้า'];
       
        // this.promptpay = "กรุณาชำระเงินภายใน 24 ชม.";
        this.tranf="หลังจากที่โอนเงินแล้ว กรุณาแนบหลักฐานและระบุเวลาที่ทำการโอนเงิน เพื่อยืนยันการโอนเงิน";
        this.house_t="** กรุณาชำระเงินภายใน 24 ชม.**";
        this.promptpaynoun="พร้อมเพย์";
        this.bath="บาท";
        this.amount="จำนวนเงินที่ต้องชำระ";
        this.Confirm="ยืนยันการโอนเงิน"
        this.tr_money ="วิธีการโอนเงิน"
        this.ok="ตกลง"
        this.one="1. ให้แคปหน้าจอที่มีคิวอาร์โค้ด"
        this.two="2. เปิดแอปธนาคาร"
        this.three="3. เลือกสแกนจ่าย"
        this.four="4. นำใบเสร็จโอนเงินมายืนยัน"
      }
  })
}
  comfrim(){

    this.navCtrl.push(PromptpayUploadPage,{total:this.total , code:this.code});

  }
  shot(){
    // this.screenshot.save().then(()=>{
    //   alert("Save...");
    // })
   

  }
  howto(){
    const alert = this.alertCtrl.create({

      message: this.one+'<br>'+this.two+'</br>'+this.three+'</br>'+this.four,

      subTitle: this.tr_money,
      buttons: [this.ok],
      cssClass: 'custom-alertss'

    });
    alert.present();
    
  }

}
