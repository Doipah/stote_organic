import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryorderPage } from './historyorder';

@NgModule({
  declarations: [
    HistoryorderPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryorderPage),
  ],
})
export class HistoryorderPageModule {}
