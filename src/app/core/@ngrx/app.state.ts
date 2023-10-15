import { ProductsState } from './products/products.state';
import { RouterState } from './router/router.state';

export const productsFeatureKey = 'products';
export const routerFeatureKey = 'router';
export interface AppState {
  [productsFeatureKey]: ProductsState;
  [routerFeatureKey]: RouterState;
}
