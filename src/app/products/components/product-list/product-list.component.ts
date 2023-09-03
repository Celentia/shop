import { Component, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<Product>> = of([]);

  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.addCartItem(product);
  }
}
