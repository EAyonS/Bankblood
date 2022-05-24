import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from '@angular/forms';
//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
//import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [LoginComponent, SignComponent, /*ForgotPasswordComponent, VerifyEmailComponent*/],
  imports: [CommonModule, AuthRoutingModule, AngularFireAuthModule, FormsModule],
})
export class AuthModule {}