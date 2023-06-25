import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { timer } from 'rxjs';
import { server } from 'src/app/services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../filter/filter.component';
import { CartService } from 'src/app/services/cart.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CartService]
})

export class HomeComponent extends FilterComponent implements OnInit{
  public productList : any ;
  public products : any ;
  public totalItem : number = 0;
  public grandTotal !: number;
  public url:string;
  public categorias:any;
  constructor(
    private _productoService: ProductoService,
    private _cartService: CartService,
    private _categoriaService:CategoriaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this.url=server.url;
  }

  getCategories(){
    this._categoriaService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.categorias=response.data;
        }
      },
      error:(err:Error)=>{
        this.categorias=null;
        console.log(err);
      }
    });
  }

 ngOnInit(): void {
  this._productoService.getAll().subscribe({
    next: (response: any) => {
      if (response.status == 200) {
        this.productList = response.data;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.precioUnitario });
        });
        console.log(this.productList);
      }
    },
    error: (err: Error) => {
      console.log(err.message);
    }
  });

  this.getCategories();
}

addtocart(item: any) {
  //console.log('addtocart called:', item);
  this._cartService.addtoCart(item);
}

}
