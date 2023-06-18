import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './global';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = server.url;
  }

  // Create
  register(categoria: Categoria): Observable<any> {
    console.log(categoria);
    let categoriaJson = JSON.stringify(categoria);
    let params = 'data=' + categoriaJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'categoria', params, { headers: header });
  }

  // Read
  getAll(): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'categoria', { headers: header });
  }

  // Update
  update(categoria: Categoria): Observable<any> {
    let categoriaJson = JSON.stringify(categoria);
    let params = 'data=' + categoriaJson;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url + 'categoria/' + categoria.idCategoria, params, { headers: header });
  }

  // Delete
  delete(categoriaId: number): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url + 'categoria/' + categoriaId, { headers: header });
  }

  getById(categoriaId: number): Observable<any>{
    let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'categoria/'+categoriaId,{headers:header});
}
}
