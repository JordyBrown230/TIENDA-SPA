import { Component,OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})

export class ProductoRegistroComponent {
  public status:number;
  public identity;
  public producto:Producto;
  private token;
  public categorias:any;
  public fileName:string;
  public proveedores:any;

  constructor(
  private _productoService:ProductoService,
  private _userService: UsuarioService,
  private _proveedorService:ProveedorService,
  private _categoriaService:CategoriaService,
  private _router: Router,
  ){
    this.status=-1;
    this.identity=_userService.getIdentity();
    this.producto=new Producto();
    this.token=_userService.getToken();
    this.fileName="";
  }
  ngOnInit(): void {
      this.getCategories();
      console.log(this.categorias);
      this.getProveedores();
      console.log(this.proveedores);
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
  getProveedores(){
    this._proveedorService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.proveedores=response.data;
        }
      },
      error:(err:Error)=>{
        this.proveedores=null;
        console.log(err);
      }
    });
  }
  uploadImage(event:any){
    const file:File=event.target.files[0];
    if(file){
      this.fileName=file.name;
      const formData=new FormData();
      formData.append('file0',file);
      this._productoService.uploadImage(formData,this.token).subscribe({
        next:(response:any)=>{
          console.log(response);
          if(response.status==200){
            this.producto.image=response.image_name;
          }
        },
        error:(err:Error)=>{
          console.log(err);
        }
      });
    }
  }
  onSubmit(form:any){
    //console.log(this.post);
    this._productoService.register(this.producto).subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.status=0;
          form.reset();
          Swal.fire('¡Registro guardado!', response.message, 'success');
          this.mainTable();
        }
      },
      error:(err:HttpErrorResponse)=>{
        Swal.fire('¡Error!', err.error.message + ', favor verifica los datos y vuelve a intentarlo', 'error');
      }
    });
  }

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/producto']);
  }, 2000);
  }

}