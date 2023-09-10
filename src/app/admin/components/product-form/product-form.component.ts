import { Component, Input, OnInit, inject } from '@angular/core';
import { of, type Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { type Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductCategory } from 'src/app/products/models/product-category.enum';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input({ required: true }) product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: ProductCategory.Black,
    isAvailable: false
  };

  product$: Observable<Product | undefined> = of();

  private productsService = inject(ProductsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.product = this.product ? this.product : { ...(this.product as Product) };
    this.product$ = this.route.data.pipe(map(data => data['product']));
  }

  onSaveProduct(): void {
    const product = { ...this.product };
    const method = product.id ? 'updateProduct' : 'createProduct';

    if (product.id) {
      this.router.navigate(['/admin/products', { id: product.id }]);
    }

    this.productsService[method](product);
    this.onGoBack();
  }

  onGoBack() {
    this.router.navigate(['admin/products']);
  }
}
