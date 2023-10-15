import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/products/models/product.model';

export const getProducts = createAction('[Products List Page (App/Admin)] GET_PRODUCTS');
export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCESS',
  props<{ products: Product[] }>()
);
export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string | null }>()
);

export const getProduct = createAction('[Product View Page] GET_PRODUCT', props<{ productID: string | number }>());
export const getProductSuccess = createAction(
  '[Get Product Effect] GET_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);
export const getProductError = createAction(
  '[Get Product Effect] GET_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const updateProduct = createAction('[Product Form Page] UPDATE_PRODUCT', props<{ product: Product }>());
export const updateProductSuccess = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);
export const updateProductError = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const createProduct = createAction('[Product Form Page] CREATE_PRODUCT', props<{ product: Product }>());
export const createProductSuccess = createAction(
  '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);
export const createProductError = createAction(
  '[Create Product Effect] CREATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);
