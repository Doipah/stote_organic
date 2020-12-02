import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryOrderDetailPage } from './history-order-detail';

@NgModule({
  declarations: [
    HistoryOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryOrderDetailPage),
  ],
})
export class HistoryOrderDetailPageModule {}
