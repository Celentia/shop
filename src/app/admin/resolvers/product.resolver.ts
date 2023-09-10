import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, EMPTY, of, switchMap, take } from 'rxjs';
import { ProductCategory } from 'src/app/products/models/product-category.enum';
import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productsService = inject(ProductsService);
  const router = inject(Router);

  if (!route.paramMap.has('id')) {
    return of(new Product(0, '', '', 0, ProductCategory.Black, false));
  }

  const id = route.paramMap.get('id')!;

  return productsService.getProduct(id).pipe(
    switchMap((product: Product | undefined) => {
      if (product) {
        return of(product);
      } else {
        router.navigate(['/products']);
        return EMPTY;
      }
    }),
    take(1),
    catchError(() => {
      router.navigate(['/products']);
      return EMPTY;
    })
  );
};
