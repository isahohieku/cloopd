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
export class PropertyService {
  readonly DEALS_URL = `${environment.API_ENDPOINT}properties`;
  constructor(public router: Router, private http: HttpClient) {}

  getProperties(): Observable<IResponse | string> {
    return this.http.get<IResponse>(this.DEALS_URL).pipe(
      map((response: IResponse) => response),
      catchError(() => of('Properties Error')),
    );
  }
}
