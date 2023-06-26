import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service'; 
import { Orden } from 'src/app/models/orden';
import { Envio } from 'src/app/models/envio';
import { EnvioService } from 'src/app/services/envio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OrdenService } from 'src/app/services/orden.service';
import { DetalleOrden } from 'src/app/models/detalleOrden';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { DireccionCliente } from 'src/app/models/direccionCliente';
import { DireccionService } from 'src/app/services/direccion.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CartService]
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  showCheckoutForm: boolean = false; // Variable para controlar la visualización del formulario
  public orden:Orden;
  public envio:Envio;
  public detalles: Array<DetalleOrden>;
  public identity:any;
  public direcciones:Array<DireccionCliente>;

  constructor(
    private _cartService:CartService,
    private _envioService:EnvioService,
    private _ordenService:OrdenService,
    private _router: Router,
    private _route: ActivatedRoute,
    private direccionService:DireccionService
    ) { 
      this.orden = new Orden();
      this.envio = new Envio();
      this.detalles = new Array<DetalleOrden>;
      this.direcciones = new Array<DireccionCliente>;
      this.obtenerDirecciones();
    }

  ngOnInit(): void {
      this._cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this._cartService.getTotalPrice();
        this.orden.total = this.grandTotal;
      })
  }

  cargarDetalles(){
    for (const product of this.products) {
        let detalle = new DetalleOrden(0,product.quantity,product.precioUnitario,0.13,0,product.idProducto);
        this.detalles.push(detalle);
    }
  }

  removeItem(item: any){
    this._cartService.removeCartItem(item);
  }
  emptycart(){
    this._cartService.removeAllCart();
  }

  toggleCheckoutForm() {
    // Mostrar u ocultar el formulario de checkout
    this.showCheckoutForm = !this.showCheckoutForm;
  }

  procesarOrden() {
    this.identity = localStorage.getItem("identity");
    const usuario = JSON.parse(this.identity);
    this.cargarDetalles();
    this.orden.total = this.grandTotal;
    this.orden.ivaTotal = 0.13; // esto debe verificarse.
    this.orden.cliente = usuario.cliente; 
    this._ordenService.generarOrden(this.orden, this.envio.direccion,this.detalles).subscribe({
      next: (response: any) => {
          Swal.fire('Orden procesada','Orden procesada correctamente!','success');
          this._router.navigate(['/orden']);
          localStorage.removeItem('cartItems');
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message);
      }
    });
  }

  obtenerDirecciones(){
    this.identity = localStorage.getItem("identity");
    const usuario = JSON.parse(this.identity);
    this.direccionService.getAll().subscribe({
      next: (response: any) => {
          this.direcciones = response.data;
          this.direcciones= this.direcciones.filter((direccionCliente) => direccionCliente.cliente === usuario.cliente);
          console.log(this.direcciones);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message);
      }
    });
  }
 
}
