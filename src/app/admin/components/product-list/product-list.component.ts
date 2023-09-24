import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/models/product.model';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
  products$!: Promise<Product[]>;

  private productsService = inject(ProductsPromiseService);
  private router = inject(Router);

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
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
