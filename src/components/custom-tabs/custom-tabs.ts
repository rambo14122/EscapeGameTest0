import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CustomTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-tabs',
  templateUrl: 'custom-tabs.html'
})
export class CustomTabsComponent {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  goToGameStory()
  {
    this.navCtrl.push("GameStoryPage");

  }
  goToGameChat(){

    this.navCtrl.push("GameChatPage");
  }
  goToGameInfo()
  {
  this.navCtrl.push("GameInfoPage");
  }
}
