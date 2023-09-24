import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { CartObservableService } from '../services/cart-observable.service';

export const IsCartEmptyGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartObservableService);
  let isEmpty = false;
  return cartService.isEmptyCart().pipe(map(empty => (isEmpty = !empty)));
};
