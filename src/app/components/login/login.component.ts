//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Usuario } from 'src/app/models/usuario';
import{ UsuarioService } from 'src/app/services/usuario.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent {
  public usuario:Usuario;
  public status:number;
  public remember:boolean;
  mostrarContrasena: boolean = false;

  constructor(
    private _usuarioService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.status=-1;
    this.usuario= new Usuario();
    this.remember = false;
  }

  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }


  onSubmit(form:any){
    if(this.remember){
    }

    this._usuarioService.login(this.usuario).subscribe({
      next:(response:any)=>{
        if(response.status!=401){
          console.log(response);
          localStorage.setItem("token",response);
          this._usuarioService.getIdentityFromAPI().subscribe({
            next:(response:any)=>{ 
              Swal.fire('¡Login exitoso!', response.message, 'success');            
              localStorage.setItem("identity",JSON.stringify(response));
            },
            error:(err:Error)=>{
    
            }
          });
          this._router.navigate(['/home']);
    
        }else{
          this.status=0;
          let counter=timer(3000);
          counter.subscribe(n=>{
            this.status=-1;
          });
          Swal.fire('¡Error!', 'Usuario y/o contraseña inválidos', 'error');  
        }
      },
      error:(err:Error)=>{
        console.log(err);
      }
    });

  }

 

}