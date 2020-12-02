import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, LoadingController, Platform } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ReportPage } from '../report/report';
import { ImagesProvider } from '../../providers/images/images';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the AddProduct2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product2',
  templateUrl: 'add-product2.html',
})
export class AddProduct2Page {

  //private baseUrl:any="http://localhost:81/veget_serve";
  private baseUrl:any="http://student.crru.ac.th/591463065";
  public form: FormGroup;
  public items: any = [];
  public itemss: any = [];

  public id_product: any="";
  public name_product:any="";
  public status:any="";
  public price_product:any="";
  public tel:any="";
  public description:any="";
  public id_category:any="";
  public img1:any="";
  public img2:any="";
  public img3:any="";
  public res_id:any="";

  imageURI:any=[null,null,null];
  private _SUFFIX : any=["","",""];
  public isWeb : boolean =false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCrt: ToastController,
    public alrtCrt: AlertController,
    public loadingCtrl :LoadingController,
    public plt :Platform,
    public imagePro:ImagesProvider,
    private camera: Camera,
    public http: Http, public fb: FormBuilder) {

    this.initializeCategory();

    this.showdata();

      this.form = fb.group({
        "id_product": ["", Validators.required],
        "name_product": ["", Validators.required],
        "status": ["", Validators.required],
        "price_product": ["", Validators.required],
        "tel": ["", Validators.required],
        "res_id": ["", Validators.required],
        "description": ["", Validators.required],
        "id_category": ["", Validators.required],
        "img1": ["", ""],
        "img2": ["", ""],
        "img3": ["", ""]
      });
  }

  ionViewDidLoad() {
    if (this.plt.is('core')||this.plt.is('mobileweb')) {this.isWeb = true; }
    console.log('ionViewDidLoad AddProduct2Page');
  }

  showAlert(fname): void {
    let alert = this.alrtCrt.create({
      title: 'คำเตือน', subTitle: fname, buttons: ['OK']
    });
    alert.present();
  }

  initializeCategory() {

    this.http.get(this.baseUrl + '/SmartFarm/AIP_PLANT/get_productcategory.php')
    .map(res => res.json())
    .subscribe(data => {
      this.items = data;
    });

}

showdata() {

  this.http.get(this.baseUrl + '/SmartFarm/AIP_PLANT/get_nameres.php')
  .map(res => res.json())
  .subscribe(data => {
    this.itemss = data;
  });

}

changeListener(event:any,no:number) {
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
     .subscribe((res) =>
     {
        // Retrieve the file type from the base64 data URI string
        this._SUFFIX[no-1]       = res.split(':')[1].split('/')[1].split(";")[0];
        // Do we have correct file type?
        if(this.imagePro.isCorrectFileType(this._SUFFIX[no-1]))
        {
           this.imageURI[no-1]     = res;
           //this.dorm_img.value = res;
        }
        // If we don't alert the user
        else
        {
           this.showAlert('You need to select an image file with one of the following types: jpg, gif or png');
        }
     },
     (error) =>
     {
        console.dir(error);
        this.showAlert(error.message);
     });
     loader.dismiss();

 }

 getImage(no:number) {

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    //this.imageURI = imageData;
    this.imageURI[no-1] = 'data:image/jpeg;bese64,' + imageData ;
  }, (err) => {
    console.log(err);
    this.showAlert(err);
  });

 }

 uploadFile(id:string,i:number) {
  let loader = this.loadingCtrl.create({
   content: "Uploading..."
  });
  loader.present();

  let url = this.baseUrl +'/SmartFarm/AIP_PLANT/uploadfile.php';
  this._SUFFIX[i] = (this.imagePro.isCorrectFileType(this._SUFFIX[i]))? this._SUFFIX[i]:'jpg';
  let fileName : any   = id + '.' + this._SUFFIX[i];
  this.imagePro.uploadImage(this.imageURI[i],this._SUFFIX[i],fileName,'productimg/',url)
  .subscribe((res) =>
    {
       this.showAlert(res.message);
    },
    (err : any) =>
    {
       console.dir(err);
       this.showAlert(err.message)
    });
    loader.dismiss();


}

  savaEntry() {
    let id_product: string = this.form.controls["id_product"].value,
    name_product: string = this.form.controls["name_product"].value,
    status: string = this.form.controls["status"].value,
    price_product: string = this.form.controls["price_product"].value,
    tel: string = this.form.controls["tel"].value,
    res_id: string = this.form.controls["res_id"].value,
    description: string = this.form.controls["description"].value,
    id_category: string = this.form.controls["id_category"].value,
    img1: string = this.form.controls["img1"].value,
    img2: string = this.form.controls["img2"].value,
    img3: string = this.form.controls["img3"].value

    for(let i=0;i<this.imageURI.length ;i++)
    {
      console.log('imageURI='+ i + ' '+this.imageURI[i]);
      if(this.imageURI[i]!=null)
      {
        let id :string  =   Date.now().toString() + i ;
        console.log(id);
        this.uploadFile(id,i);
        if(i==0) img1 = id + '.'+ this._SUFFIX[i];
        if(i==1) img2 = id + '.'+ this._SUFFIX[i];
        if(i==2) img3 = id + '.'+ this._SUFFIX[i];
      }
    }


    let body:string = "&id_product=" + id_product + "&name_product=" + name_product + "&price_product=" + price_product +"&status=" + status +
      "&tel=" + tel + "&res_id="+res_id+ "&description=" + description + "&id_category=" + id_category + "&img1=" + img1 + "&img2=" + img2 + "&img3=" + img3 ,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = this.baseUrl + "/SmartFarm/AIP_PLANT/Api_am_addproduct.php";
      //url: any = " http://student.crru.ac.th/591463046/SmartFarm/AIP_PLANT/Api_addmyadd.php";
    this.http.post(url, body, option)
      .subscribe((data) => {
        if (data.status === 200) {
          // this.navCtrl.push();
          this.showAlert("บันทึกแล้ว" + body);
          //this.navCtrl.push(ReportPage);
        } else {
          this.showAlert("ไม่สามารถบันทึกได้");
        }
      });
  }

}
