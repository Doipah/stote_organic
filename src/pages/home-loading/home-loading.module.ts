import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeLoadingPage } from './home-loading';

@NgModule({
  declarations: [
    HomeLoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeLoadingPage),
  ],
})
export class HomeLoadingPageModule {}
