import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;
  constructor( public db: AngularFireDatabase,public navCtrl: NavController) {
    this.items = db.list('TestDB').valueChanges();
  }
  registerNewUser()
  {
    this.navCtrl.push("RegisterNewUserPage");
  }
  visitorLogin()
  {
    this.navCtrl.push("GameSelectionPage");
  }

}
