import { Component, Inject } from '@angular/core';
import { Envio } from 'src/app/models/envio';
import { Router, ActivatedRoute } from '@angular/router';
import { EnvioService } from 'src/app/services/envio.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Vehiculo } from 'src/app/models/vehiculo';

@Component({
  selector: 'app-envio-actualizar',
  templateUrl: './envio-actualizar.component.html',
  styleUrls: ['./envio-actualizar.component.css']
})
export class EnvioActualizarComponent {
  public envio:Envio;
  public choferes : Array<Empleado>;
  public vehiculos: Array<Vehiculo>;

  constructor(
    private _envioService:EnvioService,
    private _empleadoService:EmpleadoService,
    private _vehiculoService:VehiculoService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.envio = new Envio();
    this.choferes = [];
    this.vehiculos = [];
    this.getChoferes();
    this.getVehiculos();
    this._route.params.subscribe(params => {
      const envioId = params['idEnvio'];
      this.buscarEnvio(envioId);
    });
  }

  onSubmit(form:any){
    console.log(this.envio);
    this._envioService.update(this.envio).subscribe({
      next:(response:any)=>{
        console.log(response.message);
        Swal.fire('¡Registro actualizado!', response.message, 'success');
        this.mainTable();
      },
      error:(err:HttpErrorResponse)=>{
        //console.log(err.error.message);
        Swal.fire('¡Error!', err.error.message + ', favor verifica los datos y vuelve a intentarlo.', 'error');
      }
    });
  }

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/envio']);
    }, 2000);
  }

  getChoferes(){
    this._empleadoService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.choferes=response.data;
          this.choferes = this.choferes.filter((empleado) => empleado.tipoEmpleado === 'Chofer');
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  getVehiculos(){
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

  buscarEnvio(envioId: string): void {
    this._envioService.getById(envioId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.envio = response.data;
          console.log(this.envio);
        }
      },
      error: (err: Error) => {
        console.error(err.message);
        //Swal.fire(err.message);
      }
    });
  }
}
