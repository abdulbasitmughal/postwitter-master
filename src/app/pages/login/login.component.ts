import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@/core/auth.service';
import { UserDataStore } from '@/shared/user-data.store';

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userData: UserDataStore
  ) {}

  ngOnInit() {
    this.initLoginForm();
  }

  public onLogin(): void {
    this.authService.login(this.loginForm.value).subscribe(
      loginResponse => {
        console.log(loginResponse);
        this.userData.setUserInfo(loginResponse);
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 500);
      },
      error => {
        this.error = !this.error;
      }
    );
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }
}
