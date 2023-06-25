import { Component } from '@angular/core';
import { TelefonoCliente } from 'src/app/models/telefonoCliente';
import{ TelefonosService } from '../../../../services/telefonos.service';
import { timer } from 'rxjs';
import { server } from '../../../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../../filter/filter.component';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-telefono-tabla',
  templateUrl: './telefono-tabla.component.html',
  styleUrls: ['./telefono-tabla.component.css']
})
export class TelefonoTablaComponent extends FilterComponent {
  telefono: TelefonoCliente;
  pageSize = 10;
  desde:number =0;
  hasta:number =10;
  private token;
  public identity;
  public telefonos:Array<TelefonoCliente>;
  constructor(
    private _telefonosService: TelefonosService,
    private _userService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.telefonos=[];
    this.telefono = new TelefonoCliente();
    this.token=_userService.getToken();
    this.identity=_userService.getIdentity();
    this.getAll();
  }

  getAll(){
    this._telefonosService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.telefonos=response.data;
          this.telefonos = this.telefonos.filter((telefonoCliente) => telefonoCliente.cliente === this.identity.cliente);
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarTelefono(telefonoId: number) {
    this._telefonosService.delete(telefonoId).subscribe({
      next: (response: any) => {
        console.log('telefono eliminado correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminado!', 'telefono eliminado correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el telefono:', error);
        Swal.fire('¡Error!', 'Error al eliminar la telefono!', 'error');
      }
    });
  }

  confirmarEliminacion(telefonoId: number) {
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
        this.eliminarTelefono(telefonoId);
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
