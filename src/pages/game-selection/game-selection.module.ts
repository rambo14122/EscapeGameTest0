import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ComponentsModule} from "../../components/components.module";
import {GameSelectionPage} from "./game-selection";

@NgModule({
  declarations: [
    GameSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(GameSelectionPage),
    ComponentsModule
  ],
})
export class GameSelectionPageModule {}
