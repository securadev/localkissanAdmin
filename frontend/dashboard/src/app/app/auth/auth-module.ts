import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Register } from './register/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from './login/login';


@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
     ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
