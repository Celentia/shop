import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { canActivateAuthGuard } from './guards/can-activate-auth.guard';
import { AdminProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { productResolver } from './resolvers/product.resolver';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    title: 'Admin',
    component: AdminComponent,
    canActivate: [canActivateAuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: AdminProductListComponent, title: 'Products list' },
          {
            path: 'product/add',
            component: ProductFormComponent,
            title: 'Create product'
          },
          {
            path: 'product/edit/:id',
            component: ProductFormComponent,
            title: 'Edit product',
            resolve: {
              product: productResolver
            }
          },
          {
            path: 'orders',
            component: OrdersComponent,
            title: 'Orders'
          },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
