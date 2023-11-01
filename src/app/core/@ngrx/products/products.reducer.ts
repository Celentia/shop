import { createReducer, on } from '@ngrx/store';

import { ProductsState, initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, (state: ProductsState) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    const data = [...products];
    return {
      ...state,
      data,
      loading: false,
      loaded: true
    };
  }),
  on(ProductsActions.getProductsError, ProductsActions.getProductError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),

  on(ProductsActions.getProduct, (state: any) => {
    return { ...state };
  }),
  on(ProductsActions.getProductSuccess, (state, { product }) => {
    const selectedProduct = { ...product };
    return {
      ...state,
      loading: false,
      loaded: true,
      selectedProduct
    };
  }),
  on(ProductsActions.updateProductError, ProductsActions.createProductError, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),

  on(ProductsActions.createProduct, state => {
    return { ...state };
  }),
  on(ProductsActions.createProductSuccess, (state, { product }) => {
    const data = [...state.data, { ...product }];

    return { ...state, data };
  })
);
