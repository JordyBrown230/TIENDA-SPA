import { Component } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import{ VehiculoService } from '../../../services/vehiculo.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo-actualizar',
  templateUrl: './vehiculo-actualizar.component.html',
  styleUrls: ['./vehiculo-actualizar.component.css']
})

export class VehiculoActualizarComponent {
  public vehiculo:Vehiculo;
  public fechaFormateada:any;
  constructor(
    private _vehiculoService:VehiculoService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.vehiculo = new Vehiculo();
    this._route.params.subscribe(params => {
      const numUnidad = params['numUnidad'];
      this.buscarVehiculo(numUnidad);
    });
  }
  onSubmit(form:any){
    console.log(this.vehiculo);
    this._vehiculoService.update(this.vehiculo).subscribe({
      next:(response:any)=>{
        console.log(response.message);
        Swal.fire('¡Registro actualizado!', response.message, 'success');
        this.mainTable();
      },
      error:(err:HttpErrorResponse)=>{
        //console.log(err.error.message);
        Swal.fire('¡Error!', err.error.message + ', favor verifica los datos y vuelve a intentarlo', 'error');
      }
    });
  }

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/vehiculo']);
    }, 2000);
  }

  buscarVehiculo(vehiculoId: number): void {
    this._vehiculoService.getById(vehiculoId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.vehiculo = response.data;
        }
      },
      error: (err: Error) => {
        console.error(err.message);
      }
    });
  }
}
