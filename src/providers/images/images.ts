import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagesProvider {

  private _READER : any  =	new FileReader();

  //private baseUrl="http://localhost:81/veget_serve";

  private _REMOTE_URI : string = "";// this.baseUrl +"/SmartFarm/AIP_PLANT/uploadfile.php";

  constructor(public http: Http) {
    console.log('Hello ImagesProvider Provider');
  }

  handleImageSelection(event : any) : Observable<any>
   {
      let file : any= event.target.files[0];

      this._READER.readAsDataURL(file);
      return Observable.create((observer) =>
      {
         this._READER.onloadend = () =>
         {
            observer.next(this._READER.result);
            observer.complete();
         }
      });
   }

   isCorrectFileType(file)
   {
      return (/^(gif|jpg|jpeg|png)$/i).test(file);
   }

   uploadImageSelection(file 		: string,
                        mimeType 	: string) : Observable<any>
   {
      let headers: any	= new HttpHeaders({'Content-Type' : 'application/octet-stream'}),
       fileName : any   = Date.now() + '.' + mimeType,
       options 	: any	= { "name" : fileName, "file" : file };
       //console.log(this._REMOTE_URI);
   		return this.http.post(this._REMOTE_URI, JSON.stringify(options), headers);
   }

    uploadImage(file:string,
                mimeType:string,
                filename:string,
                path:string,
                url:string) : Observable<any>
   {
      let headers: any	= new HttpHeaders({'Content-Type' : 'application/octet-stream'}),
       //fileName : any   = Date.now() + '.' + mimeType,
       options 	: any	= { "name" : filename, "file" : file ,"path" : path};
       //console.log(this._REMOTE_URI);
   		return this.http.post(url, JSON.stringify(options), headers);
   }

}
