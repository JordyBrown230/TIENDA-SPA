import { Component } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import{ VehiculoService } from '../../../services/vehiculo.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo-registro',
  templateUrl: './vehiculo-registro.component.html',
  styleUrls: ['./vehiculo-registro.component.css']
})
export class VehiculoRegistroComponent {
  public vehiculo:Vehiculo;
  public fechaFormateada:any;
  constructor(
    private _vehiculoService:VehiculoService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.vehiculo = new Vehiculo();
  }
  onSubmit(form:any){
    console.log(this.vehiculo);
    this._vehiculoService.register(this.vehiculo).subscribe({
      next:(response:any)=>{
        console.log(response.message);
        Swal.fire('¡Registro guardado!', response.message, 'success');
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
}
