import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {
  private productsUrl = 'http://localhost:3000/products';
  private http = inject(HttpClient);

  getProducts(): Promise<Product[]> {
    const request$ = this.http.get(this.productsUrl);
    return firstValueFrom(request$)
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  getProduct(id: NonNullable<Product['id']> | string): Promise<Product> {
    const url = `${this.productsUrl}/${id}`;

    const request$ = this.http.get(url);
    return firstValueFrom(request$)
      .then(response => response as Product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const request$ = this.http.put(url, product, options);

    return firstValueFrom(request$)
      .then(response => response as Product)
      .catch(this.handleError);
  }

  createProduct(product: Product): Promise<Product> {
    const url = this.productsUrl;
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    };

    const request$ = this.http.post(url, product, options);

    return firstValueFrom(request$)
      .then(response => response as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
