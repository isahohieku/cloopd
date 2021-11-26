import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { UserResponse } from 'projects/clooper/common/ClooperTypes/response';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly AUTH_URL = `${environment.API_ENDPOINT}auth`;
  private isLogin = false;
  constructor(
    public router: Router,
    private http: HttpClient,
  ) { }

  login(email: string, password: string): Observable<Object> {
    return this.http
      .post(this.AUTH_URL, {
        email,
        password
      })
      .pipe(map((response: Object) => response),
        tap((credentials) => {
          if (credentials) {
            this.isLogin = true;
            this.router.navigate(['/dashboard']).catch();
          }
        }),
        catchError(() => of('Login Error'))
      );
  }

  isAuthenticated(): boolean {
		return this.isLogin;
	}
}
