import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataStore } from '@/shared/user-data.store';
// import { UserDataStore } from '@app/shared/store/user-data.store';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private userData: UserDataStore) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.userData.token;

    if (authToken) {
      const clonedAsAuthorized = req.clone({
        headers: req.headers
          .set('Authorization', `Bearer ${authToken}`)
          .set('content-type', 'application/json')
      });

      return next.handle(clonedAsAuthorized);
    }

    const cloned = req.clone({
      headers: req.headers
        .set('content-type', 'application/json')
    });

    return next.handle(cloned);
  }

}