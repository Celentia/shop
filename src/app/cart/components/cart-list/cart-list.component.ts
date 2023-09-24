import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart.model';
import { CartObservableService } from '../../services/cart-observable.service';
import { Observable, Subject, forkJoin, of, take, takeUntil } from 'rxjs';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems$: Observable<CartItem[]> = of([]);
  totalCost!: number;
  totalQuantity!: number;
  selectedSortField: string = 'Sort by';
  withItems = true;
  isAsc = false;

  private cartService = inject(CartObservableService);
  private appSettingsService = inject(AppSettingsService);
  private router = inject(Router);
  private destroyed$ = new Subject<void>();

  ngOnInit() {
    this.cartItems$ = this.cartService.getCartItems();
    this.cartService
      .isEmptyCart()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isEmpty => (this.withItems = !isEmpty));
    this.appSettingsService
      .getSortOptions()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((option: string) => {
        this.selectedSortField = option;
      });
    this.updateCartItems();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onSortOptionChange() {
    this.appSettingsService.setSortOptions(this.selectedSortField);
  }

  onDeleteItem(item: CartItem) {
    this.cartService.removeCartItem(item).subscribe();
    this.cartItems$ = this.cartService.getCartItems().pipe(take(1));
  }

  onQuantityIncrease(item: CartItem) {
    this.cartService.increaseItemQuantity(item).subscribe();
    this.updateCartItems();
  }

  onQuantityDecrease(item: CartItem) {
    this.cartService.decreaseItemQuantity(item).subscribe();
    this.updateCartItems();
  }

  onRemoveAll() {
    this.cartService.getCartItems().subscribe(cartItems => {
      const removalPromises: Observable<void>[] = [];

      cartItems.forEach(item => {
        removalPromises.push(this.cartService.removeCartItem(item));
      });

      forkJoin(removalPromises).subscribe(() => {
        this.cartItems$ = of([]);
        this.updateCartItems();
      });
    });
  }

  onCheckboxChange() {
    this.isAsc = !this.isAsc;
  }

  onGoBack() {
    this.router.navigate(['/products-list']);
  }

  trackByFn(_index: number, item: CartItem): number {
    return item.id;
  }

  private updateCartItems() {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.totalCost = cartItems.reduce((total, item) => total + item.price, 0);
      this.totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    });
  }
}
