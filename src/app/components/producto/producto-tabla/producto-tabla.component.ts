import { Component,OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/models/proveedor';
import { PageEvent } from '@angular/material/paginator';
import { FilterComponent } from '../../filter/filter.component';
import { server } from 'src/app/services/global';

@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent extends FilterComponent {
  producto: Producto;
  pageSize = 10;
  desde:number =0;
  hasta:number =10;
  public url:any;
  public productos:Array<Producto>;
  constructor(
    private _productoService: ProductoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.productos=[];
    this.producto = new Producto();
    this.getAll();
  }

  getAll(){
    this._productoService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.productos=response.data;
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarCategoria(productoId: number) {
    this._productoService.delete(productoId).subscribe({
      next: (response: any) => {
        console.log('producto eliminado correctamente:', response);
        this.getAll();
        Swal.fire('¡Registro eliminado!', 'producto eliminado correctamente!', 'success');
      },
      error: (error: any) => {
        console.error('Error al eliminar el producto:', error);
        Swal.fire('¡Error!', 'Error al eliminar el producto!', 'error');
      }
    });
  }

  confirmarEliminacion(productoId: number) {
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
        this.eliminarCategoria(productoId);
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
