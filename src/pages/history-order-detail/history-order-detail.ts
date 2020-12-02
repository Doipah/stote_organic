import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ShowproductPage } from '../showproduct/showproduct';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the HistoryOrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-order-detail',
  templateUrl: 'history-order-detail.html',
})
export class HistoryOrderDetailPage {
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
  name_delivery:any;
  code_delivery:any;
  datebuy:any=""
  orderlist:any="";
  namepro:any="";
  amountname:any="";
  pricename:any=""
  address2:any=""
  name_pro
  name_dis 
  name_sub 
  name_zip
  num_tel
  name_s 
  n_code
  name_re_user



  constructor(public alertCtrl:AlertController, public navCtrl: NavController, 
    public navParams: NavParams, public https: Http, public storage: Storage, public toastCtrl: ToastController) {
  }


  
  ionViewDidLoad(position: string) {

    console.log('ionViewDidLoad HistoryOrderDetailPage');

    this.storage.get('lang').then((ress) => {
      // this._translate.setDefaultLang(ress);
      // this._translate.use(ress);
      if (ress == "en") {

        this.ckland = true;
        this.plZ = "Please pay within 24 hours."
        this.datebuy=" Order date"
        this.orderlist="Order List"
        this.namepro="Name Product"
        this.amountname="Amount"
        this.pricename="Price"
        this.address2="Address"
        this.name_pro="Provinces"
        this.name_dis ="Districts"
        this.name_sub ="Subdistricts"
        this.name_zip="Postal code "
        this.num_tel="Phone number"
        this.name_s ="Shipping by"
        this.n_code="Code"
        this.name_re_user="Uername"
      
        // this.tabs1 = ['to pay', 'paid', 'to ship', 'to receive'];

      } else {
        this.ckland = false;
        // this.tabs1 = ['รอชำระเงิน', 'ชำระเงินแล้ว', 'เตรียมจัดส่ง', 'ยกเลิกสินค้า'];
       this.address2="ที่อยู่จัดส่ง"
        this.plZ = "กรุณาชำระเงินภายใน 24 ชม."
        this.datebuy="วันที่สั่งซื้อ"
        this.orderlist="รายการสั่งซื้อ"
        this.namepro="ชื่อสินค้า"
        this.amountname="จำนวน"
        this.pricename="ราคา"
        this.address2="ที่อยู่จัดส่ง"
        this.name_pro="จังหวัด"
        this.name_dis ="อำเภอ"
        this.name_sub ="ตำบล"
        this.name_zip="รหัสไปรษณีย์ "
        this.num_tel="เบอร์โทรติดต่อ"
        this.name_s ="จัดส่งโดย"
        this.n_code="รหัส"
        this.name_re_user="ชื่อผู้รับ"

      }

      // const toast = this.toastCtrl.create({
      //   message: this.plZ,
      //   duration: 3000,
      //   position: "top",
      //   cssClass: 'css_color',

      // });
      // toast.present();


    })
    console.log('ionViewDidLoad HistoresListcodePage');
    this.code_id = this.navParams.get('code_id');

    console.log("COde", this.code_id)
    // https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_order_code.php?id_code=
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_history_order.php?code_id=' + this.code_id)
      .map(res => res.json()).subscribe(data1 => {
        this.result = data1;
        console.log("data", this.result)
   
        

        // this.result1 = this.result.map(item => item.user_buy_time);

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
          this.name_delivery= ite.name_etraking
          this.code_delivery =   ite.code_etracking    
                       
                      
                       
                       
                      
                       

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
