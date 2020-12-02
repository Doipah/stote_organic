import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartproductPage } from './cartproduct';
import {PayPal} from '@ionic-native/paypal';
@NgModule({
  declarations: [
    CartproductPage,
  ],
  imports: [
    IonicPageModule.forChild(CartproductPage),
  ],
  providers:[
    PayPal
  ]
})
export class CartproductPageModule {}
