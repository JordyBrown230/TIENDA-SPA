import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './global';
import { DireccionCliente } from '../models/direccionCliente';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = server.url;
  }

  // Create
  register(direccion: DireccionCliente): Observable<any> {
    console.log(direccion);
    let categoriaJson = JSON.stringify(direccion);
    let params = 'data=' + categoriaJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'direccioncliente', params, { headers: header });
  }

  // Read
  getAll(): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'direccioncliente', { headers: header });
  }

  // Update
  update(direccion: DireccionCliente): Observable<any> {
    let categoriaJson = JSON.stringify(direccion);
    let params = 'data=' + categoriaJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url + 'direccioncliente/' + direccion.idDireccionesCliente, params, { headers: header });
  }

  // Delete
  delete(direccionId: number): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url + 'direccioncliente/' + direccionId, { headers: header });
  }

  getById(direccionId: number): Observable<any>{
    let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'telefonocliente/'+direccionId,{headers:header});
}
}