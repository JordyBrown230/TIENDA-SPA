import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { TelefonosService } from 'src/app/services/telefonos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { TelefonoCliente } from 'src/app/models/telefonoCliente';
@Component({
  selector: 'app-telefono-actualizar',
  templateUrl: './telefono-actualizar.component.html',
  styleUrls: ['./telefono-actualizar.component.css']
})
export class TelefonoActualizarComponent {
  public telefonoCliente:TelefonoCliente;
  private token;
  public identity;
  constructor(
    private _telefonosService:TelefonosService,
    private _userService:UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.telefonoCliente = new TelefonoCliente();
    this.token=_userService.getToken();
    this.identity=_userService.getIdentity();
    this._route.params.subscribe(params => {
      const idTelefonosCliente = params['idTelefonosCliente'];
      this.buscarTelefono(idTelefonosCliente);
    });
  }

  onSubmit(form:any){
    console.log(this.telefonoCliente);
    this.telefonoCliente.cliente=this.identity.cliente;
    this._telefonosService.update(this.telefonoCliente).subscribe({
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
      this._router.navigate(['/cliente-datos']);
    }, 2000);
  }

  buscarTelefono(telefonoId: number): void {
    this._telefonosService.getById(telefonoId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.telefonoCliente = response.data;
        }
      },
      error: (err: Error) => {
        console.error(err.message);
      }
    });
  }
}
