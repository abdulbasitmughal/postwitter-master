import { Injectable } from '@angular/core';
import { HttpClientWrapper } from '@/shared/http-client.wrapper';
import { Observable } from 'rxjs';
import { PostModel } from '@/shared/models';

@Injectable()
export class UserPostService {
  constructor(private http: HttpClientWrapper) {}

  public getPostsBy(userEmail: string): Observable<any> {
    return this.http.get(`/users/${userEmail}/posts`);
  }
}
