import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (!this.isValidAccessToken()) {
      return true;
    }

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  private isValidAccessToken() {
    return localStorage.getItem('access_token') === undefined ||
            localStorage.getItem('access_token') === '' ||
            localStorage.getItem('access_token') === null;
  }
}
