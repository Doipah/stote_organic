import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginedPage } from './logined';

@NgModule({
  declarations: [
    LoginedPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginedPage),
  ],
})
export class LoginedPageModule {}
