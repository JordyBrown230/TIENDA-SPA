import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './global';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = server.url;
  }

  // Create
  register(empleado: Empleado): Observable<any> {
    console.log(empleado);
    let empleadoJson = JSON.stringify(empleado);
    let params = 'data=' + empleadoJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'empleado', params, { headers: header });
  }

  // Read
  getAll(): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'empleado', { headers: header });
  }

  // Update
  update(empleado: Empleado): Observable<any> {
    let empleadoJson = JSON.stringify(empleado);
    let params = 'data=' + empleadoJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url + 'empleado/' + empleado.idEmpleado, params, { headers: header });
  }

  // Delete
  delete(empleadoId: number): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url + 'empleado/' + empleadoId, { headers: header });
  }

  getById(empleadoId: number): Observable<any>{
    let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'empleado/'+empleadoId,{headers:header});
}
  getByCed(empleadoCed: string): Observable<any>{
    let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'empleado/cedula/'+empleadoCed,{headers:header});
}
}
