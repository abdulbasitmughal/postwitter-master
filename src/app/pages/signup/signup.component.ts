import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@/core/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup-component',
  templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {
  error = false;
  errorMessage = '';
  signUpForm: FormGroup;
  isConfirmPasswordMatch = false;

  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.initSignUpForm();

    this.password.valueChanges.subscribe(data => {
      this.isConfirmPasswordMatch = (this.confirmPassword.value === data);
    });

    this.confirmPassword.valueChanges.subscribe(data => {
      this.isConfirmPasswordMatch = (this.password.value === data);
    });
  }

  public onSignUp(): void {
    if (this.signUpForm.invalid) {
      this.error = true;
      this.errorMessage = 'Fix errors in form';
      return;
    }

    this.authService.signUp(this.signUpForm.value).subscribe(
      resp => {
        this.router.navigate(['login']);
      },
      ({error}: HttpErrorResponse) => {
        this.error = true;
        this.errorMessage = error.message;
      }
    );
  }

  private initSignUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
}
