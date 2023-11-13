import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegmentosService {
  private urlApi=config.apiUrl+'/api/segmentos';
  constructor(private http: HttpClient,private authService: AuthService) { }

 
  public getData():Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi, { headers });
  }
  public getDataByInstitucion(id:any):Observable<any>{
    const apiUrl = `${this.urlApi}/institucion/${id}`;
    return this.http.get<any>(apiUrl);
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
