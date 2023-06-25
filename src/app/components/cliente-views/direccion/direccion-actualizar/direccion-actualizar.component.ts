import { Component } from '@angular/core';
import { DireccionCliente } from 'src/app/models/direccionCliente';
import { DireccionService } from 'src/app/services/direccion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-direccion-actualizar',
  templateUrl: './direccion-actualizar.component.html',
  styleUrls: ['./direccion-actualizar.component.css']
})
export class DireccionActualizarComponent {
  public direccionCliente:DireccionCliente;
  private token;
  public identity;
  constructor(
    private _direccionService:DireccionService,
    private _userService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.direccionCliente = new DireccionCliente();
    this.token=_userService.getToken();
    this.identity=_userService.getIdentity();
    this._route.params.subscribe(params => {
      const idDireccionesCliente = params['idDireccionesCliente'];
      this.buscarDireccion(idDireccionesCliente);
    });
  }
  onSubmit(form:any){
    console.log(this.direccionCliente);
    this.direccionCliente.cliente=this.identity.cliente;
    this._direccionService.update(this.direccionCliente).subscribe({
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
      this._router.navigate(['/cliente-direccion']);
    }, 2000);
  }

  buscarDireccion(direccionId: number): void {
    this._direccionService.getById(direccionId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.direccionCliente = response.data;
        }
      },
      error: (err: Error) => {
        console.error(err.message);
      }
    });
  }
}
