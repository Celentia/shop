import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductsPromiseService } from '../../services/products-promise.service';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Promise<Product[]>;

  private productsService = inject(ProductsPromiseService);
  private cartService = inject(CartObservableService);
  private router = inject(Router);

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
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
