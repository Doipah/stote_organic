import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ShowproductPage } from '../showproduct/showproduct';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-histores-listcode',
  templateUrl: 'histores-listcode.html',
})
export class HistoresListcodePage {


  public plZ = "";

  code_id;
  public data: any = [];
  public result: any = [];
  total: number = 0;
  ckland: boolean;
  result1:any;
  adress:any;
  sub:any;
  dis:any;
  pro:any;
  tel:any;
  use:any;
  zipcode:any;

  constructor(public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams, public https: Http, public storage: Storage, public toastCtrl: ToastController) {
  }

  ionViewDidLoad(position: string) {

    this.storage.get('lang').then((ress) => {
      // this._translate.setDefaultLang(ress);
      // this._translate.use(ress);
      if (ress == "en") {

        this.ckland = true;
        this.plZ = "Please pay within 24 hours."
      
        // this.tabs1 = ['to pay', 'paid', 'to ship', 'to receive'];

      } else {
        this.ckland = false;
        // this.tabs1 = ['รอชำระเงิน', 'ชำระเงินแล้ว', 'เตรียมจัดส่ง', 'ยกเลิกสินค้า'];
       
        this.plZ = "กรุณาชำระเงินภายใน 24 ชม."

      }

      const toast = this.toastCtrl.create({
        message: this.plZ,
        duration: 3000,
        position: "top",
        cssClass: 'css_color',

      });
      toast.present();


    })
    console.log('ionViewDidLoad HistoresListcodePage');
    this.code_id = this.navParams.get('code_id');

    console.log("COde", this.code_id)
  
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_order_code.php?code_id=' + this.code_id)
      .map(res => res.json()).subscribe(data1 => {
        this.result = data1;
        console.log("data", this.result)
   
        

       

        for (let ite of this.result){
          // console.log("4444,",ite.user_buy_time)
          this.result1 = ite.user_buy_time

          this.total = ite.total;

          this.adress=ite.address
          this.sub =ite.name_in_thai_sub
          this.dis = ite.name_in_thai_dis
          this.pro =ite.name_in_thai_pro
          this.tel = ite.tel
          this.use =  ite.user_name_buy
          this.zipcode= ite.zip_code        
                       
          console.log("TOTOL",this.total)

        }

      });
 

  }
  popup_address(){
    const alert = this.alertCtrl.create({

      message:'ชื่อผู้รับ :'+this.use+'<br>'+ 'เบอร์โทร :'+ this.tel+'<br>'+'ที่อยู่ :'+this.adress+'<br>'+ 'ตำบล :'+ this.sub+'<br>'+
      'อำเภอ :'+this.dis+'<br>'+'จังหวัด :'+this.pro+'<br>'+'รหัสไปรษณีย์ :'+this.zipcode,

      subTitle: "ที่อยู่จัดส่ง",
      buttons: ["ตกลง"],
      cssClass: 'custom-alertss'

    });
    alert.present();
    

  }

  choosepay(code: string, id_product_re: string, id_order: string, user_order: string, total: string) {
    console.log("OK", code, "TOYOL",this.total)
    this.navCtrl.push(ShowproductPage, { code: code, total: this.total })
  }



}
