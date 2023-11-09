import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi=config.apiUrl+'/api/auth';
  constructor(private http: HttpClient) {}

  // Método para iniciar sesión y obtener el token
  public login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/login`, credentials);
  }

  // Método para almacenar el token
  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Método para obtener el token almacenado
  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para cerrar sesión
  public logout(): void {
    localStorage.removeItem('token');

  }
}
