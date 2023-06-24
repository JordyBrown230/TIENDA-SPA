import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { FilterComponent } from '../../filter/filter.component';

@Component({
  selector: 'app-empleado-tabla',
  templateUrl: './empleado-tabla.component.html',
  styleUrls: ['./empleado-tabla.component.css']
})
export class EmpleadoTablaComponent extends FilterComponent{
    public empleado:Empleado;
    public empleados:Array<Empleado>;
    pageSize = 10;
    desde:number =0;
    hasta:number =10;
    public fechaFormateada:any;
    constructor(
      private _empleadoService:EmpleadoService,
      private _router: Router,
      private _route: ActivatedRoute
    ){
      super();
      this.empleados=[];
      this.empleado = new Empleado("", "", new Date("2002-10-10"), new Date("2002-10-10"), "","");
      this.getAll();
    }
    
    getAll(){
      this._empleadoService.getAll().subscribe({
        next:(response:any)=>{
          if(response.status==200){
            this.empleados=response.data;
          }
        },
        error:(err:Error)=>{
          console.log(err.message);
        }
      })
    }
  
    eliminarEmpleado(idEmpleado: number) {
      this._empleadoService.delete(idEmpleado).subscribe({
        next: (response: any) => {
          console.log('Empleado eliminado correctamente:', response);
          this.getAll();
          Swal.fire('¡Registro eliminado!', 'Empleado eliminado correctamente!', 'success');
        },
        error: (error: any) => {
          console.error('Error al eliminar el empleado:', error);
          Swal.fire('¡Error!', 'Error al eliminar el empleado!', 'error');
        }
      });
    }
    
    
    
      confirmarEliminacion(idEmpleado: number) {
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
          this.eliminarEmpleado(idEmpleado);
        }
      });
    }
  
  }
  

