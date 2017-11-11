import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameInfoPage } from './game-info';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    GameInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GameInfoPage),
    ComponentsModule
  ],
})
export class GameInfoPageModule {}
