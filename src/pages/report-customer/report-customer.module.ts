import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportCustomerPage } from './report-customer';

@NgModule({
  declarations: [
    ReportCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportCustomerPage),
  ],
})
export class ReportCustomerPageModule {}
