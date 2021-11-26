import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { IUser } from 'projects/clooper/common/ClooperTypes/user';
import { Observable, map, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly USER_URL = `${environment.API_ENDPOINT}deals`;
  private readonly signupRequirement = ['email', 'password', 'first_name', 'last_name', 'accepts_terms'];
  constructor(
    public router: Router,
    private http: HttpClient,
  ) { }

  signup(data: IUser): Observable<Object> {
    if (!this.signupRequirement.every(field => data[field])) throwError(() => 'All fields required');
      return this.http
        .post(this.USER_URL, data)
        .pipe(map((response: Object) => response),
          catchError(() => of('Users Error'))
        );
  }
}
