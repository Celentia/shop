import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, concatMap, map, switchMap } from 'rxjs';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';
import { Product } from 'src/app/products/models/product.model';
import * as ProductsActions from './products.actions';
import * as RouterActions from './../router/router.actions';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productsService = inject(ProductsPromiseService);

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(() =>
        this.productsService
          .getProducts()
          .then(products => ProductsActions.getProductsSuccess({ products }))
          .catch(error => ProductsActions.getProductsError({ error }))
      )
    )
  );

  getProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProduct),
      map(action => action.productID),
      switchMap(productID =>
        this.productsService
          .getProduct(productID)
          .then(product => ProductsActions.getProductSuccess({ product }))
          .catch(error => ProductsActions.getProductError({ error }))
      )
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      map(action => action.product),
      concatMap((product: Product) =>
        this.productsService
          .updateProduct(product)
          .then((updatedProduct: Product) => {
            return ProductsActions.updateProductSuccess({ product: updatedProduct });
          })
          .catch(error => ProductsActions.updateProductError({ error }))
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      map(action => action.product),
      concatMap((product: Product) =>
        this.productsService
          .createProduct(product)
          .then((createdTask: Product) => {
            return ProductsActions.createProductSuccess({ product: createdTask });
          })
          .catch(error => ProductsActions.createProductError({ error }))
      )
    )
  );

  createUpdateProductSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.updateProductSuccess, ProductsActions.createProductSuccess),
      map(() =>
        RouterActions.go({
          path: ['/admin/products']
        })
      )
    );
  });
}
