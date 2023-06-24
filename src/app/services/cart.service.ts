import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {
    // Recuperar los datos del carrito almacenados en localStorage al inicializar el servicio
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.cartItemList = JSON.parse(cartItems);
      this.productList.next(this.cartItemList);
    }
  }

  getProducts() {
    console.log('get', this.productList.getValue());
    return this.productList.asObservable();
  }

  getProductCount(): number {
    return this.cartItemList.length;
  }

  private saveCartItems() {
    // Guardar los datos del carrito en localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItemList));
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.saveCartItems(); // Guardar los datos actualizados en localStorage
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    this.saveCartItems(); // Guardar los datos actualizados en localStorage
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    const index = this.cartItemList.findIndex((a: any) => product.id === a.id);
    if (index !== -1) {
      this.cartItemList.splice(index, 1);
      this.productList.next(this.cartItemList);
      this.saveCartItems(); // Guardar los datos actualizados en localStorage
    }
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.saveCartItems(); // Guardar los datos actualizados en localStorage
  }
}

