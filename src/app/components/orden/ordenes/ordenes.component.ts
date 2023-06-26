import { Component, Input, Renderer2 } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from '../../../services/orden.service';
import { timer } from 'rxjs';
import { server } from '../../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';
import { PageEvent } from '@angular/material/paginator';
import { DetalleOrden } from 'src/app/models/detalleOrden';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent extends FilterComponent{
  orden: Orden;
  public ordenes: Array<Orden>;
  pageSize = 10;
  desde:number =0;
  hasta:number =10;
  public identity: any;
  public totalOrdenes: any;
  public usuario:any;
  modalOpen = false;
  public detalles:any = [];
  public idOrden:any;
  public total:any;

  constructor(
    private _ordenService: OrdenService,
    private _router: Router,
    private _route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    super();
    this.ordenes = [];
    this.orden = new Orden();
    this.getAll();
  }

  getAll() {
    this._ordenService.getAll().subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.ordenes = response.data;
          this.identity = localStorage.getItem("identity");
          this.usuario = JSON.parse(this.identity);
          if(this.usuario.cliente != null){
            this.ordenes = this.ordenes.filter((orden) => orden.cliente === this.usuario.cliente);
          }
          localStorage.setItem('totalOrdenes', this.ordenes.length.toString());
        }
      },
      error: (err: Error) => {
        console.log(err.message);
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
  
  openModal(idOrden: any) {
    this.modalOpen = true;
    const orden = this.ordenes.find((orden) => orden.idOrden === idOrden);
    if(orden){
      this.orden = orden;
    }
    this.detalles = orden?.detalle_orden;
  }

  closeModal() {
    this.modalOpen = false;
  }
  
}
