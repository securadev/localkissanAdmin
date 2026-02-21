import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private baseUrl = 'https://localkissan-api.securadev.com/auth';

  constructor(private http: HttpClient) {}

  /* ==========================
        LOGIN
  ========================== */
  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  /* ==========================
        REGISTER
  ========================== */
  // register(data: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/register`, data);
  // }

  
  /* ==========================
        LOGOUT
  ========================== */
  logout(): void {
    localStorage.removeItem('token');
  }

  /* ==========================
        TOKEN MANAGEMENT
  ========================== */
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
