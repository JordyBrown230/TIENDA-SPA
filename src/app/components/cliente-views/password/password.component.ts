import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  public usuario:Usuario;
  public password:any;

  constructor(
    private _usuarioService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
    ){
    this.usuario = new Usuario();
      var identity = localStorage.getItem('identity');
      if(identity){
        var user = JSON.parse(identity);
        if(user){
          this.usuario.idUsuario = user.iss;
          this.usuario.nombreUsuario = user.nombreUsuario;
          this.usuario.cliente = user.cliente;
          this.usuario.empleado = user.empleado;
          this.usuario.tipoUsuario = user.tipoUsuario;
        }
      }
  }

  updateUsuario(form:any) {
    if(this.usuario.password === this.password){
      this._usuarioService.update(this.usuario).subscribe({
        next:(response:any)=>{
         console.log(response.message);
         Swal.fire('¡Registro actualizado!', response.message, 'success');
         this._router.navigate(['/cliente-datos']);
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
          Swal.fire('Error', err.error.message, 'error');
        }
      });
    }else{
      Swal.fire('¡Error!', 'Las contraseñas ingresadas no coinciden', 'error');
    }
  }
}
