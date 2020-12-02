import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { ListProduct1Page } from '../list-product1/list-product1';

import { AddcartProvider } from '../../providers/addcart/addcart';
import { CartproductPage } from '../cartproduct/cartproduct';
import { map } from 'rxjs/operator/map';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  @ViewChild(AddcartProvider)
  counter = 0;
  name = '';
  cart: any = [];
  items1 = [];
  public id2:any = [];
  public SUM: any = [];
  public SUM_To: any = [];
  sumset: any = [];
  public num: number = 0;
  public User_email: any = "";
  public frist: boolean;
  public menu: any = [];
  public sum_push1: any = [];
  public baseUrl: any = "https://adminshop.kwanpat.com/";
  cklan:boolean ;
  private fakeusesr: Array<any> = new Array (5);
  title:any="";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private addCart: AddcartProvider,
    public https: Http, public storage: Storage,private app:App, private _translate: TranslateService) {

    this.showmenu();

    setTimeout(()=>{ 
      this.https.get(' https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_group_menu.php')
        .map(res => res.json())
        .subscribe(data => {
          this.menu = data;
  
        });
      },2000);


  }

  ionViewWillEnter() {



  }




    ionViewDidLoad() {
      console.log('ionViewDidLoad HOME......');


      this.storage.get('lang').then((ress) => {
        console.log("Loss", ress);
        this._translate.setDefaultLang(ress);
        this._translate.use(ress);
        if(ress == "en"){
          this.cklan = true;
          console.log("ress",this.cklan);

        }else{
          this.cklan = false;
          console.log("ress",this.cklan);
        }

      })

    }



  t1(id_category_product:string) {

    if(id_category_product=="1"){
  
     if(this.cklan == true ){
       this.title="fruit"

     }else{
      this.title="ผลไม้"

     }
    }else if(id_category_product=="2"){
      if(this.cklan == true ){
        this.title="vegetables"
 
      }else{
       this.title="ผักสด"
 
      }

    }else if(id_category_product=="3"){
      if(this.cklan == true ){
        this.title="Processed products"
 
      }else{
       this.title="ผลิตภัณฑ์แปรรูป"
 
      }

    }else if(id_category_product=="4"){
      if(this.cklan == true ){
        this.title="Health drink"
 
      }else{
       this.title="อาหารและเครื่องดื่ม"
 
      }

    }else {
      if(this.cklan == true ){
        this.title="Seedlings and seeds"
 
      }else{
       this.title="ต้นกล้าและเมล็ด"
 
      }

    }
    console.log(this.title)
    this.navCtrl.push(ListProduct1Page,{id_category_product:id_category_product,title_cate:this.title});


  }

  ngOnInit() {
    this.items1 = this.addCart.getProducts();



  }
  addToCart(product) {

    this.addCart.addProduct(product);

  }
  openCart(cart: string, status_c: string) {

    this.navCtrl.push(CartproductPage, { cart: cart, status_c: status_c });


  }

 

  showmenu() {


  }



}
