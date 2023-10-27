import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductComponent } from './product.component';
import { ProductCategory } from '../../models/product-category.enum';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    // arrange
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

  it('should disable Buy button if the product is not available', () => {
    const button = fixture.debugElement.query(By.css('#button')); // arrange
    component.product = { ...component.product, isAvailable: false }; // act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(button.nativeElement.getAttribute('disabled')).toEqual(''); // assert
  });

  it('should add euro currency to the price', () => {
    const div = fixture.debugElement.query(By.css('#price')); // arrange
    fixture.detectChanges();

    expect(div.nativeElement.textContent).toBe('€19.99'); // assert
  });

  it('should convert category title to uppercase', async () => {
    const div = fixture.debugElement.query(By.css('#category')); // arrange
    fixture.detectChanges();

    expect(div.nativeElement.textContent).toBe('BLACK'); // assert
  });
});
