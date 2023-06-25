import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing'; // Importa tu archivo personalizado
import { MatTabsModule } from '@angular/material/tabs';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { EnvioComponent } from './components/envio/envio-tabla/envio.component';
import { ClienteComponent } from './components/cliente/cliente-tabla/cliente.component';
import { EnvioRegistroComponent } from './components/envio/envio-registro/envio-registro.component';
import { ClienteRegistroComponent } from './components/cliente/cliente-registro/cliente-registro.component';
import { ClienteActualizarComponent } from './components/cliente/cliente-actualizar/cliente-actualizar.component';
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
import { BotComponent } from './components/chatBot/bot/bot.component';
import { SearchPipe } from './components/filter/search.pipe';
import { FilterComponent } from './components/filter/filter.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    EnvioComponent,
    ClienteComponent,
    EnvioRegistroComponent,
    ClienteRegistroComponent,
    ClienteActualizarComponent,
    EnvioActualizarComponent,
    EmpleadoTablaComponent,
    EmpleadoRegistroComponent,
    EmpleadoActualizarComponent,
    TablaProveedorComponent,
    ProveedorRegistroComponent,
    ProveedorActualizarComponent,
    CategoriaTablaComponent,
    CategoriaRegistroComponent,
    CategoriaActualizarComponent,
    BotComponent,
    SearchPipe,
    FilterComponent,
    VehiculoTablaComponent,
    VehiculoRegistroComponent,
    VehiculoActualizarComponent,
    CartComponent,
    OrdenesComponent,
    ProductoRegistroComponent,
    UsuarioComponent,
    UsuarioActualizarComponent,
    UsuarioRegistroComponent,
    TelefonoTablaComponent,
    TelefonoRegistrarComponent,
    TelefonoActualizarComponent,

  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTabsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
