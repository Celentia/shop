import { Component, Input, type OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsFacade } from 'src/app/core/@ngrx/products/products.facade';
import { type Product } from 'src/app/products/models/product.model';
import { ProductCategory } from 'src/app/products/models/product-category.enum';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input({ required: true }) product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: ProductCategory.Black,
    isAvailable: false
  };

  private store: Store = inject(Store);
  private productsFacade = inject(ProductsFacade);
  products$!: Observable<readonly Product[]>;

  ngOnInit(): void {
    this.product = this.product ? this.product : { ...(this.product as Product) };
  }

  onSaveProduct(): void {
    const product = { ...this.product };

    if (product.id) {
      this.productsFacade.updateProduct({ product });
    } else {
      this.productsFacade.createProduct({ product });
    }
  }

  onGoBack() {
    this.store.dispatch(RouterActions.back());
  }
}
