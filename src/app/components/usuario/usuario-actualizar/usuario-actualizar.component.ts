import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import{ UsuarioService } from '../../../services/usuario.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.css'],
  providers:[UsuarioService]
})
export class UsuarioActualizarComponent {
  public usuario:Usuario;
  public status:number;
  public fechaFormateada:any;
  constructor(
    private _usuarioService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.usuario = new Usuario();
    this.status=-1; 
    this._route.params.subscribe(params => {
      const id = params['id'];
      this.buscarUsuario(id);
    });
  }


  onSubmit(form:any){
    console.log(this.usuario);
    let counter= timer(3000);
    this._usuarioService.update(this.usuario).subscribe({
      next:(response:any)=>{
        console.log(response.message);
        Swal.fire('¡Registro actualizado!', response.message, 'success');
        this.mainTable();
      },
      error:(err:HttpErrorResponse)=>{
        Swal.fire('¡Error!', err.error.message + ', favor verifica los datos y vuelve a intentarlo', 'error');
      }
    });
  }

  buscarUsuario(usuarioId: string): void {
    this._usuarioService.getById(usuarioId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.usuario = response.data;
        }
      },
      error: (err: Error) => {
        console.error(err.message);
        //Swal.fire(err.message);
      }
    });
  }

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/usuario']);
    }, 2000);
  }
}
