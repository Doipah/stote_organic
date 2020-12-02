import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoresPage } from './histores';

@NgModule({
  declarations: [
    HistoresPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoresPage),
  ],
})
export class HistoresPageModule {}
