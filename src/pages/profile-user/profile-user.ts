import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { YourServiceProvider } from '../../providers/your-service/your-service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { ImagesProvider } from '../../providers/images/images';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/**
 * Generated class for the ProfileUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-user',
  templateUrl: 'profile-user.html',
})
export class ProfileUserPage {
  public form: FormGroup;
  public prifile_user: any = [];
  public u_email: any = [];
  public text_Profile: string = "";
  public text_fullname: string = "";
  public text_Email: string = "";
  public text_phone: string = "";
  public btn_ChahngPass: string = "";
  public text_Shipping_address: string = "";
  public text_address: string = "";
  public btn_save: string = "";
  public baseUrl: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/";
  test_me:boolean;
  imageURI: any = [null];
  private _SUFFIX: any = [""];
  public isWeb: boolean = false;
  imagePro
   IMG: any = null;
   dorm_img:any;
   file:any;
   cklan:boolean;
   email:any="";
   name="";
   u_email_e:any=""
  // private baseUrl: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/";

  constructor(   public fb: FormBuilder ,public navCtrl: NavController, public navParams: NavParams, public yourserver: YourServiceProvider, private camera: Camera,
    public alertCtrl: AlertController,public http: Http, public storage: Storage, private _translate: TranslateService,
    public loadingCtrl: LoadingController) {
      this.form = fb.group({

      'u_name': [ "",""],
      'u_tel': [ "",""],
      'img1': ["", ""],
      })

    this.storage.get('session_storage').then((res) => {


      console.log(res);
      this.showHotel_data(res);
      this.u_email_e=res;


    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Tabs");

    this.storage.get('lang').then((ress) => {
      console.log("THH",ress);
      this._translate.setDefaultLang(ress);
      this._translate.use(ress);

    })
    this._initialiseTranslation();
  }
  _initialiseTranslation() {
    setTimeout(() => {

      this.text_Profile = this._translate.instant("home.text_Profile");
      this.text_fullname = this._translate.instant("home.text_fullname");
      this.text_Email = this._translate.instant("home.text_Email");
      this.text_phone = this._translate.instant("home.text_phone");
      this.btn_ChahngPass = this._translate.instant("home.btn_ChahngPass");
      this.text_Shipping_address = this._translate.instant("home.text_Shipping_address");
      this.text_address = this._translate.instant("home.text_address");
      this.btn_save = this._translate.instant("home.btn_save");


    }, 25);

    this.storage.get('lang').then((ress) => {
      console.log("Loss", ress);


      if (ress == "en") {
       

        this.cklan = true;
        this.email="Email";
        this.name="Username";
      

      } else {
        this.email="อีเมล์"
        this.name="ชื่อ-นามสกุล"
     
      }

    })


  }

  showHotel_data(u_email: string) {
    console.log("มาแล้ว ", u_email)
    this.http.get('https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/select_email.php?u_email=' + u_email).map(res => res.json()).subscribe(data => {
      this.prifile_user = data;
      // console.log(this.prifile_user.u_name);
      for (let item of this.prifile_user){
        console.log("USEER",item.u_name);
      }

      console.log(this.prifile_user)

    });
  }
  gotogroup() {
    this.navCtrl.setRoot(TabsPage, { tabIndex: 3 });
  }
  // changeListener(event: any, no: number) {
  //   console.log('file chang***********');
  //   let val = event.target.value;
  //   // this.file = val;
  //   // this.imageURI = val;
  //   this.dorm_img.value = (val.lastIndexOf('\\')+1) ? val.substring(val.lastIndexOf('\\')+1) : val.substring(val.lastIndexOf('/')+1);
    
  //   console.log('file='+ val);

  //   let loader = this.loadingCtrl.create({
  //     content: "Waiting..."
  //   });
  //   loader.present();

  //   this.imagePro
  //     .handleImageSelection(event)
  //     .subscribe((res) => {
  //       // Retrieve the file type from the base64 data URI string
  //       this._SUFFIX[no - 1] = res.split(':')[1].split('/')[1].split(";")[0];
  //       // Do we have correct file type?
  //       if (this.imagePro.isCorrectFileType(this._SUFFIX[no - 1])) {
  //         this.imageURI[no - 1] = res;
  //         //this.dorm_img.value = res;
  //       }
  //       // If we don't alert the user
  //       else {
  //         //  this.showAlert('You need to select an image file with one of the following types: jpg, gif or png');
  //         const alert = this.alertCtrl.create({

  //           message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

  //           subTitle: 'You need to select an image file with one of the following types: jpg, gif or png',
  //           buttons: ["ok"],
  //           cssClass: 'custom-alert01'

  //         });
  //         alert.present();
  //         // this.navCtrl.setRoot(RegisterPage);

  //       }
  //     },
  //       (error) => {
  //         console.dir(error);
  //         // this.showAlert(error.message);
  //       });
  //   loader.dismiss();

  // }

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
      // this.IMG = 'data:image/jpeg;bese64,' + imageData;
      this.imageURI[no - 1] = 'data:image/jpeg;bese64,' + imageData;
 
      this.test_me = true;
       // this.showAlert(err);

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
  signIn(){
    let u_name: String = this.form.controls["u_name"].value,
      tel: String = this.form.controls['u_tel'].value,
      img1: string = this.form.controls["img1"].value;

      for (let i = 0; i < this.imageURI.length; i++) {
        console.log('imageURI=' + i + ' ' + this.imageURI[i]);
        if (this.imageURI[i] != null) {
          let id: string = Date.now().toString() + i;
          console.log(id);
          this.uploadFile(id, i);
          if (i == 0) img1 = id + '.' + this._SUFFIX[i];
        }
      }

      if(u_name != null && tel != null && img1 != null){

        let body: String = "u_name=" + u_name + "&u_email=" + this.u_email_e + "&u_tel=" + tel  + "&name_img=" + img1,
        type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/.php';
      this.http.post(url, body, option)

      }else{
        const alert = this.alertCtrl.create({

          message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

          subTitle: 'กรุณาป้อนข้อมูลให้ครบ',
          buttons: ['ตกลง'],
          cssClass: 'custom-alert01'

        });
        alert.present();


      }

      

  }

}
