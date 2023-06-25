import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { EnvioComponent } from './components/envio/envio-tabla/envio.component';
import { ClienteComponent } from './components/cliente/cliente-tabla/cliente.component';
import { ClienteRegistroComponent } from './components/cliente/cliente-registro/cliente-registro.component';
import { ClienteActualizarComponent } from './components/cliente/cliente-actualizar/cliente-actualizar.component';
import { EnvioRegistroComponent } from './components/envio/envio-registro/envio-registro.component';
import { EnvioActualizarComponent } from './components/envio/envio-actualizar/envio-actualizar.component';
import { EmpleadoTablaComponent } from './components/empleado/empleado-tabla/empleado-tabla.component';
import { EmpleadoRegistroComponent } from './components/empleado/empleado-registro/empleado-registro.component';
import { EmpleadoActualizarComponent } from './components/empleado/empleado-actualizar/empleado-actualizar.component';
import { TablaProveedorComponent } from './components/proveedor/tabla-proveedor/tabla-proveedor.component';
import { ProveedorRegistroComponent } from './components/proveedor/proveedor-registro/proveedor-registro.component';
import { ProveedorActualizarComponent } from './components/proveedor/proveedor-actualizar/proveedor-actualizar.component';
import { CategoriaTablaComponent } from './components/categoria/categoria-tabla/categoria-tabla.component';
import { CategoriaRegistroComponent } from './components/categoria/categoria-registro/categoria-registro.component';
import { CategoriaActualizarComponent } from './components/categoria/categoria-actualizar/categoria-actualizar.component';
import { VehiculoTablaComponent } from './components/vehiculo/vehiculo-tabla/vehiculo-tabla.component';
import { VehiculoRegistroComponent } from './components/vehiculo/vehiculo-registro/vehiculo-registro.component';
import { VehiculoActualizarComponent } from './components/vehiculo/vehiculo-actualizar/vehiculo-actualizar.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdenesComponent } from './components/orden/ordenes/ordenes.component';
import { ProductoRegistroComponent } from './components/producto/producto-registro/producto-registro.component';
import { UsuarioActualizarComponent } from './components/usuario/usuario-actualizar/usuario-actualizar.component';
import { UsuarioComponent } from './components/usuario/usuario-tabla/usuario.component';
import { UsuarioRegistroComponent } from './components/usuario/usuario-registro/usuario-registro.component';
import { TelefonoTablaComponent } from './components/cliente-views/telefono/telefono-tabla/telefono-tabla.component';
import { TelefonoRegistrarComponent } from './components/cliente-views/telefono/telefono-registrar/telefono-registrar.component';
import { TelefonoActualizarComponent } from './components/cliente-views/telefono/telefono-actualizar/telefono-actualizar.component';
import { DireccionTablaComponent } from './components/cliente-views/direccion/direccion-tabla/direccion-tabla.component';
import { DireccionRegistroComponent } from './components/cliente-views/direccion/direccion-registro/direccion-registro.component';
import { DireccionActualizarComponent } from './components/cliente-views/direccion/direccion-actualizar/direccion-actualizar.component';
import { ProductoTablaComponent } from './components/producto/producto-tabla/producto-tabla.component';
import { ProductoActualizarComponent } from './components/producto/producto-actualizar/producto-actualizar.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'home', component: HomeComponent },
    { path: 'envio',component:EnvioComponent},
    { path: 'cliente',component:ClienteComponent},
    { path: 'empleado',component:EmpleadoTablaComponent},
    { path: 'empleado-registro',component:EmpleadoRegistroComponent},
    { path: 'empleado-actualizar/:idEmpleado',component:EmpleadoActualizarComponent},
    { path: 'cliente-registro', component: ClienteRegistroComponent }, 
    { path: 'cliente-actualizar/:cedula', component: ClienteActualizarComponent },
    { path: 'envio-registro', component:EnvioRegistroComponent},
    { path: 'envio-actualizar/:idEnvio', component:EnvioActualizarComponent},
    { path: 'proveedor',component:TablaProveedorComponent},
    { path: 'proveedor-registro',component:ProveedorRegistroComponent},
    { path: 'proveedor-actualizar/:idProveedor',component:ProveedorActualizarComponent},
    { path: 'categoria',component:CategoriaTablaComponent},
    { path: 'categoria-registro',component:CategoriaRegistroComponent},
    { path: 'categoria-actualizar/:idCategoria',component:CategoriaActualizarComponent},
    { path: 'vehiculo',component:VehiculoTablaComponent},
    { path: 'vehiculo-registro',component:VehiculoRegistroComponent},
    { path: 'vehiculo-actualizar/:numUnidad',component:VehiculoActualizarComponent},
    { path: 'cart',component:CartComponent},
    { path : 'orden' , component:OrdenesComponent},
    { path : 'producto-registro' , component:ProductoRegistroComponent},
    { path : 'producto-actualizar/:idProducto' , component:ProductoActualizarComponent},
    { path : 'producto' , component:ProductoTablaComponent},
    { path: 'usuario',component:UsuarioComponent},
    { path:'logout/:sure',component:LoginComponent},
    { path: 'usuario-actualizar/:id', component: UsuarioActualizarComponent },
    { path: 'usuario-registro', component: UsuarioRegistroComponent }, 
    { path: 'cliente-datos', component: TelefonoTablaComponent }, 
    { path: 'cliente-telefono-registrar', component: TelefonoRegistrarComponent }, 
    { path: 'cliente-telefono-actualizar/:idTelefonosCliente', component: TelefonoActualizarComponent }, 
    { path: 'cliente-direccion', component: DireccionTablaComponent }, 
    { path: 'cliente-direccion-registrar', component: DireccionRegistroComponent }, 
    { path: 'cliente-direccion-actualizar/:idDireccionesCliente', component: DireccionActualizarComponent }, 


    { path: '**', redirectTo: '/login' } // Asegúrate de agregar el '/' antes de 'login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
