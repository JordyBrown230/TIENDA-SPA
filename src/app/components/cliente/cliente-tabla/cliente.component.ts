import { Component} from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import{ ClienteService } from '../../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[ClienteService]
})
export class ClienteComponent extends FilterComponent {
  cliente: any;
  pageSize = 10;
  desde:number =0;
  hasta:number =10;
  public clientes:Array<Cliente>;
  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.clientes=[];
    this.cliente = new Cliente("504460214", "Hola", new Date("2002-10-10"), "Jordy@gmail");
    this.getAll();
  }

  getAll(){
    this._clienteService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.clientes=response.data;
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarCliente(cedula: string) {
    this._clienteService.delete(cedula).subscribe({
      next: (response: any) => {
        console.log('Cliente eliminado correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminado!', 'Cliente eliminado correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el cliente:', error);
        Swal.fire('¡Error!', 'Error al eliminar el cliente!', 'error');
      }
    });
  }

    confirmarEliminacion(cedula: string) {
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
        this.eliminarCliente(cedula);
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

  