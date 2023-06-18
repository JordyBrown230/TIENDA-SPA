import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import{server} from './global';
import { Cliente } from '../models/cliente';


@Injectable({
    providedIn: 'root'
}) export class ClienteService{
    private url:string;
    constructor(public _http:HttpClient){
        this.url=server.url;
    }
    //create
    register(envio:Cliente):Observable<any>{
        console.log(envio);
        let envioJson=JSON.stringify(envio);
        let params='data='+envioJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'cliente',params,{headers:header});
    }
    //read
    getAll():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'cliente',{headers:header});
    }
    //update
    update(cliente: Cliente): Observable<any> {
        let envioJson = JSON.stringify(cliente);
        let params = 'data=' + envioJson;
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.put(this.url+'cliente/'+cliente.cedula, params, { headers: header });
    }
    //delete
    delete(clienteId: string): Observable<any> {
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete(this.url+'cliente/'+clienteId, { headers: header });
    }

    //getByID
    getByCed(clienteId: string): Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'cliente/'+clienteId,{headers:header});
    }



}