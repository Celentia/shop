import { Component, Input, type OnInit, inject } from '@angular/core';
import { Location } from '@angular/common';
import { type Product } from 'src/app/products/models/product.model';
import { ProductCategory } from 'src/app/products/models/product-category.enum';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input({ required: true }) product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: ProductCategory.Black,
    isAvailable: false
  };

  private productsService = inject(ProductsPromiseService);
  private location = inject(Location);

  ngOnInit(): void {
    this.product = this.product ? this.product : { ...(this.product as Product) };
  }

  onSaveProduct(): void {
    const product = { ...this.product };
    const method = product.id ? 'updateProduct' : 'createProduct';

    this.productsService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack() {
    this.location.back();
  }
}
