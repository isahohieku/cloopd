import type { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import type { UserResponse } from 'projects/clooper/common/ClooperTypes/response';
import type { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly AUTH_URL = `${environment.API_ENDPOINT}auth`;
  private isLogin = false;
  constructor(public router: Router, private http: HttpClient) {}

  login(email: string, password: string): Observable<UserResponse | string> {
    return this.http
      .post<UserResponse>(this.AUTH_URL, {
        email,
        password,
      })
      .pipe(
        map((response: UserResponse) => response),
        tap((credentials) => {
          if (credentials) {
            this.isLogin = true;
            this.router.navigate(['/dashboard']).catch();
          }
        }),
        catchError(() => of('Login Error')),
      );
  }

  isAuthenticated(): boolean {
    return this.isLogin;
  }
}
