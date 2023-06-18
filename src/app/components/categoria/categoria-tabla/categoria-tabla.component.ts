import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import{ CategoriaService } from '../../../services/categoria.service';
import { timer } from 'rxjs';
import { server } from '../../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';

@Component({
  selector: 'app-categoria-tabla',
  templateUrl: './categoria-tabla.component.html',
  styleUrls: ['./categoria-tabla.component.css'],
  providers:[CategoriaService]
})
export class CategoriaTablaComponent extends FilterComponent {
  categoria: Categoria;
  public categorias:Array<Categoria>;
  constructor(
    private _categoriaService: CategoriaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.categorias=[];
    this.categoria = new Categoria();
    this.getAll();
  }

  getAll(){
    this._categoriaService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.categorias=response.data;
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarCategoria(categoriaId: number) {
    this._categoriaService.delete(categoriaId).subscribe({
      next: (response: any) => {
        console.log('categoria eliminada correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminado!', 'categoria eliminada correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el categoria:', error);
        Swal.fire('¡Error!', 'Error al eliminar la categoria!', 'error');
      }
    });
  }

  confirmarEliminacion(categoriaId: number) {
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
        this.eliminarCategoria(categoriaId);
      }
    });
  }
}
