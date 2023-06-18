import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-empleado-actualizar',
  templateUrl: './empleado-actualizar.component.html',
  styleUrls: ['./empleado-actualizar.component.css']
})
export class EmpleadoActualizarComponent {
  public empleado:Empleado;
  public fechaFormateadaNac:any;
  public fechaFormateadaIngreso:any;
  constructor(
    private _empleadoService:EmpleadoService,
    private _router: Router,
    private _route: ActivatedRoute,
  ){
    this.empleado = new Empleado();
    this._route.params.subscribe(params => {
      const idEmpleado = params['idEmpleado'];
      this.buscarEmpleado(idEmpleado);
    });
  }
  onSubmit(form:any){
    console.log(this.empleado);
    this.formatFechas();
    this._empleadoService.update(this.empleado).subscribe({
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

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/empleado']);
    }, 2000);
  }

  formatFechas(){//a la hora de enviarlas
    if (this.empleado.fechaNac instanceof Date) {
      this.fechaFormateadaNac = this.empleado.fechaNac.toISOString().split('T')[0];
      this.empleado.fechaNac = this.fechaFormateadaNac;
    } else {
      console.error('this.empleado.fechaNac is not a valid Date object.');
    }
    
    if (this.empleado.fechaIngreso instanceof Date) {
      this.fechaFormateadaIngreso = this.empleado.fechaIngreso.toISOString().split('T')[0];
      this.empleado.fechaIngreso = this.fechaFormateadaIngreso;
    } else {
      console.error('this.empleado.fechaIngreso is not a valid Date object.');
    }
  }

  buscarEmpleado(empleadoId: number): void {
    this._empleadoService.getById(empleadoId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.empleado = response.data;
          this.getFechas();
        }
      },
      error: (err: Error) => {
        console.error(err.message);
      }
    });
  }

  getFechas(){//cargarlas en el form actualizar
    this.empleado.fechaNac = new Date(this.empleado.fechaNac);
    this.empleado.fechaIngreso = new Date(this.empleado.fechaIngreso);
  }  

}
