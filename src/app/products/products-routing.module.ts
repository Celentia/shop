import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartListComponent } from '../cart/components/cart-list/cart-list.component';
import { productPageTitleResolver } from './services/product-page-title.resolver';

const routes: Routes = [
  {
    path: 'products-list',
    title: 'Products list',
    component: ProductListComponent
  },
  {
    path: 'product/:productID',
    title: productPageTitleResolver,
    component: ProductViewComponent
  },
  {
    path: 'cart',
    title: 'Cart',
    component: CartListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
