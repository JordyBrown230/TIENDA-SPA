import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import{ ProveedorService } from '../../../services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-proveedor-actualizar',
  templateUrl: './proveedor-actualizar.component.html',
  styleUrls: ['./proveedor-actualizar.component.css']
})
export class ProveedorActualizarComponent {
  public proveedor:Proveedor;
  public fechaFormateada:any;
  constructor(
    private _proveedorService:ProveedorService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.proveedor = new Proveedor();
    this._route.params.subscribe(params => {
      const idProveedor = params['idProveedor'];
      this.buscarProveedor(idProveedor);
    });
  }

  onSubmit(form:any){
    console.log(this.proveedor);
    this._proveedorService.update(this.proveedor).subscribe({
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

  buscarProveedor(proveedorId: number): void {
    this._proveedorService.getById(proveedorId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.proveedor = response.data;
        }
      },
      error: (err: Error) => {
        console.error(err.message);
      }
    });
  }

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/proveedor']);
    }, 2000);
  }

}
