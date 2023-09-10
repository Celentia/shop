import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() editProduct = new EventEmitter();

  onEdit() {
    this.editProduct.emit(this.product);
  }
}
