import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormComponent } from './register-form.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent]
})
export class RegisterFormComponentModule {}
