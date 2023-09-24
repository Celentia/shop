import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { ProductsPromiseService } from './products-promise.service';
import { Product } from '../models/product.model';

export const productPageTitleResolver: ResolveFn<string> = route => {
  const id = route.paramMap.get('productID')!;
  const productsService = inject(ProductsPromiseService);
  const defaultPageTitle = 'Product';

  if (!route.paramMap.has('productID')) {
    return of(defaultPageTitle);
  }

  return productsService
    .getProduct(id)
    .then((product: Product | undefined) => {
      if (product) {
        return Promise.resolve(`${defaultPageTitle}: ${product.name}`);
      } else {
        return Promise.resolve(defaultPageTitle);
      }
    })
    .catch(() => {
      return Promise.reject('Error fetching product');
    });
};
