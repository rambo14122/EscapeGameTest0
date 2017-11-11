import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameChatPage } from './game-chat';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    GameChatPage,
  ],
  imports: [
    IonicPageModule.forChild(GameChatPage),
    ComponentsModule
  ],
})
export class GameChatPageModule {}
