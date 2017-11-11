import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupSelectionPage } from './group-selection';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    GroupSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupSelectionPage),
    ComponentsModule
  ],
})
export class GroupSelectionPageModule {}
