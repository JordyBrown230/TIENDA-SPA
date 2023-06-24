import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import{server} from './global';
import { Producto } from '../models/producto';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
}) export class ProductoService{
    private url:string;
    constructor(public _http:HttpClient){
        this.url=server.url;
    }
    //create
    register(producto:Producto):Observable<any>{
        console.log(producto);
        let proveedorJson=JSON.stringify(producto);
        let params='data='+proveedorJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'producto',params,{headers:header});
    }
    //read
    getAll():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'producto',{headers:header});
    }      

    uploadImage(data:any,token:any):Observable<any>{
        let header=new HttpHeaders().set('beartoken',token);
        return this._http.post(this.url+"producto/upload",data,{headers:header});
    }
}