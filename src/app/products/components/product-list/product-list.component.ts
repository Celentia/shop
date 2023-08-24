import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    public productsService: ProductsService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  // Если вы будете передавать продукт вместо идентификатора,
  // то вам не нужно будет искать этот продукт
  onAddToCart(id: number) {
    const product = this.products.find(x => x.id === id)!;
    this.cartService.addCartItem(product);
  }
}
