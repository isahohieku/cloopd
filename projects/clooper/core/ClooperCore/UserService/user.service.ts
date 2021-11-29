import type { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Router } from '@angular/router';
import { environment } from 'environments/environment';
import type { UserResponse } from 'projects/clooper/common/ClooperTypes/response';
import type { IUser } from 'projects/clooper/common/ClooperTypes/user';
import type { Observable } from 'rxjs';
import { map, catchError, of, throwError } from 'rxjs';

type useInfo = 'email' | 'password' | 'first_name' | 'last_name' | 'accepts_terms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly USER_URL = `${environment.API_ENDPOINT}deals`;
  private readonly signupRequirement: useInfo[] = [
    'email',
    'password',
    'first_name',
    'last_name',
    'accepts_terms',
  ];
  constructor(public router: Router, private http: HttpClient) {}

  signup(data: IUser): Observable<UserResponse | string> {
    if (!this.signupRequirement.every((item) => data[item]))
      throwError(() => 'All fields required');
    return this.http.post<UserResponse>(this.USER_URL, data).pipe(
      map((response: UserResponse) => response),
      catchError(() => of('Users Error')),
    );
  }
}
