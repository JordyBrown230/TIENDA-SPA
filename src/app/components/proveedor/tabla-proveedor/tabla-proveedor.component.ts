import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import{ ProveedorService } from '../../../services/proveedor.service';
import { timer } from 'rxjs';
import { server } from '../../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';
@Component({
  selector: 'app-tabla-proveedor',
  templateUrl: './tabla-proveedor.component.html',
  styleUrls: ['./tabla-proveedor.component.css'],
  providers:[ProveedorService]
})
export class TablaProveedorComponent extends FilterComponent{
  proveedor: Proveedor;
  public proveedores:Array<Proveedor>;
  constructor(
    private _proveedorService: ProveedorService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.proveedores=[];
    this.proveedor = new Proveedor();
    this.getAll();
  }

  getAll(){
    this._proveedorService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.proveedores=response.data;
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarProveedor(proveedorId: number) {
    this._proveedorService.delete(proveedorId).subscribe({
      next: (response: any) => {
        console.log('Proveedor eliminado correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminado!', 'Proveedor eliminado correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el proveedor:', error);
        Swal.fire('¡Error!', 'Error al eliminar el proveedor!', 'error');
      }
    });
  }

  confirmarEliminacion(proveedorId: number) {
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
        this.eliminarProveedor(proveedorId);
      }
    });
  }
}
