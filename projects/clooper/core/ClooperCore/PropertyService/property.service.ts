import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  readonly DEALS_URL = `${environment.API_ENDPOINT}properties`;
  constructor(
    public router: Router,
    private http: HttpClient,
  ) { }

  getProperties(): Observable<Object> {
    return this.http
      .get(this.DEALS_URL)
      .pipe(map((response: Object) => response),
        catchError(() => of('Properties Error'))
      );
  }
}
