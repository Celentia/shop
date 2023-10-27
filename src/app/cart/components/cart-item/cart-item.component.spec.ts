import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent]
    });
    const mockCartItem = {
      id: 1,
      name: 'Test Product',
      quantity: 1,
      price: 19.99
    };
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.item = mockCartItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
