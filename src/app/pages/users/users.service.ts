import { Injectable } from '@angular/core';
import { HttpClientWrapper } from '@/shared/http-client.wrapper';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClientWrapper) {}

  public getAllUsers(): Observable<any> {
    return this.http.get('/users');
  }
}
