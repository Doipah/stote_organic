import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { HistoryOrderDetailPage } from '../history-order-detail/history-order-detail';

/**
 * Generated class for the HistoryorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historyorder',
  templateUrl: 'historyorder.html',
})
export class HistoryorderPage {

  favorites:any=[];
  booking_email1:string="";
  cklan:any="";
  result2:any=[];
  hi:any=""

  constructor(public navCtrl: NavController, public navParams: NavParams,public https:Http,public storage:Storage) {
    // setTimeout(()=>{ 

    
    
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Historyorder');
    this.storage.get('session_storage').then((booking) => {

      this.booking_email1 = booking;

      this.getdata_favorites(this.booking_email1);

     
   
    });

    this.storage.get('lang').then((ress) => {
      // this._translate.setDefaultLang(ress);
      // this._translate.use(ress);
      if(ress == "en"){
        this.cklan = true;
        this.hi="History Order"

      }else{
        this.cklan = false;
        this.hi="ประวัติการสั่งซื้อ"
      }

    })
 
  }
  getdata_favorites(user:string){
    this.https.get(' https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_Etrcking_suscess.php?booking_email='+user)
    .map(res => res.json())
    .subscribe(data => {
      this.favorites = data;
      console.log(this.favorites.length)
      console.log(this.favorites)

      this.favorites = data;
      // console.log("L", this.LLLL = this.favorites.length)
    
      var code = new Set(this.favorites.map(item => item.code));
      this.result2 = [];
    
      code.forEach(getCountry =>
        this.result2.push({
          
          code_id: getCountry,
          values: this.favorites.filter(i => i.code === getCountry),
        }
    
        ))
        console.log("result2",this.result2)
    });
  }
  gotodetail(id){
    console.log(id)
    
    this.navCtrl.push(HistoryOrderDetailPage,{code_id:id})

  }




 

}
