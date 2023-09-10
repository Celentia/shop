import { Component, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<Product>> = of([]);

  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  private router = inject(Router);

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onAddToCart(product: Product) {
    alert(product.name + ' added to the cart');
    this.cartService.addCartItem(product);
  }

  onViewProduct(product: Product) {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
