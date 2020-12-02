import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateaddressPage } from './createaddress';

@NgModule({
  declarations: [
    CreateaddressPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateaddressPage),
  ],
})
export class CreateaddressPageModule {}
