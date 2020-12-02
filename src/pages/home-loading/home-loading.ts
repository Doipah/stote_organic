import { Component,ViewChild } from '@angular/core';


import { IonicPage, NavController, NavParams, ToastController, Toast, AlertController, LoadingController, Platform,Slides , Content } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ReportPage } from '../report/report';
import { ImagesProvider } from '../../providers/images/images';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';




@IonicPage()
@Component({
  selector: 'page-home-loading',
  templateUrl: 'home-loading.html',
})
export class HomeLoadingPage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  @ViewChild('scroll') scroll: Content;

  SwipedTabsIndicator :any= null;
  tabElementWidth_px :number= 100;
  tabs:any=[];
 // splash = true;
  //secondPage = HomePage;
  public registrationForm: FormGroup;
  test1 :number =0;
  userName: string;
  tel:Number
  email:string;
  private readonly emailRegex = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`;

  imageURI:any=[null];
  private _SUFFIX : any=[""];
  public isWeb : boolean =false;
  private baseUrl:any="https://adminshop.kwanpat.com/API_shop/";
  private user;
  private fakeusesr: Array<any> = new Array (5);
  districts: any = [];
  booking_email1:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCrt: ToastController,
    public alrtCrt: AlertController,
    public loadingCtrl :LoadingController,
    public plt :Platform,
    public imagePro:ImagesProvider,
    private camera: Camera,
    public http: Http, public fb: FormBuilder,private storage: Storage){

    // this.secondPage = document.querySelector('.tabbar')


    // this.registrationForm = this.fb.group({
    //   'userName': [ "", Validators.compose([Validators.maxLength(20),Validators.minLength(3), Validators.pattern('^[ก-๏\s\n]+$'), Validators.required])],
    //   'tel':[ "", Validators.compose([Validators.maxLength(10),Validators.minLength(10), Validators.pattern('(^0)([1-9]){8}([0-9])$'), Validators.required])],
    //   'email':["",Validators.compose([Validators.pattern(this.emailRegex)])]
    // });
    

  }


  















}









