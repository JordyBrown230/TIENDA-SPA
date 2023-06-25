//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Usuario } from 'src/app/models/usuario';
import { Empleado } from 'src/app/models/empleado';
import{ EmpleadoService } from 'src/app/services/empleado.service';
import{ UsuarioService } from 'src/app/services/usuario.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css'],
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
export class UsuarioRegistroComponent {
  public usuario:Usuario;
  public empleado:Empleado;
  public status:number;
  public fechaFormateadaNac:any;
  public fechaFormateadaIngreso:any;
  datosPersonalesEnviados: boolean = false;

  constructor(
    private _empleadoService:EmpleadoService,
    private _usuarioService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.status=-1;
    this.usuario= new Usuario();
    this.empleado= new Empleado();
  }

  enviarDatosPersonales(form:any) {
      console.log(this.empleado);
      this.formatFechas();
      this._empleadoService.register(this.empleado).subscribe({
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
    this.obtenerEmpleado(this.empleado.cedula);
    this.usuario.empleado = this.empleado.idEmpleado;
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

  obtenerEmpleado(empleadoCed: string): void {
    this._empleadoService.getByCed(empleadoCed).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.empleado = response.data;
        }
      },
      error: (err: Error) => {
        console.error(err.message);
      }
    });
  }

  formatFechas(){
    if (this.empleado.fechaNac instanceof Date) {
      this.fechaFormateadaNac = this.empleado.fechaNac.toISOString().split('T')[0];
      this.empleado.fechaNac = this.fechaFormateadaNac;
    } else {
      console.error('this.empleado.fechaNac is not a valid Date object.');
    }
    
    if (this.empleado.fechaIngreso instanceof Date) {
      this.fechaFormateadaIngreso = this.empleado.fechaIngreso.toISOString().split('T')[0];
      this.empleado.fechaIngreso = this.fechaFormateadaIngreso;
    } else {
      console.error('this.empleado.fechaIngreso is not a valid Date object.');
    }
  }

}

