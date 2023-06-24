import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import{server} from './global';
import { Usuario } from '../models/usuario';


@Injectable({
    providedIn: 'root'
}) export class UsuarioService{
    private url:string;
    constructor(public _http:HttpClient){
        this.url=server.url;
    }
    getAll():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'usuario',{headers:header});
    }
    register(usuario:Usuario):Observable<any>{
        let usuarioJson=JSON.stringify(usuario);
        let params='data='+usuarioJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'usuario',params,{headers:header});
    }
    login(usuario:Usuario):Observable<any>{
        let usuarioJson=JSON.stringify(usuario);
        let params='data='+usuarioJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'); 
        let option={
            headers:header
        }
        return this._http.post(this.url+'usuario/login',params,option);
    }
    
    getIdentityFromAPI():Observable<any>{
        let header;
        let token=localStorage.getItem('token');        
        if(token){
            header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
            .set('beartoken',token);         
        }else{
            header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'); 
        }
        let option={
            headers:header
        }
        return this._http.get(this.url+"usuario/getidentity",option);   
        
    }
    getToken(){
        return localStorage.getItem("token");
    }
    getIdentity(){
        let identity=localStorage.getItem("identity");
        if(identity){
            return JSON.parse(identity);
        }
        return null;
    }

    compareToken(): Observable<any> {
        let header;
        let token = this.getToken();
        console.log(token);
        
        if (token) {
          header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('beartoken', token);
        } else {
          header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        }
        
        let options = {
          headers: header
        };
      
        return this._http.post(this.url + 'user/checktoken', {}, options);
      }

}