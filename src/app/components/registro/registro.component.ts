//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Usuario } from 'src/app/models/usuario';
import { Cliente } from 'src/app/models/cliente';
import{ ClienteService } from 'src/app/services/cliente.service';
import{ UsuarioService } from 'src/app/services/usuario.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
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
export class RegistroComponent {
  public usuario:Usuario;
  public cliente:Cliente;
  public status:number;
  public fechaFormateada:any;
  datosPersonalesEnviados: boolean = false;
  public confirmarPassword:string;

  constructor(
    private _clienteService:ClienteService,
    private _usuarioService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.status=-1;
    this.usuario= new Usuario();
    this.cliente= new Cliente();
    this.confirmarPassword ="";
  }

  enviarDatosPersonales(form:any) {
      console.log(this.cliente);
      this.fechaFormateada = this.cliente.fechaNac.toString();//cambiar formato de la fecha que da el componente DatePicker
      this.cliente.fechaNac = this.fechaFormateada;
      this._clienteService.register(this.cliente).subscribe({
        next:(response:any)=>{
          console.log(response.message);
          Swal.fire('¡Registro guardado!', response.message, 'success');
          this.datosPersonalesEnviados = true;
        },
        error:(err:HttpErrorResponse)=>{
          //console.log(err.error.message);
          Swal.fire('¡Error!', err.error.message + ', favor verifica los datos y vuelve a intentarlo', 'error');
        }
      });
    }
  
  enviarDatosUsuario(form:any) {
    console.log(this.usuario);
    this.usuario.tipoUsuario='cliente';
    this.usuario.cliente = this.cliente.cedula;
    this._usuarioService.register(this.usuario).subscribe({
      next:(response:any)=>{
        console.log(response.message);
        Swal.fire('¡Registro guardado!', response.message, 'success');
      },
      error:(err:HttpErrorResponse)=>{
        //console.log(err.error.message);
        Swal.fire('¡Error!', err.error.message + ', favor verifica los datos y vuelve a intentarlo', 'error');
      }
    });
  }
}

