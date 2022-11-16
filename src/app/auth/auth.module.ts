import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginFormComponentModule } from './login-form/login-form.component.module';
import { RegisterFormComponentModule } from './register-form/register-form.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginFormComponentModule,
    RegisterFormComponentModule,
    AuthPageRoutingModule,
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
