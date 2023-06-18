import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import{ ClienteService } from '../../../services/cliente.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente-actualizar',
  templateUrl: './cliente-actualizar.component.html',
  styleUrls: ['./cliente-actualizar.component.css'],
  providers:[ClienteService]
})
export class ClienteActualizarComponent {
  public cliente:Cliente;
  public status:number;
  public fechaFormateada:any;
  constructor(
    private _clienteService:ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.cliente = new Cliente("", "", new Date("2002-10-10"), "");
    this.status=-1; 
    this._route.params.subscribe(params => {
      const cedula = params['cedula'];
      this.buscarCliente(cedula);
    });
  }


  onSubmit(form:any){
    console.log(this.cliente);
    let counter= timer(3000);
    this.fechaFormateada = this.cliente.fechaNac.toISOString().split('T')[0];//cambiar formato de la fecha que da el componente DatePicker
    this.cliente.fechaNac = this.fechaFormateada;
    this._clienteService.update(this.cliente).subscribe({
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

  buscarCliente(clienteId: string): void {
    this._clienteService.getByCed(clienteId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.cliente = response.data;
          this.cliente.fechaNac = new Date(response.data.fechaNac);
        }
      },
      error: (err: Error) => {
        console.error(err.message);
        //Swal.fire(err.message);
      }
    });
  }

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/cliente']);
    }, 2000);
  }
}
