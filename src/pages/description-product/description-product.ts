import {
  Component, ViewChild, ElementRef, OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, App } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import leaflet from 'leaflet';  //map
import * as moment from 'moment' //date-time checker


import { AddcartProvider } from '../../providers/addcart/addcart';
import { CartproductPage } from '../cartproduct/cartproduct';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';



@IonicPage()
@Component({
  selector: 'page-description-product',
  templateUrl: 'description-product.html',
})
export class DescriptionProductPage {

  counter = 0;
  name = '';
  cart: any = [];
  items1 = [];
  public form: FormGroup;
  public items: any = [];
  public keys: boolean = false;
  public img1;
  public name_product;
  public img2;
  public img3;
  public price_product;
  public total_dis;
  public tel;
  public dis;
  public sumdis;
  public description;
  public baseUrl: any = "https://adminshop.kwanpat.com";
  public currentNumber = 0;
  public numitems = 0;
  public status_p: any;  //type of room
  public status_c: any;
  public total_cost: any;
  public num_product: any = [];
  public datacart: any = [];
  public datacart2: any = [];
  public User_email: any = "";
  public id_product_re = [];

  public text_des: string = "";
  public text_More: string = "";
  public text_qty: string = "";
  public text_netAmount: string = "";
  public btn_addtocart: string = "";
  public alert_select:string="";
  public alert_add:string="";
  public alert_addupdate:string="";
  public alert_Confirm:string="";
  public alert_OK:string="";
  cklan :boolean;
  instock:string="";
  Weight:string="";
  Weightg:string="";
   likepro :boolean= false;
   private fakeusesr: Array<any> = new Array (1);





  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http, public NP: NavParams,
    public fb: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController,
    private addCart: AddcartProvider, private app: App, public storage: Storage, private _translate: TranslateService) {

    this.storage.get('session_storage').then((res) => {

      // console.log("THANKS ++ EVERYTHING", res);
      this.User_email = res;
      console.log("come on email", this.User_email);
      this.selectdatacheck(this.User_email)

    });

    this.form = fb.group({

      "status_p": ["", Validators.required],
      "status_c": ["", Validators.required]

    });

    // this.storage.get('like1').then((val) => {
    //   console.log('Your age is', val);
    //   this. likepro = val;
    // });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionProductPage');
    this.id_product_re = this.navParams.get('id_product_re');
    console.log("มาแล้ว");
    console.log(this.id_product_re);
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_product_dita.php?id_product_re=' + this.id_product_re)
      .map(res => res.json()).subscribe(data1 => {
        this.datacart = data1;

      });

    this.storage.get('lang').then((ress) => {
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);
      if(ress == "en"){
        this.cklan = true;

      }else{
        this.cklan = false;
      }

    })
    this._initialiseTranslation();
  }

  _initialiseTranslation() {
    setTimeout(() => {

      this.text_des = this._translate.instant("home.text_des");
      this. text_More = this._translate.instant("home.text_More");
      this. text_qty = this._translate.instant("home.text_qty");
      this. text_netAmount = this._translate.instant("home.text_netAmount");
      this. btn_addtocart = this._translate.instant("home.btn_addtocart");
      this. alert_select = this._translate.instant("home.alert_select");
      this. alert_add = this._translate.instant("home.alert_add");
      this. alert_addupdate = this._translate.instant("home.alert_addupdate");
      this. alert_Confirm = this._translate.instant("home.alert_Confirm");
      this. alert_OK = this._translate.instant("home.alert_OK");
      this. Weight = this._translate.instant("home.Weight");
      this. instock = this._translate.instant("home.instock");
      this. Weightg = this._translate.instant("home.Weightg");





    }, 25);
  }

  selectdatacheck(User_email) {
    console.log("......", User_email);
    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking.php?booking_email=' + User_email)
      .map(res => res.json()).subscribe(data2 => {
        this.datacart2 = data2;

      });
  }

  gotohome() {
    this.navCtrl.push(TabsPage);
  }
  book(dis: string, price: string, id_product_re: string) {



    console.log(this.datacart2);
    console.log("......", this.User_email);
    let status_c: string = this.form.controls['status_c'].value
    if (status_c == null) {
      const alert = this.alertCtrl.create({

        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',
        subTitle: this.alert_select,
        buttons: [this. alert_OK ],
        cssClass: 'custom-alert'

      });
      alert.present();
    }
    else {

      for (var i = 0; i < this.datacart2.length; i++) {
        console.log("this", this.datacart2[i].id_product_re);
        if (this.datacart2[i].id_product_re == id_product_re) {

          console.log("ใช่", i);
          this.keys = true;

        }
      }

      this.price_product = price;
      this.sumdis = dis;
      this.total_dis = this.price_product - this.sumdis;

      if (this.keys == true) {

        console.log("Update");



        console.log("Text_num", this.price_product, "", id_product_re, "", this.total_dis, this.User_email, "num", status_c);

        let body: String = "id_product_re=" + id_product_re + "&booking_email=" + this.User_email + "&booking_count=" + status_c + "&booking_price=" + this.total_dis,
          type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ 'Content-Type': type }),
          option: any = new RequestOptions({ headers: headers }),
          url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_update_product_.php';
        this.https.post(url, body, option)
          .map(res => res.json())
          .subscribe((data) => {

          });
        const alert = this.alertCtrl.create({
          message: '<img src = "assets/imgs/add.png" >',
          subTitle: this.alert_addupdate,
          buttons: [this.alert_OK],
          cssClass: 'custom-alert'
        });
        alert.present();
        console.log("Username", this.User_email);

      }
      else if (this.keys == false) {
        console.log("insert");

        console.log("Text_num", this.price_product, "", id_product_re, "", this.total_dis, this.User_email, "num", status_c);

        let body: String = "id_product_re=" + id_product_re + "&booking_email=" + this.User_email + "&booking_count=" + status_c + "&booking_price=" + this.total_dis,
          type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ 'Content-Type': type }),
          option: any = new RequestOptions({ headers: headers }),
          url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_product.php';
        this.https.post(url, body, option)
          .map(res => res.json())
          .subscribe((data) => {

          });


        const alert = this.alertCtrl.create({
          message: '<img src = "assets/imgs/add.png" >',
          subTitle: this.alert_add,
          buttons: [
            {
              text: this.alert_OK,
              role: this.alert_OK,
              cssClass: 'custom-alertbutton',
              handler: () => {
                this.selectdatacheck(this.User_email)

              }
            }
          ]

          ,
          cssClass: 'custom-alert'
        });




        alert.present();
        console.log("Username", this.User_email);

      }
    }
    // this.addToCart(id );
  }



  ngOnInit() {
    this.items1 = this.addCart.getProducts();

    this.cart = this.addCart.getCart();
  }
  addToCart(product) {

    this.addCart.addProduct(product);

  }
  openCart(cart: string, status_c: string) {
    // console.log("open นะ");
    this.navCtrl.push(CartproductPage, { cart: cart, status_c: status_c });
    // this.navCtrl.push(CartproductPage,[ this.cart]);

  }

  like(id:string){
    this. likepro = true;

    console.log("like1",id)
    this.storage.set('like1', true);

    let body: String = "id_favorites=" + id + "&user_favorites=" + this.User_email,
    type: string = "application/x-www-form-urlencoded; charset = UTF-8",
    headers: any = new Headers({ 'Content-Type': type }),
    option: any = new RequestOptions({ headers: headers }),
    url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/like.php';
  this.https.post(url, body, option)
    .map(res => res.json())
    .subscribe((data) => {

    });

  }
  like1(id:string){
    this. likepro = false;
    console.log("like0",id)
    this.storage.set('like1', false);
    this.storage.set('like1', true);

    let body: String = "id_favorites=" + id + "&user_favorites=" + this.User_email,
    type: string = "application/x-www-form-urlencoded; charset = UTF-8",
    headers: any = new Headers({ 'Content-Type': type }),
    option: any = new RequestOptions({ headers: headers }),
    url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/like_update.php';
  this.https.post(url, body, option)
    .map(res => res.json())
    .subscribe((data) => {

    });

  }
 







}
