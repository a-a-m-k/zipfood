import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authService: LoginService;
  constructor(private injector: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(LoginService);
    const token: string = this.authService.getToken();
    if(token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(request);
  }
}
