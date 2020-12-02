import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateaddressEditPage } from './createaddress-edit';

@NgModule({
  declarations: [
    CreateaddressEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateaddressEditPage),
  ],
})
export class CreateaddressEditPageModule {}
