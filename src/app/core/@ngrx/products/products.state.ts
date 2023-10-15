import { Product } from 'src/app/products/models/product.model';

export interface ProductsState {
  data: ReadonlyArray<Product>;
  selectedProduct: Readonly<Product> | null;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string | null;
}

export const initialProductsState: ProductsState = {
  data: [],
  selectedProduct: null,
  loading: false,
  loaded: false,
  error: null
};
