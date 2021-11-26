import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable, map, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  readonly DEALS_URL = `${environment.API_ENDPOINT}deals`;
  constructor(
    public router: Router,
    private http: HttpClient,
  ) { }

  getDeals(): Observable<Object> {
    return this.http
      .get(this.DEALS_URL)
      .pipe(map((response: Object) => response),
        catchError(() => of('Deals Error'))
      );
  }
}
