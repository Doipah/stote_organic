import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the LanguageEnProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LanguageEnProvider {

  public tet: string = "MENU";
  public title:string = "test";
  public description:string = "test";
  public bo :boolean;

  constructor(public http: HttpClient, private storage: Storage, private _translate: TranslateService) {
    console.log('Hello LanguageEnProvider Provider');
  }


  reload(boolean:boolean) {
    // this.storage.get('lang').then((ress) => {
     
      if(boolean==true){
        console.log('EMTY',boolean );
        this._translate.setDefaultLang('en');
        this._translate.use('en');
      }else{
        console.log('EMTY',boolean );
        this._translate.setDefaultLang('th');
        this._translate.use('th');
      }
    
       
      
    // })

    // _initialiseTranslation() {
      setTimeout(() => {
        this.title = this._translate.instant("home.heading");
        this.description = this._translate.instant("home.description");
        console.log('EMTY',   this.title );
  
      }, 250);
   // }
  }
}









