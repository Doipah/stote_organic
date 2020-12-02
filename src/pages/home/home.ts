import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Platform,
  App,
  LoadingController,
  ToastController
} from "ionic-angular";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

import { ReportPage } from "../report/report";

import { DescriptionProductPage } from "../description-product/description-product";
import { AddcartProvider } from "../../providers/addcart/addcart";
import { CartproductPage } from "../cartproduct/cartproduct";
import { map } from "rxjs/operator/map";
import { Storage } from "@ionic/storage";
import { Slides } from "ionic-angular";
import { YourServiceProvider } from "../../providers/your-service/your-service";
// import { LocalNotifications } from "@ionic-native/local-notifications";
import { LanguageEnProvider } from "../../providers/language-en/language-en";
import { TranslateService } from "@ngx-translate/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ListProduct1Page } from "../list-product1/list-product1";
import { HomeLoadingPage } from "../home-loading/home-loading";
import { e } from "@angular/core/src/render3";
import { PolicyPage } from "../policy/policy";
// import { Push, PushObject, PushOptions } from "@ionic-native/push";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  // @ViewChild(AddcartProvider)

  cklan: boolean;
  public items: any = [];
  set_title: any = "";
  result: any = 0;
  public baseUrl: any = "https://adminshop.kwanpat.com/";

  private fakeusesr: Array<any> = new Array(5);
  public total_dis;
  public price_product;
  public sumdis;
  public data_nameproduct: any = [];
  public prodect1: any = 0;
  public prodect2: any = 0;
  public arr: any = [1, 2, 3, 4];
  public prodect3: any = 0;
  public discostas: any = [];
  public discost: number;
  cart = [];
  items1 = [];
  public User_email: any = "";
  public num: any = 1;
  public id: any = [];
  public id2: any = [];
  public menu: any = [];
  obj: any = "";
  ID: any = "";
  public SUM: any;
  numcount: number = 1;
  public corttast: any = [];
  public SUM_To: any = [];
  public dis: number;
  public price: any = "";
  public datacart2: any = "";
  total: number = 1;
  sum_total: number = 0;
  public tst: any = [];
  public img_bar = [];
  public img1: string;
  public img2: string;
  public img3: string;
  public img4: string;
  public img11: string;
  public img22: string;
  public img33: string;
  public img44: string;
  public sum_kk: any = [];
  public lose_num: any = [];
  public frist: any = [];
  count: number = 0;
  public text_sale: string = "";
  public text_new: string = "";
  public text_Recom: string = "";

  public text_search: string = "";
  likepro: boolean = false;

  public keys: boolean = false;
  public keyscount: boolean = false;
  public text_des: string = "";
  public text_More: string = "";
  public text_qty: string = "";
  public text_netAmount: string = "";
  public btn_addtocart: string = "";
  public alert_select: string = "";
  public alert_add: string = "";
  public alert_addupdate: string = "";
  public alert_Confirm: string = "";
  public alert_OK: string = "";
  public thisnum: number = 1;
  public ckicon: any = "";
  public tnum = 0;
  public ck_icon: any = "";
  public badge2: any = [];


  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public https: Http,
    public alertCrt: AlertController,
    public storage: Storage,
    private addCart: AddcartProvider,
    public YourService: YourServiceProvider,
    public platform: Platform,
    private app: App,
    private LanguageEn: LanguageEnProvider,
    private _translate: TranslateService,
    private iab: InAppBrowser,
    public loadingController: LoadingController,
    public toastCtrl: ToastController

  ) {
    this.storage.get("session_storage").then((res) => {

      this.User_email = res;
      this.selectdatacheck1(this.User_email);
      this.selectdatacheckicon(this.User_email);
    });

    this.showHotel_data();
    this.showHotel_data2();
    this.showHotel_data3();
    this.show_banner();

    this.showmenu();
    // this.showbadge();


  }



  test() {
    this.iab.create("https://www.google.co.th", "_blank");
  }
  test1() {
    this.iab.create(
      "https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Fsummary&state=",
      "_system"
    );
  }




  ngOnInit() {
    this.items1 = this.addCart.getProducts();
    this.cart = this.addCart.getCart();
    // this.id2 = this.addCart.getCart2();
    // this.navCtrl.push(DescriptionProductPage);

    console.log("BAD", this.cart)

  }
  ionViewDidEnter() {
    this.selectdatacheckicon(this.User_email)
    this.count = 0;
  }
  // ionViewDidLeave(){
  //   this.selectdatacheckicon(this.User_email)
  // }

  openCart(cart: string) {
    // this.navCtrl.push(CartproductPage, { cart: cart });
    // this.app.getRootNav().setRoot(CartproductPage, {});
    this.navCtrl.push(CartproductPage);
  }
  showHotel_data() {
    setTimeout(() => {
      this.https
        .get(
          "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_list01.php"
        )
        .map((res) => res.json())
        .subscribe((data) => {
          this.prodect1 = data;
        });
    }, 4000);
  }
  showHotel_data2() {
    setTimeout(() => {
      this.https
        .get(
          "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_list02.php"
        )
        .map((res) => res.json())
        .subscribe((data) => {
          // setTimeout(() => {
          this.prodect2 = data;
        });
    }, 4000);
    // }), 3000;
  }
  showHotel_data3() {
    setTimeout(() => {
      this.https
        .get(
          "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_list03.php"
        )
        .map((res) => res.json())
        .subscribe((data) => {
          this.prodect3 = data;

        });
    }, 4000);

    // setTimeout(() => {
    //

    // }, 3000);


  }

  show_banner() {
    setTimeout(() => {
      this.https
        .get(
          "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_banner.php"
        )
        .map((res) => res.json())
        .subscribe((data) => {
          this.img_bar = data;
          console.log("arr", this.arr);
          for (let item of this.img_bar) {
            this.img1 = item.img_baner1;
            this.img2 = item.img_baner2;
            this.img3 = item.img_baner3;
            this.img4 = item.img_baner4;
            this.get_name(this.img1, this.img2, this.img3, this.img4);
          }
        });
    }, 4000);
  }
  get_name(img1: string, img2: string, img3: string, img4: string) {
    this.img11 = img1;
    this.img22 = img2;
    this.img33 = img3;
    this.img44 = img4;
  }
  addToCart(product: string) {
    this.showAlert();
    this.addCart.addProduct(product);
    this.addCart.increaseByOne();
    this.count = this.count + 1;
    console.log("COUNT", this.count);

    for (this.obj of this.id) {
      this.obj.id_product_re;
    }
    this.ID = this.obj.dis;
    console.log("????DIS", this.ID);
    // console.log(this.dis = this.obj.price_product * this.obj.discount / 100);
    console.log((this.price = this.obj.price_product - this.obj.dis));

    let id_product_re: String = this.obj.id_product_re,
      booking_email: String = this.User_email,
      booking_count: String = this.num,
      booking_price: String = this.price;

    let body: String =
      "id_product_re=" +
      id_product_re +
      "&booking_email=" +
      booking_email +
      "&booking_count=" +
      booking_count +
      "&booking_price=" +
      booking_price,
      type: string = "application/x-www-form-urlencoded; charset = UTF-8",
      headers: any = new Headers({ "Content-Type": type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any =
        "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_product.php";
    this.https
      .post(url, body, option)
      .map((res) => res.json())
      .subscribe((data) => { });
  }

  presentAlert() {
    // this.localNotification.schedule({
    //   title: "My first notification",
    //   text: "Thats pretty easy...",
    //   foreground: true,
    // });
  }
  showAlert() {
    const alert = this.alertCrt.create({
      title: "เพิ่มสินค้า",
      subTitle: "เพิ่มลงในตระกร้าสินค้า",
      buttons: ["ตกลลง"],
    });
    alert.present();
  }
  pushto_dasition(
    id_product_re: string,
    img1: string,
    img2: string,
    img3: string,
    name_product: string,
    price_product: string,
    description: string,
    dis: string,
    num_product: string,
    email: string
  ) {
    this.navCtrl.push(DescriptionProductPage, {
      id_product_re: id_product_re,
      img1: img1,
      img2: img2,
      img3: img3,
      name_product: name_product,
      price_product: price_product,
      description: description,
      dis: dis,
      num_product: num_product,
    });
  }



  ionViewDidLoad() {
    console.log("ionViewDidLoad HOME......");

    //   this.languageEn.tet;
    //  console.log(this.languageEn.title);
    this.storage.get("lang").then((ress) => {
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);
      console.log("Loss", ress);
      if (ress == "en") {
        this.cklan = true;
        this.alert_add = "Add To Cart"
      } else {
        this.cklan = false;
        this.alert_add = "เพิ่มในตะกร้าสินค้า"
      }
    });
    this._initialiseTranslation();
  }

  _initialiseTranslation() {
    setTimeout(() => {

      this.text_search = this._translate.instant("home.text_search");
      this.text_sale = this._translate.instant("home.text_sale");
      this.text_new = this._translate.instant("home.text_new");
      this.text_Recom = this._translate.instant("home.text_Recom");

      this.text_des = this._translate.instant("home.text_des");
      this.text_More = this._translate.instant("home.text_More");
      this.text_qty = this._translate.instant("home.text_qty");
      this.text_netAmount = this._translate.instant("home.text_netAmount");
      this.btn_addtocart = this._translate.instant("home.btn_addtocart");
      this.alert_select = this._translate.instant("home.alert_select");
      this.alert_add = this._translate.instant("home.alert_add");
      this.alert_addupdate = this._translate.instant("home.alert_addupdate");
      this.alert_Confirm = this._translate.instant("home.alert_Confirm");
      this.alert_OK = this._translate.instant("home.alert_OK");
      // this. Weight = this._translate.instant("home.Weight");
      // this. instock = this._translate.instant("home.instock");
      // this. Weightg = this._translate.instant("home.Weightg");
    }, 25);
  }





  selectdatacheck1(User_email) {
    console.log("......", User_email);
    this.https
      .get(
        "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking.php?booking_email=" +
        User_email
      )
      .map((res) => res.json())
      .subscribe((data2) => {
        this.datacart2 = data2;
      });
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
  // like(id) {
  //   console.log("id",id);
  //   this.likepro = true;

  // }
  // liked(id) {
  //   console.log("id",id);
  //   this.likepro = false;

  // }
  // test(){
  //   https://www.youtube.com/watch?v=ZhO2LMVwqUo
  // }
  book(dis: string, price: string, id_product_re: string) {
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

    }





    if (id_product_re == null) {
    } else {
      for (var i = 0; i < this.datacart2.length; i++) {
        // this.keys = false;

        console.log("this", this.datacart2[i].id_product_re);

        if (id_product_re == this.datacart2[i].id_product_re) {

          console.log("ใช่", i);
          this.keys = true;
        }
        console.log("*********", i);
      }


      this.price_product = price;
      this.sumdis = dis;
      this.total_dis = this.price_product - this.sumdis;

      if (this.keys == true) {
        console.log("Update");
        console.log(
          "Text_num",
          this.price_product,
          "",
          id_product_re,
          "",
          this.total_dis,
          this.User_email,
          "num",
          this.thisnum
        );

        let body: String =
          "id_product_re=" +
          id_product_re +
          "&booking_email=" +
          this.User_email +
          "&booking_count=" +
          this.thisnum +
          "&booking_price=" +
          this.total_dis,
          type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ "Content-Type": type }),
          option: any = new RequestOptions({ headers: headers }),
          url: any =
            "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_update_product_.php";
        this.https
          .post(url, body, option)
          .map((res) => res.json())
          .subscribe((data) => { });
        // const alert = this.alertCrt.create({
        //   message: '<img src = "assets/imgs/add.png" >',
        //   subTitle: this.alert_addupdate,
        //   buttons: [this.alert_OK],
        //   cssClass: "custom-alert",
        // });
        const toast = this.toastCtrl.create({
          message: this.alert_add,
          duration: 3000
        });
        toast.present();
        // alert.present();
        console.log("Username", this.User_email);
      } else if (this.keys == false) {

        console.log("insert");

        console.log(
          "Text_num",
          this.price_product,
          "",
          id_product_re,
          "",
          this.total_dis,
          this.User_email,
          "num",
          this.thisnum
        );

        let body: String =
          "id_product_re=" +
          id_product_re +
          "&booking_email=" +
          this.User_email +
          "&booking_count=" +
          this.thisnum +
          "&booking_price=" +
          this.total_dis,
          type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ "Content-Type": type }),
          option: any = new RequestOptions({ headers: headers }),
          url: any =
            "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/booking_product.php";
        this.https
          .post(url, body, option)
          .map((res) => res.json())
          .subscribe((data) => { });

        // const alert = this.alertCrt.create({
        //   message: '<img src = "assets/imgs/add.png" >',
        //   subTitle: this.alert_add,
        //   buttons: [
        //     {
        //       text: this.alert_OK,
        //       role: this.alert_OK,
        //       cssClass: "custom-alertbutton",
        //       handler: () => {
        //         this.selectdatacheck1(this.User_email);
        //       },
        //     },
        //   ],

        //   cssClass: "custom-alert",
        // });
        this.selectdatacheck1(this.User_email);
        const toast = this.toastCtrl.create({
          message: this.alert_add,
          duration: 3000
        });
        toast.present();

        // alert.present();
        this.User_email
      }
    }
    // this.addToCart(id );
  }
  gotilist(id_category_product: string) {
    this.navCtrl.push(ListProduct1Page, {
      id_category_product: id_category_product,
    });

  }

  showmenu() {
    setTimeout(() => {
      this.https
        .get(
          " https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_group_menu.php"
        )
        .map((res) => res.json())
        .subscribe((data) => {
          this.menu = data;
          console.log("FUCK", this.menu)
        });
    }, 4000);
  }
  presentToast() {
    this.navCtrl.push(HomeLoadingPage)
  }
  readmore(id) {

    if (id == 1) {

      if(this.cklan==true){
        this.set_title="Sale product"
      }
      else{
        this.set_title="สินค้าลดราคา"
      }
    }else if(id==2){
      if(this.cklan==true){
        this.set_title="New products"
      }
      else{
        this.set_title="สินค้ามาใหม่"
      }

    }else{
      if(this.cklan==true){
        this.set_title="Recommended"
      }
      else{
        this.set_title="สินค้าแนะนำ"
      }

    }


    console.log("id", id, this.set_title)
    this.navCtrl.push(PolicyPage,{id_cate:id,title_text:this.set_title})

  }

}
