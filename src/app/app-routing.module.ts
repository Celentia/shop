import { Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponent }
];

export class AppRoutingModule {}
