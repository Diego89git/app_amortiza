import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmortizacionService {
  private urlApi=config.apiUrl+'/api/';
  constructor(private http: HttpClient,private authService: AuthService) { }
 
  public getInfo():Observable<any>{
    return this.http.get<any>(this.urlApi+'info');
  }
  public getInfoByIdInstitucion(id:any):Observable<any>{
    const apiUrl = `${this.urlApi}info/${id}`;
    return this.http.get<any>(apiUrl);
  }
  public generarTabla(data:any):Observable<any>{
    return this.http.post<any>(this.urlApi+'amortiza',data);
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
