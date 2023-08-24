import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart.model';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() item!: CartItem;
  @Output() deleteItem = new EventEmitter();
  @Output() quantityIncrease = new EventEmitter();
  @Output() quantityDecrease = new EventEmitter();

  onDeleteItem(id: number) {
    this.deleteItem.emit(id);
  }

  onQuantityIncrease(id: number) {
    this.quantityIncrease.emit(id);
  }

  onQuantityDecrease(id: number) {
    this.quantityDecrease.emit(id);
  }
}
