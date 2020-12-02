import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromptPayPage } from './prompt-pay';

@NgModule({
  declarations: [
    PromptPayPage,
  ],
  imports: [
    IonicPageModule.forChild(PromptPayPage),
  ],
})
export class PromptPayPageModule {}
