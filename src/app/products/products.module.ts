import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CartModule, SharedModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
