import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CustomTabsComponent} from "./custom-tabs";

@NgModule({
  declarations: [
    CustomTabsComponent,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    CustomTabsComponent
  ]
})
export class CustomTabsComponentModule {}
