import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { ProductCategory } from 'src/app/products/models/product-category.enum';
import { Product } from 'src/app/products/models/product.model';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';

export const productResolver: ResolveFn<Product> = route => {
  const id = route.paramMap.get('id')!;
  const productsService = inject(ProductsPromiseService);
  const router = inject(Router);

  if (!route.paramMap.has('id')) {
    return of(new Product(0, '', '', 0, ProductCategory.Black, false));
  }

  return productsService
    .getProduct(id)
    .then((product: Product | undefined) => {
      if (product) {
        return Promise.resolve(product);
      } else {
        router.navigate(['/products']);
        return Promise.reject('Product not found');
      }
    })
    .catch(() => {
      router.navigate(['/products']);
      return Promise.reject('Error fetching product');
    });
};
