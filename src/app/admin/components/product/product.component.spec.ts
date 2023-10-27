import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductCategory } from 'src/app/products/models/product-category.enum';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    });
    const mockProduct = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price: 19.99,
      category: ProductCategory.Black,
      isAvailable: true
    };

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
