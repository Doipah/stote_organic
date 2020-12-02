import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, Platform } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

import { MyaddPage } from '../myadd/myadd';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { Reportcustomer1Page } from '../reportcustomer1/reportcustomer1';
import { Storage } from '@ionic/storage';
import { ReportCustomerPage } from '../report-customer/report-customer';
import { ThrowStmt } from '@angular/compiler';
import { CreateaddressPage } from '../createaddress/createaddress';




@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  edit: boolean = false;
  public hotel_list: any = [];
  public data_res: any = [];
  public selectDatares: any = [];
  public data_name: any = [];
  user_email: any = [];
  id: any = [];
  contry: any = [];
  ampor: any = [];
  tabon: any = [];
  address: any = [];
  user_name_buy: any = [];
  tel: any = [];
  code_postman: any = [];
  districts
  dataampor
  cities
  selectedDistricts
  dataets
  selectedAmpor
  show_edit
  cklan: boolean
  public form: FormGroup;
  OK: string = ""
  sum_total
  code_buy
  sucess:any="";
  fail :any="";
  name:any="";
  ZIP:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public alertCtrl: AlertController, public fb: FormBuilder, public printer: Printer,
    public platform: Platform, private storage: Storage, public https: Http) {
    this.form = fb.group({

      'user_name_buy': ["", Validators.required],
      'contry': ["", Validators.required],
      'ampor': ["", Validators.required],
      'tabon': ["", Validators.required],
      'address': ["", Validators.required],
      'tel': ["", Validators.required],

      'code_postman': [""]
    });

    this.initializeDistrict();
    this.initializeCity();
    this.initializeCity2();

  }
  ngOnInit() {
    this.storage.get('session_storage').then((booking_email) => {
      console.log("User", booking_email);
      this.user_email = booking_email;
    });
    // this.sum_total = this.navParams.get('total');
    // this.code_buy = this.navParams.get('code_buy');
    // console.log('ionViewDidLoad ข้อมูลต้องการสั่งซื้อ', this.sum_total,"CODE",this.code_buy);

    this.id = this.navParams.get('id')
    this.user_email = this.navParams.get('user_email')
    this.user_name_buy = this.navParams.get('user_name_buy')
    this.contry = this.navParams.get('contry')
    this.ampor = this.navParams.get('ampor')
    this.tabon = this.navParams.get('tabon')
    this.address = this.navParams.get('address')
    this.tel = this.navParams.get('tel')
    this.code_postman = this.navParams.get('code_postman')
    // contry:contry,ampor:ampor,tabon:tabon,address:address,tel:tel,code_postman:code
    console.log("IDID", this.tabon);
    console.log("IDID", this.address);
    console.log("IDID", this.user_name_buy);



  }

  ionViewDidLoad() {
    this.sum_total = this.navParams.get('total');
    this.code_buy = this.navParams.get('code_buy');
    // this.code_buy = this.navParams.get('id_add');
    console.log('ionViewDidLoad ข้อมูลลูกค้า', this.sum_total, this.code_buy, this.id);

    this.storage.get('lang').then((ress) => {
      console.log("Loss", ress);


      if (ress == "en") {
       

        this.cklan = true;
        this.show_edit = "Please enter information"
        this.OK = "OK"
        this.sucess="Success"
        this.fail="Fail"
        this.name="username"

      } else {
        this.cklan = false;
        this.show_edit = "กรุณากรอกข้อมูลให้ครบถ้วน"
        this.OK = "ตกลง"
        this.sucess="เรียบร้อย"
        this.fail="ล้มเหลว"
        this.name="ชื่อ-นามสกุล"
      }

    })


  }
  //แสดงที่อยู่ประเทศ
  initializeDistrict() {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_provinces.php')
      .map(res => res.json())
      .subscribe(data => {
        this.districts = data;
      });

  }
  initializeCity() {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_districts.php')
      .map(res => res.json())
      .subscribe(data => {
        this.dataampor = data;
      });

  }
  initializeCity2() {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_subdistricts.php')
      .map(res => res.json())
      .subscribe(data => {
        this.cities = data;
      });

  }
  //input จังหวัด
  setDistrictValues(contry) {

    console.log("test", contry);

    this.selectedDistricts = this.dataampor.filter(ampor => ampor.province_id == contry)
    console.log(this.selectedDistricts);
  }
  // input อำเภอ

  setAmporValues(sprovince) {
    console.log("sprovince");
    console.log(sprovince);

    this.selectedAmpor = this.cities.filter(Ampor => Ampor.district_id == sprovince);

    console.log(this.selectedAmpor)
    console.log(this.cities)
    for(let itemme of this.selectedAmpor){
      this.ZIP =itemme.zip_code

    }


  }
  edit_add_adddress() {
    this.user_email
    // this.id = this.navParams.get('id')
    console.log("gggg", this.id)
    let user_name_buy: string = this.form.controls["user_name_buy"].value,
      contry: string = this.form.controls["contry"].value,
      ampor: string = this.form.controls["ampor"].value,
      tabon: string = this.form.controls["tabon"].value,
      address: string = this.form.controls["address"].value,
      tel: string = this.form.controls["tel"].value,
      code_postman = this.ZIP



    if (user_name_buy != null && contry != null && ampor != "" && tabon != "" && address != null && tel != null && code_postman != null) {
      let body: string = "id_address=" + this.id + "&user_email=" + this.user_email + "&user_name_buy=" + user_name_buy + "&contry=" + contry + "&ampor=" + ampor + "&tabon=" + tabon + "&address=" + address +
        "&tel=" + tel + "&code_postman=" + code_postman,
        type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/user_buy_address_update.php";
      this.https.post(url, body, option)
        .map(res => res.json())
        .subscribe((data1) => {
          for (this.dataets of data1) {
            console.log(this.dataets.user_email);
          }
          if (data1 == true) {

            const alert = this.alertCtrl.create({

              message: '<img src = "assets/imgs/success.png" >',

              subTitle: this.sucess,
              buttons: [this.OK],
              cssClass: 'custom-alert'

            });
            alert.present();
            this.navCtrl.push(ReportCustomerPage, { total: this.sum_total, code_buy: this.code_buy, idadd: this.id });
            //  this.navCtrl.setRoot(ReportCustomerPage);

          } else {
            const alert = this.alertCtrl.create({

              message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

              subTitle: "OK",
              buttons: [this.OK],
              cssClass: 'custom-alert01'

            });
            alert.present();

          }
          console.log(data1);

        });
    } else {
      const alert = this.alertCtrl.create({

        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

        subTitle: this.show_edit,
        buttons: ["OK"],
        cssClass: 'custom-alert01'

      });
      alert.present();
    }

  }
  add_adddress() {
    this.user_email
    let user_name_buy: string = this.form.controls["user_name_buy"].value,
      contry: string = this.form.controls["contry"].value,
      ampor: string = this.form.controls["ampor"].value,
      tabon: string = this.form.controls["tabon"].value,
      address: string = this.form.controls["address"].value,
      tel: string = this.form.controls["tel"].value,

      code_postman: string = this.ZIP



    if (user_name_buy != null && contry != null && ampor != null && tabon != null && address != null && tel != null &&  code_postman != null) {
      let body: string = "user_email=" + this.user_email + "&user_name_buy=" + user_name_buy + "&contry=" + contry + "&ampor=" + ampor + "&tabon=" + tabon + "&address=" + address +
        "&tel=" + tel + "&code_postman=" + code_postman,
        type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/user_buy_adddress.php";
      this.https.post(url, body, option)
        .map(res => res.json())
        .subscribe((data1) => {
          for (this.dataets of data1) {
            console.log(this.dataets.user_email);
          }
          if (data1 == true) {

            const alert = this.alertCtrl.create({

              message: '<img src = "assets/imgs/success.png" >',

              subTitle: this.sucess,
              buttons: [this.OK],
              cssClass: 'custom-alert'

            });
            alert.present();

            this.navCtrl.push(CreateaddressPage, { total: this.sum_total, code_buy: this.code_buy });

          } else {
            const alert = this.alertCtrl.create({

              message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

              subTitle: this.fail,
              buttons: [this.OK],
              cssClass: 'custom-alert01'

            });
            alert.present();

          }
          console.log(data1);

        });
    } else {
      const alert = this.alertCtrl.create({

        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

        subTitle: this.show_edit,
        buttons: [this.OK],
        cssClass: 'custom-alert01'

      });
      alert.present();
    }

  }
}












