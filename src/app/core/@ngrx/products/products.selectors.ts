import { createFeatureSelector, createSelector } from '@ngrx/store';

import type { ProductsState } from './products.state';
import { productsFeatureKey } from '../app.state';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);
export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectSelectedProduct = createSelector(
  selectProductsState,
  (state: ProductsState) => state.selectedProduct
);
