import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public auth: LoginService,
    public router: Router
  ) { }
  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}