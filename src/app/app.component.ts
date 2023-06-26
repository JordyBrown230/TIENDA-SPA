import { Component, ElementRef, HostListener,Input,Renderer2 } from '@angular/core';
import { NavigationEnd,Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { UsuarioService } from './services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda-SPA';
  activeLink: HTMLElement | null = null;
  totalItem: number = 0; 
  public identity:any;
  private checkIdentity;
  modalOpen = false;
  //public totalOrdenes:any;

  constructor(
    private _userService:UsuarioService,
    private elRef: ElementRef,
    private router: Router,
    private _cartService: CartService,
    private renderer: Renderer2
  ) {
    this.checkIdentity=setInterval(()=>{
      this.identity=this._userService.getIdentity();
    },2000);
  }





  ngOnInit() {
    this.verifyToken();
    this.QuantityItems();
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    const clickedLink = event.target as HTMLElement;

    if (clickedLink.tagName !== 'A') {
      return; 
    }
    if (clickedLink === this.activeLink) {
      return; 
    }
    this.deactivateLinks();
    clickedLink.classList.add('active'); 
    this.activeLink = clickedLink;
  }
  private deactivateLinks() {
    const links = this.elRef.nativeElement.querySelectorAll('.nav-link');
    links.forEach((link: HTMLElement) => link.classList.remove('active'));
  }
 
  QuantityItems() {
      this.totalItem = this._cartService.getProductCount();
  }
  

  verifyToken() {
    setInterval(() => {
      this._userService.compareToken().subscribe({
        next: (response: any) => {
          if (response.status === 400) {
            console.log(response.message);
            localStorage.removeItem('token');
            localStorage.removeItem('identity');
            this.router.navigate(['/login']);
          } else {
            console.log(response.message);
          }
        },
        error: (err: Error) => {
          console.log(err);
        }
      });
    }, 120000); // 2 minutos 
  }

  logout(){
          Swal.fire({
            title: '¿Estás seguro?',
            text: 'Deseas cerrar sesión',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Cerrar sesión',
            confirmButtonColor: '#dc3545', 
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#28a745' 
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem('identity');
              localStorage.removeItem('token');
              this.router.navigate(['/home']);
            }
          });
        

  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
