import { Component } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from '../../../services/orden.service';
import { timer } from 'rxjs';
import { server } from '../../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';

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
  constructor(
    private _ordenService: OrdenService,
    private _router: Router,
    private _route: ActivatedRoute
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
        }
      },
      error: (err: Error) => {
        console.log(err.message);
      }
    });
  }
}
