import { Injectable } from '@angular/core';
import type { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import type { Observable } from 'rxjs';

enum HttpProtocols {
  http = 'http',
  https = 'https',
}
const addHttpProtocol = (url: string): string => {
  return !url.includes(HttpProtocols.http) && !url.includes(HttpProtocols.https)
    ? `${HttpProtocols.https}://${url}`
    : url;
};

@Injectable()
export class URLInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({ url: addHttpProtocol(request.url) });
    return next.handle(clonedRequest);
  }
}
