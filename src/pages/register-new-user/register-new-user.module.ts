import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterNewUserPage } from './register-new-user';

@NgModule({
  declarations: [
    RegisterNewUserPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterNewUserPage),
  ],
})
export class RegisterNewUserPageModule {}
