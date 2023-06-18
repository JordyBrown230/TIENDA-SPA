import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './global';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = server.url;
  }

  // Create
  register(vehiculo: Vehiculo): Observable<any> {
    console.log(vehiculo);
    let vehiculoJson = JSON.stringify(vehiculo);
    let params = 'data=' + vehiculoJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'vehiculo', params, { headers: header });
  }

  // Read
  getAll(): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'vehiculo', { headers: header });
  }

  // Update
  update(vehiculo: Vehiculo): Observable<any> {
    let vehiculoJson = JSON.stringify(vehiculo);
    let params = 'data=' + vehiculoJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url + 'vehiculo/' + vehiculo.numUnidad, params, { headers: header });
  }

  // Delete
  delete(vehiculoId: number): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url + 'vehiculo/' + vehiculoId, { headers: header });
  }

  getById(vehiculoId: number): Observable<any>{
    let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'vehiculo/'+vehiculoId,{headers:header});
  }

}
