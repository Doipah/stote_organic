import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { from } from 'rxjs/observable/from';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ImagesProvider } from '../../providers/images/images';
import { HistoresPage } from '../histores/histores';

/**
 * Generated class for the PromptpayUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promptpay-upload',
  templateUrl: 'promptpay-upload.html',
})
export class PromptpayUploadPage {

  // imageURI: any;
  test_me: boolean = false;
  ckland: boolean
  imageFileName: any;
  imageURI: any = [null];
  private _SUFFIX: any = [""];

  public isWeb: boolean = false;
  public baseUrl: any = "https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/";
  code
  total
  username: any = [];
  upload_tr: any = "";
  load_re
  imgnoselect: any = "";
  success: any = ""
  ok:any=""
  alerimfor:any=""
  public form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public imagePro: ImagesProvider,
    public alertCtrl: AlertController, public https: Http,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, public fb: FormBuilder,) {


    this.form = fb.group({
      'promptpay_date': ["", Validators.compose([Validators.required])],
      'promptpay_time': ["", Validators.compose([Validators.required])],
      'img1': ["", ""],
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromptpayUploadPage');
    this.code = this.navParams.get('code');
    this.total = this.navParams.get('total');
    this.storage.get('session_storage').then((booking_email) => {
      this.username = booking_email;


    })

    this.storage.get('lang').then((ress) => {
      // this._translate.setDefaultLang(ress);
      // this._translate.use(ress);
      if (ress == "en") {

        this.ckland = true;
        this.upload_tr = "upload"
        this.load_re = "Uploading"
        this.imgnoselect = "Image not selected"
        this.success = "success"
        this.ok="Ok"
        this.alerimfor="Please enter all information"
      } else {
        this.ckland = false;
        // this.tabs1 = ['รอชำระเงิน', 'ชำระเงินแล้ว', 'เตรียมจัดส่ง', 'ยกเลิกสินค้า'];
        this.load_re = "กำลังอัพโหลด"
        this.upload_tr = "บันทึก"
        this.imgnoselect = "ไม่ได้เลือกรูปภาพ"
        this.success = "เรียบร้อย"
        this.ok="ตกลง"
        this.alerimfor="กรุณากรอกข้อมูลให้ครบ"
      }
    })
  }
  // getImage(no: number) {

  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     //this.imageURI = imageData;
  //     this.imageURI[no - 1] = 'data:image/jpeg;bese64,' + imageData;

  //     // this.test_me = true;

  //   }, (err) => {
  //     console.log(err);
  //     // this.showAlert(err);
  //   });

  // }

  getImage(no: number) {
    // let reader = new FileReader();
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

      const loader = this.loadingCtrl.create({
        content: this.load_re,
        duration: 2000

      });
      loader.present();


    }, (err) => {
      const loader = this.loadingCtrl.create({
        content: this.imgnoselect,
        duration: 2000

      });
      loader.present();
    })
  }
  uploadFile(id: string, i: number) {



    let url = this.baseUrl + '/uploadfile.php';
    this._SUFFIX[i] = (this.imagePro.isCorrectFileType(this._SUFFIX[i])) ? this._SUFFIX[i] : 'jpg';
    let fileName: any = id + '.' + this._SUFFIX[i];
    this.imagePro.uploadImage(this.imageURI[i], this._SUFFIX[i], fileName, 'productimg/', url)
      .subscribe((res) => {
        // const loader = this.loadingCtrl.create({
        //   content: res,
        //   duration: 2000

        // });
        // loader.present();
      },
        (err: any) => {
          console.dir(err);
          // const loader = this.loadingCtrl.create({
          //   content: err,
          //   duration: 2000

          // });
          // loader.present();
        });
    // loader.dismiss();


  }
  uploaddata() {
    let promptpay_date: String = this.form.controls["promptpay_date"].value,
      promptpay_time: String = this.form.controls['promptpay_time'].value,
      img1: String = this.form.controls['img1'].value,
      code: String = this.code,
      total: String = this.total

    // console.log("name",this.username,code,total)
    for (let i = 0; i < this.imageURI.length; i++) {
      console.log('imageURI=' + i + ' ' + this.imageURI[i]);
      if (this.imageURI[i] != null) {
        let id: string = Date.now().toString() + i;
        console.log(id);
        this.uploadFile(id, i);
        if (i == 0) img1 = id + '.' + this._SUFFIX[i];
      }
    }

    if (promptpay_date != null && promptpay_time != null && img1 != null) {

      let body: String = "p_code=" + code + "&username=" + this.username + "&promptpay_date=" + promptpay_date + "&promptpay_time=" + promptpay_time +
        "&total=" + total + "&name_img=" + img1,
        type: string = "application/x-www-form-urlencoded; charset = UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        option: any = new RequestOptions({ headers: headers }),
        url: any = 'https://adminshop.kwanpat.com/admin-2-gh-pages/API_shop/user_upload_promptpay.php';
      this.https.post(url, body, option)
        .map(res => res.json())
        .subscribe((data1) => {

        })

      const alert = this.alertCtrl.create({

        message: '<img src = "assets/imgs/success.png" >',

        subTitle: this.success,
        buttons: [this.ok],
        cssClass: 'custom-alert'

      });
      alert.present();


      this.navCtrl.push(HistoresPage);



    } else {
      const alert = this.alertCtrl.create({

        message: '<img src = "https://image.flaticon.com/icons/svg/148/148766.svg" >',

        subTitle: this.alerimfor,
        buttons: [this.ok],
        cssClass: 'custom-alert'

      });
      alert.present();

    }

  }



}
