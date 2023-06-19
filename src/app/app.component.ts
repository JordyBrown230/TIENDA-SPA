import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd,Router } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda-SPA';
  activeLink: HTMLElement | null = null;
  totalItem: number = 0; 
  constructor(
    private elRef: ElementRef,
    private router: Router,
    private _cartService: CartService 
  ) {

  }

  ngOnInit() {
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
  
}
