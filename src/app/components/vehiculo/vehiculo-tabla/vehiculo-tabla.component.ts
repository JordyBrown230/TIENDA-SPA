import { Component } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import{ VehiculoService } from '../../../services/vehiculo.service';
import { timer } from 'rxjs';
import { server } from '../../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';
@Component({
  selector: 'app-vehiculo-tabla',
  templateUrl: './vehiculo-tabla.component.html',
  styleUrls: ['./vehiculo-tabla.component.css']
})
export class VehiculoTablaComponent extends FilterComponent{
  vehiculo: Vehiculo;
  public vehiculos:Array<Vehiculo>;
  constructor(
    private _vehiculoService: VehiculoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.vehiculos=[];
    this.vehiculo = new Vehiculo();
    this.getAll();
  }

  getAll(){
    this._vehiculoService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.vehiculos=response.data;
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarVehiculo(vehiculoId: number) {
    this._vehiculoService.delete(vehiculoId).subscribe({
      next: (response: any) => {
        console.log('vehiculo eliminado correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminado!', 'vehiculo eliminado correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el vehiculo:', error);
        Swal.fire('¡Error!', 'Error al eliminar el vehiculo!', 'error');
      }
    });
  }

  confirmarEliminacion(vehiculoId: number) {
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
        this.eliminarVehiculo(vehiculoId);
      }
    });
  }
}
