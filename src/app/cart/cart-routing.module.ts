import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { IsCartEmptyGuard } from './guards/is-cart-empty.guard';
import { ProcessOrderComponent } from '../orders/components/process-order/process-order.component';

const routes: Routes = [
  {
    path: 'order',
    title: 'Process order',
    component: ProcessOrderComponent,
    canActivate: [IsCartEmptyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
