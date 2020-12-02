import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyaddPage } from './myadd';

@NgModule({
  declarations: [
    MyaddPage,
  ],
  imports: [
    IonicPageModule.forChild(MyaddPage),
  ],
})
export class MyaddPageModule {}
