import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, LoadingController, Platform } from 'ionic-angular';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { LoginedPage } from '../logined/logined';
import { TranslateService } from '@ngx-translate/core';
import { ImagesProvider } from '../../providers/images/images';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public form: FormGroup;
  public districts: any = "";
  public dataampor: any = "";
  public cities: any = "";
  public selectedDistricts: any = "";
  public selectedAmpor: any = "";

  public u_name: string ;
  public u_email: string;
  public u_tel: any = "";
  public u_password: any = "";
  public u_repass: any = "";
  public u_address: any = "";
  select_pro_picture: string = "";
  successful: string = "";
  select_profile: string = "";
  public date_test: any = "";
  public dataets: any = {};
  public text_loginfrist: string = "";
  public text_wellcom: string = "";
  public text_password: string = "";
  public text_Forgot: string = "";
  public text_registerp: string = "";
  public text_register: string = "";
  public alert_erroremail: string = "";
  public alert_errorpass: string = "";
  public text_Email: string = "";
  public alert_OK: string = "";
  public text_lanTH: string = "";
  public text_lanEN: string = "";
  public alert_errorfield: string = "";
  public alert_errornewemail: string = "";
  public alert_errorsamepass: string = "";
  public text_fullname: string = "";
  public text_phone: string = "";
  public text_address: string = "";
  public btn_save: string = "";
  public text_passwordcon: string = "";
  public alert_Success: string = "";
  public alert_Successregister: string = "";
  test_me: boolean = false;
  imageURI: any = [null];
  private _SUFFIX: any = [""];
  public isWeb: boolean = false;
  private baseUrl: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/";
  private readonly emailRegex = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`;

  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http, public NP: NavParams, public storage: Storage,
    public fb: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController, private _translate: TranslateService,
    public imagePro: ImagesProvider, private camera: Camera, public http: Http, public loadingCtrl: LoadingController, public plt: Platform) {
    this.form = fb.group({
      'u_name': [ "", Validators.compose([Validators.maxLength(20),Validators.minLength(3), Validators.required])],

      'u_email':["",Validators.compose([Validators.minLength(10),Validators.pattern(this.emailRegex)])],

      'u_tel':[ "", Validators.compose([Validators.maxLength(10),Validators.minLength(10), Validators.pattern('(^0)([1-9]){8}([0-9])$'), Validators.required])],

      // "u_tel" :[null,Validators.required,Validators.pattern('(^0)([1-9]){8}([0-9])$'),Validators.min(10)],
      'u_password': ["",Validators.compose([Validators.minLength(8)])],
      'u_repass': ["",Validators.compose([Validators.minLength(8)])],
      
      'img1': ["", ""],

    });

    this.initializeDistrict();
    this. initializeCity();
    this. initializeCity2() ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    if (this.plt.is('core') || this.plt.is('mobileweb')) { this.isWeb = true; }


    this.storage.get('lang').then((ress) => {
      console.log("text", ress)
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);

    })
    this._initialiseTranslation();
  }


  _initialiseTranslation() {
    setTimeout(() => {
      this.text_loginfrist = this._translate.instant("home.text_loginfrist");
      this.text_wellcom = this._translate.instant("home.text_wellcom");
      this.text_password = this._translate.instant("home.text_password");
      this.text_Forgot = this._translate.instant("home.text_Forgot");
      this.text_registerp = this._translate.instant("home.text_registerp");
      this.text_register = this._translate.instant("home.text_register");
      this.text_Email = this._translate.instant("home.text_Email");
      this.alert_OK = this._translate.instant("home.alert_OK");

      this.alert_errorfield = this._translate.instant("home.alert_errorfield");
      this.alert_errornewemail = this._translate.instant("home.alert_errornewemail");
      this.alert_errorsamepass = this._translate.instant("home.alert_errorsamepass");
      this.text_fullname = this._translate.instant("home.text_fullname");
      this.text_phone = this._translate.instant("home.text_phone");
      this.text_address = this._translate.instant("home.text_address");
      this.btn_save = this._translate.instant("home.btn_save");
      this.text_passwordcon = this._translate.instant("home.text_passwordcon");
      this.alert_Success = this._translate.instant("home.alert_Success");
      this.alert_Successregister = this._translate.instant("home.alert_Successregister");

      this.select_pro_picture = this._translate.instant("home.select_pro_picture");
      this.successful = this._translate.instant("home.successful");
      this.select_profile = this._translate.instant("home.select_profile");

    }, 25);
  }

  showAlert(fname): void {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน', subTitle: fname, buttons: ['Ok']
    });
    alert.present();
  }
  changeListener(event: any, no: number) {
    //console.log('file chang***********');
    /*let val = ev.target.value;
    this.file = val;
    this.imageURI = val;
    this.dorm_img.value = (val.lastIndexOf('\\')+1) ? val.substring(val.lastIndexOf('\\')+1) : val.substring(val.lastIndexOf('/')+1);
    */
    //console.log('file='+ val);

    let loader = this.loadingCtrl.create({
      content: "Waiting..."
    });
    loader.present();

    this.imagePro
      .handleImageSelection(event)
      .subscribe((res) => {
        // Retrieve the file type from the base64 data URI string
        this._SUFFIX[no - 1] = res.split(':')[1].split('/')[1].split(";")[0];
        // Do we have correct file type?
        if (this.imagePro.isCorrectFileType(this._SUFFIX[no - 1])) {
          this.imageURI[no - 1] = res;
          //this.dorm_img.value = res;
        }
        // If we don't alert the user
        else {
          //  this.showAlert('You need to select an image file with one of the following types: jpg, gif or png');
          const alert = this.alertCtrl.create({

            message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

            subTitle: 'You need to select an image file with one of the following types: jpg, gif or png',
            buttons: [this.alert_OK],
            cssClass: 'custom-alert01'

          });
          alert.present();
          this.navCtrl.setRoot(RegisterPage);

        }
      },
        (error) => {
          console.dir(error);
          // this.showAlert(error.message);
        });
    loader.dismiss();

  }
  getImage(no: number) {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      //this.imageURI = imageData;
      this.imageURI[no - 1] = 'data:image/jpeg;bese64,' + imageData;

      this.test_me = true;

    }, (err) => {
      console.log(err);
      // this.showAlert(err);
    });

  }

  uploadFile(id: string, i: number) {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();

    let url = this.baseUrl + '/uploadfile.php';
    this._SUFFIX[i] = (this.imagePro.isCorrectFileType(this._SUFFIX[i])) ? this._SUFFIX[i] : 'jpg';
    let fileName: any = id + '.' + this._SUFFIX[i];
    this.imagePro.uploadImage(this.imageURI[i], this._SUFFIX[i], fileName, 'productimg/', url)
      .subscribe((res) => {
        // this.showAlert(res.message);
      },
        (err: any) => {
          console.dir(err);
          //  this.showAlert(err.message)
        });
    loader.dismiss();


  }

  Register() {
    let u_name: String = this.form.controls["u_name"].value,
      u_email: String = this.form.controls['u_email'].value,
      u_tel: String = this.form.controls['u_tel'].value,
      u_password: String = this.form.controls['u_password'].value,
      u_repass: String = this.form.controls['u_repass'].value,
      img1: string = this.form.controls["img1"].value;
    //   if(this.form.validator != "!" && u_name != "@"){
    //     console.log("ok")

    //   }
    //  else{
    //    console.log("ป้อนดีๆ +!@#$%^&")
    //  }

    for (let i = 0; i < this.imageURI.length; i++) {
      console.log('imageURI=' + i + ' ' + this.imageURI[i]);
      if (this.imageURI[i] != null) {
        let id: string = Date.now().toString() + i;
        console.log(id);
        this.uploadFile(id, i);
        if (i == 0) img1 = id + '.' + this._SUFFIX[i];
      }
    }
    if (u_name != "" && u_email != "" && u_tel != "" && u_password != "" && u_repass && img1 != "" ) {
      if (u_password == u_repass) {
        let body: String = "u_name=" + u_name + "&u_email=" + u_email + "&u_tel=" + u_tel + "&u_password=" + u_password + "&name_img=" + img1,
          type: string = "application/x-www-form-urlencoded; charset = UTF-8",
          headers: any = new Headers({ 'Content-Type': type }),
          option: any = new RequestOptions({ headers: headers }),
          url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/Register_test.php';
        this.https.post(url, body, option)
          .map(res => res.json())
          .subscribe((data1) => {
            for (this.dataets of data1) {
              console.log(this.dataets.u_email);
            }
            if (data1 == true) {

              const alert = this.alertCtrl.create({

                message: '<img src = "assets/imgs/success.png" >',

                subTitle: this.alert_Successregister,
                buttons: [this.alert_OK],
                cssClass: 'custom-alert'

              });
              alert.present();
              this.navCtrl.push(LoginedPage);
              this.navCtrl.setRoot(LoginedPage);

            } else {
              const alert = this.alertCtrl.create({

                message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

                subTitle: this.alert_errornewemail,
                buttons: [this.alert_OK],
                cssClass: 'custom-alert01'

              });
              alert.present();

            }
            console.log(data1);

          });
      } else {
        const alert = this.alertCtrl.create({

          message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

          subTitle: this.alert_errorsamepass,
          buttons: [this.alert_OK],
          cssClass: 'custom-alert01'

        });
        alert.present();

      }
    } else {
      const alert = this.alertCtrl.create({

        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

        subTitle: this.alert_errorfield,
        buttons: [this.alert_OK],
        cssClass: 'custom-alert'

      });
      alert.present();

    }
  }
  home() {
    this.navCtrl.setRoot(LoginedPage);
  }


  //แสดงที่อยู่ประเทศ
  initializeDistrict() {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_provinces.php')
      .map(res => res.json())
      .subscribe(data => {
        this.districts = data;
      });

  }
  initializeCity() {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_districts.php')
      .map(res => res.json())
      .subscribe(data => {
        this.dataampor = data;
      });

  }
  initializeCity2() {

    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/get_subdistricts.php')
      .map(res => res.json())
      .subscribe(data => {
        this.cities = data;
      });

  }
  //input จังหวัด
  setDistrictValues(contry) {

    console.log("test", contry);

    this.selectedDistricts = this.dataampor.filter(ampor => ampor.province_id == contry)
    console.log(this.selectedDistricts);
  }
  // input อำเภอ

  setAmporValues(sprovince) {
    console.log("sprovince");
    console.log(sprovince);

    this.selectedAmpor = this.cities.filter(Ampor => Ampor.district_id == sprovince);

    console.log(this.selectedAmpor)
    console.log(this.cities)


  }


}
