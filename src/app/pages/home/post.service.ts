import { Injectable } from '@angular/core';
import { HttpClientWrapper } from '@/shared/http-client.wrapper';
import { Observable } from 'rxjs';
import { PostFormModel, PostModel } from '@/shared/models';

@Injectable()
export class PostService {
  constructor(private http: HttpClientWrapper) {}

  public submit(postPayload: PostFormModel): Observable<any> {
    return this.http.post('/posts', postPayload);
  }

  public publicPosts(): Observable<any> {
    return this.http.get('/posts');
  }
}
