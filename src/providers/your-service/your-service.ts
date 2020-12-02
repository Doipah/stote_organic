import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

/*
  Generated class for the YourServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YourServiceProvider {


  public password :any;
  public u_email:any;
  public discount:any;


  constructor(public http: Http) {
    console.log('Hello YourServiceProvider Provider');
    console.log(this.u_email);
  }



}
