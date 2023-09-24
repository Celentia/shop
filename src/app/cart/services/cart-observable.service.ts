import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';
import { CartAPI } from '../cart.config';
import { CartItem } from '../models/cart.model';
import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  private http = inject(HttpClient);

  constructor(@Inject(CartAPI) private cartUrl: string) {}

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartUrl).pipe(catchError(this.handleError));
  }

  addCartItem(product: Product): Observable<CartItem> {
    const cartItem = this.convertProductToCartItem(product);
    const url = this.cartUrl;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<CartItem>(url, cartItem, options).pipe(catchError(this.handleError));
  }

  increaseItemQuantity(item: CartItem): Observable<CartItem> {
    const url = `${this.cartUrl}/${item.id}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    item.quantity++;
    item.price = item.price + item.price / (item.quantity - 1);
    return this.http.put<CartItem>(url, item, options).pipe(catchError(this.handleError));
  }

  decreaseItemQuantity(item: CartItem) {
    const url = `${this.cartUrl}/${item.id}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (item.quantity > 1) {
      item.price = item.price - item.price / item.quantity;
      item.quantity--;
    }
    return this.http.put<CartItem>(url, item, options).pipe(catchError(this.handleError));
  }

  isEmptyCart(): Observable<boolean> {
    return this.getCartItems().pipe(map(cartItems => cartItems.length === 0));
  }

  removeCartItem(item: CartItem): Observable<void> {
    const url = `${this.cartUrl}/${item.id}`;
    return this.http.delete<void>(url).pipe(catchError(this.handleError));
  }

  private convertProductToCartItem(product: Product): CartItem {
    return new CartItem(product.id, product.name, 1, product.price);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
