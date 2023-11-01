import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import { Product } from '../../models/product.model';
import { ProductsFacade } from 'src/app/core/@ngrx/products/products.facade';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnInit {
  @Input() productID!: string;

  product$!: Observable<Readonly<Product> | null>;

  private store: Store = inject(Store);
  private productsFacade = inject(ProductsFacade);

  ngOnInit(): void {
    this.product$ = this.productsFacade.product$;
    this.productsFacade.getProduct({ productID: this.productID });
  }

  onGoBack() {
    // у меня тут тип был unknown, поєтому добавил типизацию выше
    this.store.dispatch(RouterActions.back());
  }
}
