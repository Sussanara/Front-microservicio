import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private baseEndpoint = 'http://localhost:8090/api/trabajadores';

  //private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  protected cabeceras: HttpHeaders = new HttpHeaders()
  .set('Content-Type','application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
  constructor(private http: HttpClient) { }

  public listar(): Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(this.baseEndpoint);
  }

  public listarPaginas(page: string, size: string): Observable<any> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`, {params: params});
  }

  public ver(id:number): Observable<Trabajador> {
    return this.http.get<Trabajador>(`${this.baseEndpoint}/${id}`);
  }

  public crear(trabajador: Trabajador): Observable<Trabajador> {
    return this.http.post<Trabajador>(this.baseEndpoint, trabajador, 
      { headers: this.cabeceras});
  }

  public editar(trabajador: Trabajador): Observable<Trabajador> {
    return this.http.put<Trabajador>(`${this.baseEndpoint}/${trabajador.id}`, trabajador, 
    { headers: this.cabeceras});
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
}
