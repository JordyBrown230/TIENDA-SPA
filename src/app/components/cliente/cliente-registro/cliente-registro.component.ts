import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import{ ClienteService } from '../../../services/cliente.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css'],
})
export class ClienteRegistroComponent {
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
  }
  onSubmit(form:any){
    console.log(this.cliente);
    let counter= timer(3000);
    this.fechaFormateada = this.cliente.fechaNac.toISOString().split('T')[0];//cambiar formato de la fecha que da el componente DatePicker
    this.cliente.fechaNac = this.fechaFormateada;
    this._clienteService.register(this.cliente).subscribe({
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
      this._router.navigate(['/cliente']);
    }, 2000);
  }
}
