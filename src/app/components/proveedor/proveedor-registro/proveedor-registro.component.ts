import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import{ ProveedorService } from '../../../services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-proveedor-registro',
  templateUrl: './proveedor-registro.component.html',
  styleUrls: ['./proveedor-registro.component.css'],
})
export class ProveedorRegistroComponent {
  public proveedor:Proveedor;
  public fechaFormateada:any;
  constructor(
    private _proveedorService:ProveedorService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.proveedor = new Proveedor();
  }
  onSubmit(form:any){
    console.log(this.proveedor);
    this._proveedorService.register(this.proveedor).subscribe({
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
      this._router.navigate(['/proveedor']);
    }, 2000);
  }
}
