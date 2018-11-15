import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpClientWrapper } from '@/shared/http-client.wrapper';
import { LoginFormModel, SignUpFormModel, LoginResponseModel } from '@/shared/models/';
import { UserDataStore } from '@/shared/user-data.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClientWrapper, private jwtHelper: JwtHelperService, private userData: UserDataStore) {}

  public login(loginPayload: LoginFormModel): Observable<LoginResponseModel> {
    console.log(JSON.stringify(loginPayload));
    return this.http.post('/login', loginPayload);
  }

  public signUp(signUpPayload: SignUpFormModel): Observable<any> {
    console.log(JSON.stringify(signUpPayload));
    return this.http.post('/signup', signUpPayload);
  }

  public isAuthenticated(): boolean {
    const token = this.userData.token;

    if (!token) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }

}
