import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CartService } from '../services/cart.service';

export const IsCartEmptyGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const isEmpty = cartService.isEmptyCart();
  return isEmpty;
};
