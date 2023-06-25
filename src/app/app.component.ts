import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd,Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { UsuarioService } from './services/usuario.service';

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

  constructor(
    private _userService:UsuarioService,
    private elRef: ElementRef,
    private router: Router,
    private _cartService: CartService 
  ) {
    this.checkIdentity=setInterval(()=>{
      this.identity=this._userService.getIdentity();
    },10000);
  }

  ngOnInit() {
    this.QuantityItems();
    this.verifyToken();
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

}
