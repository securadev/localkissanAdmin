import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Auth } from '../../services/auth';  // adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  /* ==========================
        FOR NORMAL ROUTES
  ========================== */
  canActivate(): boolean {
    return this.checkAuth();
  }

  /* ==========================
        FOR LAZY MODULES
  ========================== */
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.checkAuth();
  }

  /* ==========================
        COMMON AUTH CHECK
  ========================== */
  private checkAuth(): boolean {

    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}