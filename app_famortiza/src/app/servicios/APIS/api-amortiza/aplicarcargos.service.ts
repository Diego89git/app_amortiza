import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicarcargosService {
  private urlApi=config.apiUrl+'/api/aplicarcargos';
  constructor(private http: HttpClient,private authService: AuthService) { }
 
  public getActivosById(id:any):Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/act/${id}`;
    return this.http.get<any>(apiUrl, { headers });
  }
  public getPasivosById(id:any):Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/eli/${id}`;
    return this.http.get<any>(apiUrl, { headers });
  }
  public aplicarTodos(idCargo:any):Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/todos/${idCargo}`;
    return this.http.get<any>(apiUrl, { headers });
  }
  public aplicarByTasa(idCargo:any, idTasa:any):Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/si/${idCargo}/tasa/${idTasa}`;
    return this.http.get<any>(apiUrl, { headers });
  }
  public quitarTodos(idCargo:any):Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/ninguno/${idCargo}`;
    return this.http.get<any>(apiUrl, { headers });
  }
  public quitarByTasa(idCargo:any, idTasa:any):Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/no/${idCargo}/tasa/${idTasa}`;
    return this.http.get<any>(apiUrl, { headers });
  }
  
 
}
