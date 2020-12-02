import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
/*
  Generated class for the ValidatorUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidatorUserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ValidatorUserProvider Provider');
  }

  static validUsername(fc: FormControl) {
    if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
      return ({ validUsername: true });
    } else {
      return (null);
    }
  }
}
