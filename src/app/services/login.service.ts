import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http
      .post(`${environment.apiUrl}/login`, { 'username': user.username, 'password': user.password })
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}