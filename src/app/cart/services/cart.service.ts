import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';
  private cartItems: CartItem[] = [];
  private itemInitialPrices: { [itemId: number]: number } = {};

  constructor() {
    this.loadCartData();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addCartItem(product: Product) {
    const repeatableItem = this.cartItems.find(item => item.name === product.name);

    if (!repeatableItem) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price
      });

      this.itemInitialPrices[product.id] = product.price;
    } else this.increaseItemQuantity(repeatableItem.id);

    this.saveCartData();
  }

  removeCartItem(id: number) {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
    }
  }

  increaseItemQuantity(id: number) {
    const item = this.cartItems.find(item => item.id === id);
    if (item) {
      item.quantity++;
      item.price = this.itemInitialPrices[id] * item.quantity;
    }
  }

  decreaseItemQuantity(id: number) {
    const item = this.cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
      item.price = this.itemInitialPrices[id] * item.quantity;
    }
  }

  removeAllProducts(): CartItem[] {
    this.cartItems = [];
    localStorage.removeItem(this.cartKey);
    return this.cartItems;
  }

  isEmptyCart(): boolean {
    return !!this.getCartItems().length;
  }

  get totalCost() {
    let totalPrice = 0;
    this.cartItems.forEach(item => (totalPrice += item.price));
    return totalPrice;
  }

  get totalQuantity() {
    let totalQuantity = 0;
    this.cartItems.forEach(item => (totalQuantity += item.quantity));
    return totalQuantity;
  }

  private saveCartData() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
  }

  private loadCartData() {
    const savedCartData = localStorage.getItem(this.cartKey);
    if (savedCartData) {
      this.cartItems = JSON.parse(savedCartData);
    }
  }
}
