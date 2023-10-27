import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AdminProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: AdminProductListComponent;
  let fixture: ComponentFixture<AdminProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductListComponent],
      providers: [provideMockStore({})]
    });
    fixture = TestBed.createComponent(AdminProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
