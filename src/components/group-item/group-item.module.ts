import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {GroupItemComponent} from "./group-item";
import {CustomStatusBarComponentModule} from "../custom-status-bar/custom-status-bar.module"

@NgModule({
  declarations: [
    GroupItemComponent,
  ],
  imports: [
    IonicModule,
    CustomStatusBarComponentModule
  ],
  exports: [
    GroupItemComponent
  ]
})
export class GroupItemComponentModule {}
