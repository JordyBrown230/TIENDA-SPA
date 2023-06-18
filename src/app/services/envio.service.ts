import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import{server} from './global';
import { Envio} from '../models/envio';

@Injectable({
    providedIn: 'root'
}) export class EnvioService{
    private url:string;
    constructor(public _http:HttpClient){
        this.url=server.url;
    }
    //create
    register(envio:Envio):Observable<any>{
        console.log(envio);
        let envioJson=JSON.stringify(envio);
        let params='data='+envioJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'envio',params,{headers:header});
    }
    //read
    getAll():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'envio',{headers:header});
    }
    //update
    update(envio: Envio): Observable<any> {
        let envioJson = JSON.stringify(envio);
        let params = 'data=' + envioJson;
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.put(this.url+'envio/'+envio.idEnvio, params, { headers: header });
    }
    //delete
    delete(envioId: number): Observable<any> {
        let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete(this.url+'envio/'+envioId, { headers: header });
    }

    //getByID
    getById(envioId: string): Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'envio/'+envioId,{headers:header});
    }
}