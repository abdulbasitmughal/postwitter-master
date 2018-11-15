import { Injectable } from '@angular/core';
import { UserInfoModel, LoginResponseModel } from '@/shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserDataStore {
  public userInfo(): UserInfoModel {
    return {
      email: this.email,
      token: this.token,
      handle: this.userHandle
    };
  }

  public setUserInfo(loginResponse: LoginResponseModel): void {
    localStorage.setItem('user-handle', this.createUserHandleFromEmailAddress(loginResponse.Email));
    localStorage.setItem('email', loginResponse.Email);
    localStorage.setItem('token', loginResponse.Token);
  }

  private createUserHandleFromEmailAddress(email: string): string {
    return `@${email.split('@')[0]}`;
  }

  public destroyUserData(): void {
    localStorage.clear();
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get email(): string {
    return localStorage.getItem('email') || '';
  }

  get userHandle(): string {
    return localStorage.getItem('user-handle') || '';
  }
}
