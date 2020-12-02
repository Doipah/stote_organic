import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component,ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the AddcartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddcartProvider {
  private cart = [];
  private data = [];
   data2:any = [];
  public sum = [];
  public sum1 = [];
  public sum_total = [];
  public SUM = [];
  public user: any = [];
  public dd: any = [];
  public push_number: number = 1;
  public push_number2: number = 1;
  public sum_push: any = [];
  public message: any = [];
  public num_lose: any = [];
  count:number = 0;

  constructor(public http: HttpClient, 
    public https: Http, public storage: Storage

  ) {

    console.log('Hello AddcartProvider Provider');
    // this.showHotel_data2();

    this.storage.get('session_storage').then((res) => {

      console.log("User", res);
      // this.showsum(res);
    });

  }
  increaseByOne() {
    this.count = this.count + 1;
    this.message = "Counter: " + this.count;
 }
 get(){
   return this.count;
 }
 decreaseByOne() {
  this.count = this.count - 1;
  console.log("COunter",this.count);
  // this.message = "Counter: " + this.count;
}

  // showHotel_data2() {
  //   console.log(this.user);
  //   this.https.get('https://adminshop.kwanpat.com/API_shop/select_list01.php')
  //     .map(res => res.json())
  //     .subscribe(data1 => {
  //       this.data = data1;
  //       console.log(this.data);
  //     });
  // }

  //  getRemoteData() {
  //   return this.https.get("https://adminshop.kwanpat.com/API_shop/select_list01.php")
  //     .map(res => res.json())
  //     .map(data=>data)
     
     
  // }




  showsum(booking_email) {

    console.log("addcart");
    this.user = booking_email

    this.https.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_booking_joinpro.php?booking_email=' + booking_email)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log("FUCK", this.SUM.length);
       
        // for (let item of this.SUM) {
        //   console.log("sum55555555555", item.booking_count);
        //   this.dd.push(this.SUM);
        //   console.log("sum55555555555", this.dd);
        // }


      });
    // return this.dd;


  }
  
 
  // getCart2() {

  //   return this.dd;

  // }
  ngOnInit() {


  }


  getProducts() {
    return this.data;
  }

  // getsumcart() {
  //   return this.sum_total;
  // }
  // sumTOtal(sum_total) {

  //   this.sum_total.push(sum_total);
  //   console.log("DSD", this.sum_total);
  // }

  getCart() {

    return this.cart;
  }

  addProduct(product) {

    this.cart.push(product);


    this.sum_push.push(this.push_number++);
    console.log("sum_push", this.sum_push);



  }
  pushtest(num) {


    // console.log("num555555", this.num_lose);
    // for (let num_los = 0; num_los < num; num_los++) {
    //   this.num_lose.push(this.push_number2++);
    // }

  }
  getsum_lose() {
    // console.log("NONONONO", this.num_lose);
    // return this.num_lose;
  }

  getsum_push() {

    return this.sum_push;
  }

}
