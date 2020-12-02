import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favorites:any=[];
  booking_email1:string="";
  cklan:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public https:Http,public storage:Storage) {
    // setTimeout(()=>{ 

    
    
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    this.storage.get('session_storage').then((booking) => {

      this.booking_email1 = booking;

      this.getdata_favorites(this.booking_email1);

     
   
    });

    this.storage.get('lang').then((ress) => {
      // this._translate.setDefaultLang(ress);
      // this._translate.use(ress);
      if(ress == "en"){
        this.cklan = true;

      }else{
        this.cklan = false;
      }

    })
 
  }
  getdata_favorites(user:string){
    this.https.get(' https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_favorites.php?user_favorites='+user)
    .map(res => res.json())
    .subscribe(data => {
      this.favorites = data;
      console.log(this.favorites.length)

    });

  }

}
