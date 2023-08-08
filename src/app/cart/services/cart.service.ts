import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCartItems(): Array<Cart> {
    return [
      {
        id: 1,
        name: 'Assam Gold',
        quantity: 3,
        price: 59
      },
      {
        id: 2,
        name: 'Chinese Sencha',
        quantity: 5,
        price: 79
      }
    ];
  }
}
