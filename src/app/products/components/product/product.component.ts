import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter();

  isAddedToCart: boolean = false;

  onAddToCart() {
    this.isAddedToCart = true;
    this.addToCart.emit(this.product.id);
  }
}
