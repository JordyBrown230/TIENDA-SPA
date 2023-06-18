import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import{ CategoriaService } from '../../../services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-categoria-registro',
  templateUrl: './categoria-registro.component.html',
  styleUrls: ['./categoria-registro.component.css']
})
export class CategoriaRegistroComponent {
  public categoria:Categoria;
  constructor(
    private _categoriaService:CategoriaService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.categoria = new Categoria();
  }
  onSubmit(form:any){
    console.log(this.categoria);
    this._categoriaService.register(this.categoria).subscribe({
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
      this._router.navigate(['/categoria']);
    }, 2000);
  }
}
