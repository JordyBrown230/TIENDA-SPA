import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})
export class ProductoRegistroComponent {
private producto:Producto;
public fileName:string;
constructor(
  private _productoService:ProductoService,
  private _router: Router,
  private _route: ActivatedRoute
){
  this.producto = new Producto();
  this.fileName="";
}
onSubmit(form:any){
  console.log(this.producto);
  this._productoService.register(this.producto).subscribe({
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

// uploadImage(event:any){
//   const file:File=event.target.files[0];
//   if(file){
//     this.fileName=file.name;
//     const formData=new FormData();
//     formData.append('file0',file);
//     this._productoService.uploadImage(formData,this.token).subscribe({
//       next:(response:any)=>{
//         //console.log(response);
//         if(response.status==200){
//           this.post.image=response.image;
//         }
//       },
//       error:(err:Error)=>{
//         console.log(err);
//       }
//     });
//   }
//   }
  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/producto']);
    }, 2000);
  }
}
