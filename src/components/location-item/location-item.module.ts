import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CustomStatusBarComponentModule} from "../custom-status-bar/custom-status-bar.module"
import {LocationItemComponent} from "./location-item";

@NgModule({
  declarations: [
    LocationItemComponent,
  ],
  imports: [
    IonicModule,
    CustomStatusBarComponentModule
  ],
  exports: [
    LocationItemComponent
  ]
})
export class LocationItemComponentModule {}
