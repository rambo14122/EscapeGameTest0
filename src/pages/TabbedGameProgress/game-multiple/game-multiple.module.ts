import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameMultiplePage } from './game-multiple';

@NgModule({
  declarations: [
    GameMultiplePage,
  ],
  imports: [
    IonicPageModule.forChild(GameMultiplePage),
  ],
})
export class GameMultiplePageModule {}
