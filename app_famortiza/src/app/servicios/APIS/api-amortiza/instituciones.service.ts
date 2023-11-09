import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {
  private urlApi=config.apiUrl+'/api/instituciones';
  constructor(private http: HttpClient,private authService: AuthService) { }

 
  public getData():Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi, { headers });
  }
  public postData(data: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi, data, { headers });
  }
  public putData(id: number, data: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/${id}`;
    return this.http.put<any>(apiUrl, data, { headers });
  }
  public deleteData(id: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    const apiUrl = `${this.urlApi}/${id}`;
    return this.http.delete<any>(apiUrl, { headers });
  }
}
