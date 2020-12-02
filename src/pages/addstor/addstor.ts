// import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,LoadingController ,AlertController} from 'ionic-angular';
import leaflet from 'leaflet';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/**
 * Generated class for the AddstorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstor',
  templateUrl: 'addstor.html',
})
export class AddstorPage {
  u_emaild: any;
  public form: FormGroup;
  private readonly emailRegex = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`;

  constructor(public navCtrl: NavController, public https: Http, public fb: FormBuilder,
    public alertCtrl :AlertController) {
    this.form = fb.group({

      'u_email': ["", Validators.compose([Validators.minLength(10), Validators.pattern(this.emailRegex)])],

    });

  }

  ionViewDidEnter() {

  }
  resetpassword() {
    var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    //  console.log(retVal)
    let u_email: String = this.form.controls["u_email"].value
    // console.log(u_email)
    this.u_emaild
    if (u_email != null) {

      this.resetpassword_todatabase(retVal)

      let body: String = "u_email=" + u_email + "&retVal=" + retVal,

        type: string = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = "http://localhost/admin.test/admin-2-gh-pages/sample_email.php";
      this.https.post(url, body, option).subscribe((data) => { })
      const alert = this.alertCtrl.create({
        message: '<img src = "assets/imgs/success.png" >',
        subTitle: "โปรดตรวจสอบอีเมล์ของท่าน",
        buttons: [
          {
            text: "ตกลง",
            
            cssClass: 'custom-alertbutton',
          }
        ]

        ,
        cssClass: 'custom-alert1'
      });
      alert.present();

    } else {
      const alert = this.alertCtrl.create({
        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',
        subTitle: "กรุณาป้อนอีเมล์",
        buttons: [
          {
            text: "ตกลง",
            
            cssClass: 'custom-alertbutton',
          }
        ]

        ,
        cssClass: 'custom-alert1'
      });
      alert.present();

    }
  


  }
  resetpassword_todatabase(pass: string) {


    let u_email: String = this.form.controls["u_email"].value

    // console.log(u_email,pass)


    let body: String = "u_email=" + u_email + "&newpass=" + pass,

      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/resetpassword.php";
    this.https.post(url, body, option).subscribe((data) => { })

  }



}