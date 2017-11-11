import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameStoryPage } from './game-story';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    GameStoryPage

  ],
  imports: [
    IonicPageModule.forChild(GameStoryPage),
    ComponentsModule
  ],
})
export class GameStoryPageModule {}
