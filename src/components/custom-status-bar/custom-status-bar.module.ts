import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CustomStatusBarComponent} from "./custom-status-bar";



@NgModule({
  declarations: [
    CustomStatusBarComponent,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    CustomStatusBarComponent
  ]
})
export class CustomStatusBarComponentModule {}
