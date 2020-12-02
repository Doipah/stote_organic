import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import { FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Http,Headers,RequestOptions} from '@angular/http';
import leaflet from 'leaflet';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-location',
  templateUrl: 'add-location.html',
})
export class AddLocationPage {
  public form : FormGroup;
  public items : any[];
  public key : string;
  public res_id : any;
  public res_name : any;
  public res_menu : any;
  public res_address : any;
  public res_rate : any;
  public c_id : any;
  public status : any;
  public la : any;
  public longti : any;
  public isEdited : boolean=false;
  public pageTitle:string;
  map: any;

  private baseURL : string = "http://127.0.0.1/project/SmartFarm/";

  constructor(public navCtrl: NavController,
    public http : Http,
    public NP : NavParams,
    public fb : FormBuilder,
    public alertContrl : AlertController,
    public alertContrldalete : AlertController,
    public navParams: NavParams) {
      this.form = fb.group(
        {
          "res_id" : ["", Validators.required],
          "res_name" : ["", Validators.required],
          "res_menu" : ["", Validators.required],
          "res_address" : ["", Validators.required],
          "res_rate" : ["", Validators.required],
          "c_id" : ["", Validators.required],
          "status" : ["", Validators.required], 
          "la" : ["", Validators.required], 
          "longti" : ["", Validators.required], 
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLocationPage');
    // this. showcategory();
    this.loadmap();
  }
  showAlert(fname) : void
  {
      let alert = this.alertContrl.create(
      {
        title:'คำเตือน!',subTitle:fname,buttons:['OK']
      });
      alert.present();
  }

  saveEntry()
  {
    let 
        res_id : string= this.form.controls["res_id"].value,
        res_name : string= this.form.controls["res_name"].value,
        res_menu : string= this.form.controls["res_menu"].value,
        res_address : string= this.form.controls["res_address"].value,
        res_rate : string= this.form.controls["res_rate"].value,
        c_id : string= this.form.controls["c_id"].value,
        status : string= this.form.controls["status"].value,
        la : string= this.form.controls["la"].value,
        longti : string= this.form.controls["longti"].value;
        
        
    let body : string = "&res_id=" + res_id + "&res_name=" + res_name+ "&res_menu=" + res_menu+ "&res_address=" + res_address+ "&res_rate=" + res_rate+ "&c_id=" + c_id + "&status=" +'2'+"&la=" + la+"&longti=" + longti,
        type : string = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any = new Headers({ 'Content-Type': type}),
        options: any = new RequestOptions({ headers: headers }),
        url : any = this.baseURL + "managemenu.php";
    this.http.post(url, body, options).subscribe((data) =>
      {
        if(data.status === 200)
      {
        this.showAlert('บันทึกข้อมูลเรียบร้อยแล้ว');
        this.navCtrl.push( HomePage);
      }
      else
      {
        this.showAlert('ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบ');
      }
      });
  }
  
  selectEntry(item){
    this.res_id = item.res_id;
    this.res_name = item.res_name;
    this.res_menu = item.res_menu;
    this.res_address = item.res_address;
    this.res_rate = item.res_rate;
    this.c_id = item.c_id;
    this.status = item.status;
    this.la = item.la;
    this.longti = item.longti;
  }
  resetFiellds():void{
    this.res_id = "";
    this.res_name = "";
    this.res_menu = "";
    this.res_address = "";
    this.res_rate = "";
    this.c_id = "";
    this.status = "";
    this.la = "";
    this.longti = "";
   
  }
  ionViewWillEnter(){
    if(this.res_id == "")
    {
      this.isEdited=false;
    }
    else
    {
      this.isEdited = true;
    }
  }
  ngOnInit(){
    this.res_id = this.navParams.get('res_id');
    this.res_name = this.navParams.get('res_name');
    this.res_menu = this.navParams.get('res_menu');
    this.res_address = this.navParams.get('res_address');
    this.res_rate = this.navParams.get('res_rate');
    this.c_id = this.navParams.get('c_id');
    this.status = this.navParams.get('status');
    this.la = this.navParams.get('la');
    this.longti= this.navParams.get('longti');
    this.pageTitle = this.navParams.get('pageTitle');
  }

  showAlertinsert(res_id,res_name) : void
  {
      let alert = this.alertContrldalete.create(
      {
        title:'จุดนัดรับสินค้า',
        message:'ยืนยันจุดนัดรับสินค้า',
        buttons:[
          {
            text:'ตกลง',
            handler:()=>{
              this.saveEntry();
            }
          },{
            text:'ยกเลิก',
            handler:()=>{
              this.navCtrl.push(HomePage);
            }
          }
        ]
      });
      alert.present();
  }
  showcategory()
  {
  this.http.get('http://student.crru.ac.th/591463046/SmartFarm/listidcategory.php')
  .map(res => res.json())
  .subscribe(data =>
  {
  this.items = data;
  });
  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld().setView([19.9792475, 99.8365202],14);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      minZoom: 8
    }).addTo(this.map);
    let marker: any = leaflet.marker([19,99]).addTo(this.map);
    this.map.on('click', (e) => {
      this.la = e.latlng.lat;
      this.longti = e.latlng.lng;
      console.log(this.la + " " + this.longti)
      if(marker !== null){
        this.map.removeLayer(marker);
      }
      marker = leaflet.marker([this.la, this.longti]).addTo(this.map);
    });
  }
}
