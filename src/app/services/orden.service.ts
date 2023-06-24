import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './global';
import { Orden } from '../models/orden';
import { DetalleOrden } from '../models/detalleOrden';

@Injectable({
providedIn: 'root'
})
export class OrdenService {
    private url: string;

    constructor(public _http: HttpClient) {
        this.url = server.url;
    }

    // create
    register(orden: Orden): Observable<any> {
        console.log(orden);
        let ordenJson = JSON.stringify(orden);
        let params = 'data=' + ordenJson;
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'orden', params, { headers: header });
    }

    // read
    getAll(): Observable<any> {
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'orden', { headers: header });
    }

    // update
    update(orden: Orden): Observable<any> {
        let ordenJson = JSON.stringify(orden);
        let params = 'data=' + ordenJson;
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.put(this.url + 'orden/' + orden.idOrden, params, { headers: header });
    }

    // delete
    delete(ordenId: number): Observable<any> {
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete(this.url + 'orden/' + ordenId, { headers: header });
    }

    // getByID
    getById(ordenId: string): Observable<any> {
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'orden/' + ordenId, { headers: header });
    }

    generarOrden(orden: Orden, direccionEnvio: string,detallesOrden:Array<DetalleOrden>): Observable<any> {
        console.log(detallesOrden);
        const data = {
          tipoRetiro: orden.tipoRetiro,
          direccionEnvio: direccionEnvio,
          total: orden.total,
          ivaTotal: orden.ivaTotal, // esto debe verificarse.
          cliente: orden.cliente,
          detalles: detallesOrden
        };
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'generar-orden', data, { headers: header });
    }

}