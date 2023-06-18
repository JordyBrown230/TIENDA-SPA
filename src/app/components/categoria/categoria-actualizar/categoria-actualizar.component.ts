import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import{ CategoriaService } from '../../../services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-categoria-actualizar',
  templateUrl: './categoria-actualizar.component.html',
  styleUrls: ['./categoria-actualizar.component.css']
})
export class CategoriaActualizarComponent {
  public categoria:Categoria;
  constructor(
    private _categoriaService:CategoriaService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.categoria = new Categoria();
    this._route.params.subscribe(params => {
      const idCategoria = params['idCategoria'];
      this.buscarCategoria(idCategoria);
    });
  }
  onSubmit(form:any){
    console.log(this.categoria);
    this._categoriaService.update(this.categoria).subscribe({
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
      this._router.navigate(['/categoria']);
    }, 2000);
  }

  buscarCategoria(categoriaId: number): void {
    this._categoriaService.getById(categoriaId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.categoria = response.data;
        }
      },
      error: (err: Error) => {
        console.error(err.message);
      }
    });
  }
}

