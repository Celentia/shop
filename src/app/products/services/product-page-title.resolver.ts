import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, of, switchMap, take } from 'rxjs';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';

export const productPageTitleResolver: ResolveFn<string> = (route, state) => {
  const productsService = inject(ProductsService);

  const defaultPageTitle = 'Product';

  if (!route.paramMap.has('productID')) {
    return of(defaultPageTitle);
  }

  const id = route.paramMap.get('productID')!;

  return productsService.getProduct(id).pipe(
    switchMap((product: Product | undefined) => {
      if (product) {
        return of(`${defaultPageTitle}: ${product.name}`);
      } else {
        return of(defaultPageTitle);
      }
    }),
    take(1),
    catchError(() => {
      return of(defaultPageTitle);
    })
  );
};
