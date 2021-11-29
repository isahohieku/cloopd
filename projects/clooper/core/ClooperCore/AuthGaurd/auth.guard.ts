import { Injectable } from '@angular/core';
import type { CanActivate, Router, UrlTree } from '@angular/router';
import type { Observable } from 'rxjs';
import type { AuthService } from '../AuthService/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']).catch();
      return false;
    }
    return true;
  }
}
