import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@/env/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientWrapper {

  constructor(private http: HttpClient) {}

  post<T>(apiEndPoint: string, body: any = null): Observable<T> {
    return this.http.post<T>(this.fullUrl(apiEndPoint), body);
  }

  get<T>(apiEndPoint: string): Observable<T> {
    return this.http.get<T>(this.fullUrl(apiEndPoint));
  }

  put<T>(apiEndPoint: string, body: any = null): Observable<T> {
    return this.http.put<T>(this.fullUrl(apiEndPoint), body);
  }

  delete<T>(apiEndPoint: string, body: any = null): Observable<T> {
    return this.http.delete<T>(this.fullUrl(apiEndPoint));
  }

  private fullUrl(apiEndpoint: string): string {
    return env.API_BASE_URL + apiEndpoint;
  }
}
