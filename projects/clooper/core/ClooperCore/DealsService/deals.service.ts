import type { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Router } from '@angular/router';
import { environment } from 'environments/environment';
import type { IResponse } from 'projects/clooper/common/ClooperTypes/response';
import type { Observable } from 'rxjs';
import { map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  readonly DEALS_URL = `${environment.API_ENDPOINT}deals`;
  constructor(public router: Router, private http: HttpClient) {}

  getDeals(): Observable<IResponse | string> {
    return this.http.get<IResponse>(this.DEALS_URL).pipe(
      map((response: IResponse) => response),
      catchError(() => of('Deals Error')),
    );
  }
}
