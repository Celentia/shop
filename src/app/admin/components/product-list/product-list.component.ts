import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsFacade } from 'src/app/core/@ngrx/products/products.facade';
import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
  products$!: Observable<ReadonlyArray<Product>>;

  private router = inject(Router);
  private productsFacade = inject(ProductsFacade);

  ngOnInit(): void {
    this.products$ = this.productsFacade.products$;
    this.productsFacade.getProducts();
  }

  onEditProduct(product: Product) {
    const link = ['/admin/product/edit', product.id];
    this.router.navigate(link);
  }

  onAddProduct() {
    const link = ['/admin/product/add'];
    this.router.navigate(link);
  }
}
