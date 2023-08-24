import { Component, DoCheck, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements DoCheck {
  cartItems: CartItem[] = [];
  totalCost!: number;
  totalQuantity!: number;

  private cartService = inject(CartService);

  ngDoCheck(): void {
    this.updateCartItems();
  }

  trackByFn(_index: number, item: CartItem): number {
    return item.id;
  }

  updateCartItems() {
    this.cartItems = this.cartService.getCartItems();
    this.totalCost = this.cartService.totalCost;
    this.totalQuantity = this.cartService.totalQuantity;
  }

  onDeleteItem(id: number) {
    this.cartService.removeCartItem(id);
    this.updateCartItems();
  }

  onQuantityIncrease(id: number) {
    this.cartService.increaseItemQuantity(id);
    this.updateCartItems();
  }

  onQuantityDecrease(id: number) {
    this.cartService.decreaseItemQuantity(id);
    this.updateCartItems();
  }
}
