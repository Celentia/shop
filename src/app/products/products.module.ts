import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductViewComponent],
  imports: [CartModule, SharedModule, ProductsRoutingModule],
  exports: [ProductListComponent, ProductViewComponent]
})
export class ProductsModule {}
