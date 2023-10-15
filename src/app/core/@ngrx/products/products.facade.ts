import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { Product } from 'src/app/products/models/product.model';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';
import { selectProductsData, selectSelectedProduct } from './products.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  products$: Observable<ReadonlyArray<Product>>;
  product$!: Observable<Readonly<Product> | null>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectProductsData);
    this.product$ = this.store.select(selectSelectedProduct);
  }

  getProducts() {
    this.store.dispatch(ProductsActions.getProducts());
  }

  getProduct(props: { productID: string | number }) {
    this.store.dispatch(ProductsActions.getProduct(props));
  }

  createProduct(props: { product: Product }) {
    this.store.dispatch(ProductsActions.createProduct(props));
  }

  updateProduct(props: { product: Product }) {
    this.store.dispatch(ProductsActions.updateProduct(props));
  }
}
