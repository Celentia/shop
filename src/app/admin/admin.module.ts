import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from '../orders/orders.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminProductListComponent,
    ProductFormComponent,
    ProductComponent,
    OrdersComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule]
})
export class AdminModule {}
