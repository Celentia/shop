import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponent }
];

@NgModule({
  // Если добавление роутов происходит в main.ts, то тут их не надо добавлять
  // и можно также не делать этот файл модулем
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule {}
