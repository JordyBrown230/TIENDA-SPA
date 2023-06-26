import { Component} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import{ UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioService]
})
export class UsuarioComponent extends FilterComponent {
  usuario: any;
  pageSize = 10;
  desde:number =0;
  hasta:number =10;
  public usuarios:Array<Usuario>;
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.usuarios=[];
    this.getAll();
  }

  getAll(){
    this._usuarioService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.usuarios=response.data;
          this.usuarios = this.usuarios.filter((usuario) => usuario.empleado !=null );
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarusuario(id: string) {
    this._usuarioService.delete(id).subscribe({
      next: (response: any) => {
        console.log('usuario eliminado correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminado!', 'usuario eliminado correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el usuario:', error);
        Swal.fire('¡Error!', 'Error al eliminar el usuario!', 'error');
      }
    });
  }

    confirmarEliminacion(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#dc3545', 
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#28a745' 
    }).then((result) => {
      if (result.isConfirmed) {
        // La confirmación de eliminación fue aceptada
        this.eliminarusuario(id);
      }
    });
  }

  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);
  }

}

  