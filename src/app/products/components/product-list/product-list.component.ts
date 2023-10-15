import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';
import { ProductsFacade } from 'src/app/core/@ngrx/products/products.facade';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ReadonlyArray<Product>>;

  private cartService = inject(CartObservableService);
  private router = inject(Router);
  private productsFacade = inject(ProductsFacade);

  ngOnInit(): void {
    this.products$ = this.productsFacade.products$;
    this.productsFacade.getProducts();
  }

  onAddToCart(product: Product) {
    alert(product.name + ' added to the cart');
    this.cartService.addCartItem(product).subscribe();
  }

  onViewProduct(product: Product) {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
