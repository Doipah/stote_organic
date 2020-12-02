import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

import { AddstorPage } from '../addstor/addstor';
import { ReportPage } from '../report/report';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-myadd',
  templateUrl: 'myadd.html',
})
export class MyaddPage {

  public form: FormGroup;
  public items: any = [];
  public states: any[];
  public districts: any[];
  public dataampor: any[];
  public cities: any[];
  public data :any =[];

  public selectedDistricts: any[];
  public selectedCities: any[];
  public selectedAmpor:any[];

  public sState: any;
  public sDistrict: any;
  public id: any;
  public ampor: any;
  public contry: any;
  public tabon: any;
  public tabontwo: any;
  public moo: any;
  public ban: any;
  public tel: any;
  public re_id: any;
  public data_date: any;
  public user_name :any;


  public key: string;
  public isEdited: boolean = false;
  public pageTitle: string;
  private baseUrl: string = "";
   items2:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCrt: ToastController,
    public alrtCrt: AlertController,
    public http: Http, public fb: FormBuilder) {

    // this.datamap();
    // this.datamap2();
    // this.initializeState();
    this.initializeDistrict();
    this.initializeCity();
    this.initializeCity2();

    this.form = fb.group({
      "id": ["", Validators.required],
      "ampor": ["", Validators.required],
      "contry": ["", Validators.required],
      "tabon": ["", Validators.required],
      "tabontwo": ["", Validators.required],
      "moo": ["", Validators.required],
      "ban": ["", Validators.required],
      "tel": ["", Validators.required],
      "re_id": ["", Validators.required],
      "data_date": ["", Validators.required],
      "user_name": ["", Validators.required]

     


    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaddPage');

    this.data = this.navParams.get('item');
    console.log(this.data);

  }
  showAlert(fname): void {
    let alert = this.alrtCrt.create({
      title: 'คำเตือน', subTitle: fname, buttons: ['OK']
    });
    alert.present();
  }


  selectEntry(item) {
    this.id = item.id;
    this.ampor = item.ampor;
    this.contry = item.contry;
    this.tabon = item.tabon;
    this.tabontwo = item.tabontwo;
    this.moo = item.moo;
    this.ban = item.ban;
    this.tel = item.tel;
    this.re_id = item.re_id;
    this.data_date = item.data_date;
    // this.user_name = item.user_name;
    this.user_name = this.navParams.get('item');


  }
  resertFields(): void {
    this.id = "";
    this.ampor = "";
    this.contry = "";
    this.tabon = "";
    this.tabontwo = "";
    this.moo = "";
    this.ban = "";
    this.tel = "";
    this.re_id = "";
    this.data_date = "";
    this.user_name="";
  }
  ionViewWillEnter() {
    if (this.id == "") {
      this.isEdited = false;
    } else {
      this.isEdited = true;
    }
  }
  savaEntry() {
    let id: string = this.form.controls["id"].value,
      contry: string = this.form.controls["contry"].value,
      ampor: string = this.form.controls["ampor"].value,
      tabon: string = this.form.controls["tabon"].value,
      tabontwo: string = this.form.controls["tabontwo"].value,
      moo: string = this.form.controls["moo"].value,
      ban: string = this.form.controls["ban"].value,
      tel: string = this.form.controls["tel"].value,
      re_id: string = this.form.controls["re_id"].value,
      data_date: string = this.form.controls["data_date"].value,
      user_name :string = this.navParams.get('item');




    let body: string = "&id=" + id +"&re_id=" + re_id+"&data_date="+data_date +"&user_name="+user_name ,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      option: any = new RequestOptions({ headers: headers }),
      url: any = " ";
    this.http.post(url, body, option)
      .subscribe((data) => {
        if (data.status === 200) {
          this.showAlert("บันทึกแล้ว");
          this.navCtrl.push(TabsPage);
        } else {
          this.showAlert("ไม่สามารถบันทึกได้");
        }
      });
  }
  ngOnInit() {
    this.id = this.navParams.get('id')
    this.ampor = this.navParams.get('ampor')
    this.contry = this.navParams.get('contry')
    this.tabon = this.navParams.get('tabon')
    this.tabontwo = this.navParams.get('tabontwo')
    this.moo = this.navParams.get('moo')
    this.ban = this.navParams.get('ban')
    this.tel = this.navParams.get('tel')
    this.re_id = this.navParams.get('re_id')
    this.data_date = this.navParams.get('data_date')
    this.user_name = this.navParams.get('item') ;
    this.pageTitle = this.navParams.get('pageTitle')
  }
  addmapstor() {
    this.navCtrl.push(AddstorPage);
  }

  // datamap() {
  //   this.http.get('http://localhost/ionic.test/AIP_PLANT/AIP_PLANT/get_provinces.php')
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       this.items = data;
  //       console.log(data)
  //     });
  // }
  // datamap2() {
  //   this.http.get('http://localhost/ionic.test/AIP_PLANT/AIP_PLANT/get_subdistricts.php')
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       this.items2 = data;
  //       console.log(data)
  //     });
  // }
  // initializeState() {
   
  //     this.http.get('http://student.crru.ac.th/591463046/SmartFarm/AIP_PLANT/get_geographies.php')
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       this.states = data;
  //     });
  // }

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

    console.log("test",contry);
    
    this.selectedDistricts = this.dataampor.filter(ampor => ampor.province_id == contry)
    console.log(this.selectedDistricts);
  }
  // input อำเภอ

  setAmporValues(sprovince){
    console.log("sprovince");
    console.log(sprovince);
   
    this.selectedAmpor = this.cities.filter(Ampor => Ampor.district_id == sprovince);

    console.log(this.selectedAmpor)
    console.log(this.cities)


  }
    // input ตำบล
  // setCityValues(sDistrict) {
  //   console.log(sDistrict);
  //   this.selectedCities = this.cities.filter(city => city.amphure_id == sDistrict);
  // }
}