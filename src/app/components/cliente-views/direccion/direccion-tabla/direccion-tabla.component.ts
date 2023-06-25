import { Component } from '@angular/core';
import { DireccionCliente } from 'src/app/models/direccionCliente';
import { DireccionService } from 'src/app/services/direccion.service';
import { timer } from 'rxjs';
import { server } from '../../../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../../filter/filter.component';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-direccion-tabla',
  templateUrl: './direccion-tabla.component.html',
  styleUrls: ['./direccion-tabla.component.css']
})
export class DireccionTablaComponent extends FilterComponent {

  direccion: DireccionCliente;
  pageSize = 10;
  desde:number =0;
  hasta:number =10;
  private token;
  public identity;
  public direcciones:Array<DireccionCliente>;
  constructor(
    private _direccionService: DireccionService,
    private _userService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.direcciones=[];
    this.direccion = new DireccionCliente();
    this.token=_userService.getToken();
    this.identity=_userService.getIdentity();
    this.getAll();
  }
  getAll(){
    this._direccionService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.direcciones=response.data;
          this.direcciones = this.direcciones.filter((direccionCliente) => direccionCliente.cliente === this.identity.cliente);
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarTelefono(telefonoId: number) {
    this._direccionService.delete(telefonoId).subscribe({
      next: (response: any) => {
        console.log('direccion eliminada correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminada!', 'direccion eliminada correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el direccion:', error);
        Swal.fire('¡Error!', 'Error al eliminar la direccion!', 'error');
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
