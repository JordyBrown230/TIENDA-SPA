import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import{server} from './global';
import { Proveedor } from '../models/proveedor';


@Injectable({
    providedIn: 'root'
}) export class ProveedorService{
    private url:string;
    constructor(public _http:HttpClient){
        this.url=server.url;
    }
    //create
    register(proveedor:Proveedor):Observable<any>{
        console.log(proveedor);
        let proveedorJson=JSON.stringify(proveedor);
        let params='data='+proveedorJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proveedor',params,{headers:header});
    }
    //read
    getAll():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'proveedor',{headers:header});
    }
    //update
    update(proveedor: Proveedor): Observable<any> {
        let proveedorJson = JSON.stringify(proveedor);
        let params = 'data=' + proveedorJson;
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.put(this.url+'proveedor/'+proveedor.idProveedor, params, { headers: header });
    }
    //delete
    delete(proveedorId: number): Observable<any> {
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete(this.url+'proveedor/'+proveedorId, { headers: header });
    }

    //getByID
    getById(proveedorId: number): Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'proveedor/'+proveedorId,{headers:header});
    }



}