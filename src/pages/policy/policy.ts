import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

import { YourServiceProvider } from '../../providers/your-service/your-service';
import { AddcartProvider } from '../../providers/addcart/addcart';
import { Storage } from '@ionic/storage';
import { CartproductPage } from '../cartproduct/cartproduct';
import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { DescriptionProductPage } from '../description-product/description-product';

/**
 * Generated class for the PolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policy',
  templateUrl: 'policy.html',
})
export class PolicyPage {

  public prodect2: any[];
  private baseUrl: any = "https://adminshop.kwanpat.com";
  // public prodect2:object[];
  public keyword: any;
  public rows: any;
  public id_category_product: any = [];
  obj: any = "";
  public id: any = [];
  ID: any = "";
  public price: any = "";
  public User_email: any = [];
  public num: any = 1;
  total: number = 1;
  sum_total: number = 0;
  public SUM: any;
  public SUM_To: any = [];
  tab: any;
  count: number = 0;
  public datacart2: any = [];
  public keys: boolean = false;
  public price_product;
  public sumdis;
  public total_dis;
  public status_c: number = 1;
  cklan: boolean;
  public text_search: string = "";
  public Product_type: string = "";

  public alert_add: string = "";
  public alert_addupdate: string = "";
  public alert_Confirm: string = "";
  public alert_OK: string = "";
  public thisnum: number = 1;
  public ckicon: any = [];
  public ck_icon: any;
  keyscount: boolean;
  tnum = 0
  items: any = [];
  search:any="";
  title_text:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http, public alertCtrl: AlertController,
    private addCart: AddcartProvider, public storage: Storage, private _translate: TranslateService, public toastCtrl: ToastController) {

    this.storage.get('session_storage').then((res) => {

      console.log("User", res);
      this.User_email = res;
      this.selectdatacheck(this.User_email);
      this.selectdatacheckicon(this.User_email);

    });
    this.showproductgroup1_data();
  }

  getItems(ev: any) {



    const val = ev.target.value;

    console.log(val);

    if (val && val.trim() != '') {
      this.prodect2 = this.prodect2.filter((items) => {
        return (items.name_product.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.showproductgroup1_data()
    }

  }
  getItemsEng(ev: any){
    const val = ev.target.value;

    console.log(val);

    if (val && val.trim() != '') {
      this.prodect2 = this.prodect2.filter((items) => {
        return (items.name_product_en.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.showproductgroup1_data()
    }

  }



  ionViewDidLoad() {

    this.storage.get('lang').then((ress) => {
      console.log("Loss", ress);
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);
      this._initialiseTranslation();
      if (ress == "en") {
        this.cklan = true;

        this.alert_add = "Add To Cart"
        this.search="Search..."

      } else {
        this.cklan = false;
        this.alert_add = "เพิ่มในตะกร้าสินค้า"
        this.search="ค้นหา..."
      }

    })

   

    console.log('ionViewDidLoad ListProduct1Page');
    this.id_category_product = this.navParams.get('id_cate');
    this.title_text = this.navParams.get('title_text');
    // console.log("id_category_product", this.id_category_product);
    this.showproductgroup1_data();

  }

  _initialiseTranslation() {
    setTimeout(() => {


      this.text_search = this._translate.instant("home.text_search");
      this.Product_type = this._translate.instant("home.Product_type");

      // this. alert_add = this._translate.instant("home.alert_add");
      this.alert_addupdate = this._translate.instant("home.alert_addupdate");
      this.alert_Confirm = this._translate.instant("home.alert_Confirm");
      this.alert_OK = this._translate.instant("home.alert_OK");


    }, 250);
  }

  showproductgroup1_data() {
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_product_readmore.php?id=' + this.id_category_product)
      .map(res => res.json())
      .subscribe(data => {
        this.prodect2 = data;
        console.log(this.prodect2);
        // this.rows = Array.from(Array(Math.ceil(data.length / 2)).keys());
      },
        error => console.log(error));
  }
  // setFilterItems() {
  //   this.https.get('http://student.crru.ac.th/591463065/SmartFarm/booking/select_list_search01.php?keyword=' + this.keyword)
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       this.prodect2 = data;
  //     });
  // }

  ngOnInit() {
    this.addCart.getProducts();
    this.id = this.addCart.getCart();
    console.log("this=>", this.id);
  }


  openCart(cart: string) {
    this.navCtrl.push(CartproductPage, { cart: cart });
  }

  addToCart(product: string) {

    this.addCart.addProduct(product);

    this.count = this.count + 1;


    for (this.obj of this.id) {
      this.obj.id_product_re;

    }
    this.ID = this.obj.dis;
    console.log("????DIS", this.ID);
    console.log(this.price = this.obj.price_product - this.obj.dis);

    let id_product_re: String = this.obj.id_product_re,
      booking_email: String = this.User_email,
      booking_count: String = this.num,
      booking_price: String = this.price;

    let body: String = "id_product_re=" + id_product_re + "&booking_email=" + booking_email + "&booking_count=" + booking_count + "&booking_price=" + booking_price,
      type: string = "application/x-www-form-urlencoded; charset = UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_product.php';
    this.https.post(url, body, option)
      .map(res => res.json())
      .subscribe((data) => {


      });

  }
  ionViewWillEnter() {
    this.count = 0;

  }



  gotogroup() {

    this.navCtrl.setRoot(TabsPage, { tabIndex: 1 });

  }
  selectdatacheck(User_email) {
    console.log("......", User_email);
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking.php?booking_email=' + User_email)
      .map(res => res.json()).subscribe(data2 => {
        this.datacart2 = data2;
        console.log(this.datacart2);

      });
  }
  ionViewDidEnter() {
    this.selectdatacheckicon(this.User_email)
    this.count = 0;
  }
  selectdatacheckicon(User_email) {
    console.log("......", User_email);
    this.https
      .get(
        "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking_joinpro.php?booking_email=" +
        User_email
      )
      .map((res) => res.json())
      .subscribe((dataicon) => {
        this.ckicon = dataicon;
        for (var iii = 0; iii < this.ckicon.length; iii++) {
          if (this.ckicon[iii].id_product_re != null) {
            // console.log("III",this.ckicon.length - 1)

            //  this.tnum = this.ckicon.length  ;
            //  console.log( "kk" , this.ckicon.length ,iii )
            if (this.ckicon.length > iii) {
              this.tnum = this.ckicon.length - 1;
              console.log("kk2", this.tnum, iii)

            }



          }


        }

        // if(this.ckicon[ii].id_product_re != 0 ){
        //   this.tnum=this.num +1;
        //   console.log("OOO",this.tnum)
        // }
      });
    return this.tnum
  }

  book(dis: string, price: string, id_product_re: string) {

    this.keys = false;

    console.log(this.datacart2);
    console.log("......", this.User_email);
    this.keys = false;
    this.keyscount = false;

    console.log(this.datacart2);
    console.log("......", this.User_email);
    // this.addCart.addProduct(product);
    // this.addCart.increaseByOne();
    //เช็ดตัวเลขใน ตระสินค้าซ้ำ
    this.ckicon
    for (var ii = 0; ii < this.ckicon.length; ii++) {

      //  this.ck_icon = itemck.status_ck;
      // console.log("CAERT", this.ckicon[ii].id_product_re);
      // console.log("CAERT", this.ckicon.length);

      if (id_product_re == this.ckicon[ii].id_product_re) {
        //เช็ด เพิ่มตัวเลข ถ้ามีสินค้าอยู่แล้ว ก้ไม่ต้องเพิ่ม
        //  this.count = this.count + 1;
        //  console.log("COUNT", this.count);
        this.keyscount = true;

        console.log("OK",);

      }
    }

    if (this.keyscount != true) {
      this.count = this.count + 1;
      console.log("COUNT", this.count);
      // this.selectdatacheckicon(this.User_email)
    }


    if (id_product_re == null) {

    }
    else {



      for (var i = 0; i < this.datacart2.length; i++) {


        console.log("this", this.datacart2[i].id_product_re);

        if (id_product_re == this.datacart2[i].id_product_re) {

          console.log("ใช่", i);
          this.keys = true;

        }
        console.log("*********", i)
      }


      this.price_product = price;
      this.sumdis = dis;
      this.total_dis = this.price_product - this.sumdis;


      if (this.keys == true) {

        console.log("Update");
        console.log("Text_num", this.price_product, "", id_product_re, "", this.total_dis, this.User_email, "num", this.thisnum);

        let body: String = "id_product_re=" + id_product_re + "&booking_email=" + this.User_email + "&booking_count=" + this.thisnum + "&booking_price=" + this.total_dis,
          type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ 'Content-Type': type }),
          option: any = new RequestOptions({ headers: headers }),
          url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_update_product_.php';
        this.https.post(url, body, option)
          .map(res => res.json())
          .subscribe((data) => {

          });
        const toast = this.toastCtrl.create({
          message: this.alert_add,
          duration: 3000
        });
        toast.present();
        // const toast = this.toastCtrl.create({
        //   message:this.alert_add,
        //   duration: 3000
        // });
        // toast.present();

        console.log("Username", this.User_email);

      }
      else if (this.keys == false) {
        console.log("insert");

        console.log("Text_num", this.price_product, "", id_product_re, "", this.total_dis, this.User_email, "num", this.thisnum);

        let body: String = "id_product_re=" + id_product_re + "&booking_email=" + this.User_email + "&booking_count=" + this.thisnum + "&booking_price=" + this.total_dis,
          type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ 'Content-Type': type }),
          option: any = new RequestOptions({ headers: headers }),
          url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_product.php';
        this.https.post(url, body, option)
          .map(res => res.json())
          .subscribe((data) => {

          });



        // const alert = this.alertCtrl.create({
        //   message: '<img src = "assets/imgs/add.png" >',
        //   subTitle: this.alert_add,
        //   buttons: [
        //     {
        //       text: this.alert_OK,
        //       role: this.alert_OK,
        //       cssClass: 'custom-alertbutton',
        //       handler: () => {
        //         this.selectdatacheck(this.User_email)

        //       }
        //     }
        //   ]

        //   ,
        //   cssClass: 'custom-alert'
        // });
        this.selectdatacheck(this.User_email);
        const toast = this.toastCtrl.create({
          message: this.alert_add,
          duration: 3000
        });
        toast.present();

        // alert.present();
        this.User_email
      }




      // alert.present();
      console.log("Username", this.User_email);

    }
  }
  pushto_dasition(id_product_re: string) {
    this.navCtrl.push(DescriptionProductPage, { id_product_re: id_product_re })

  }



}
