import { NgModule } from '@angular/core';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [SignupRoutingModule, SharedModule, PasswordStrengthBarModule]
})
export class SignupModule {}
