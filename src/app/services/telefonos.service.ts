import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './global';
import { TelefonoCliente } from '../models/telefonoCliente';

@Injectable({
  providedIn: 'root'
})
export class TelefonosService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = server.url;
  }

  // Create
  register(telefono: TelefonoCliente): Observable<any> {
    console.log(telefono);
    let categoriaJson = JSON.stringify(telefono);
    let params = 'data=' + categoriaJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'telefonocliente', params, { headers: header });
  }

  // Read
  getAll(): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'telefonocliente', { headers: header });
  }

  // Update
  update(telefono: TelefonoCliente): Observable<any> {
    let categoriaJson = JSON.stringify(telefono);
    let params = 'data=' + categoriaJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url + 'telefonocliente/' + telefono.idTelefonosCliente, params, { headers: header });
  }

  // Delete
  delete(telefonoId: number): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url + 'telefonocliente/' + telefonoId, { headers: header });
  }

  getById(telefonoId: number): Observable<any>{
    let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'telefonocliente/'+telefonoId,{headers:header});
}
}