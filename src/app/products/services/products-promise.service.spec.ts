import { TestBed } from '@angular/core/testing';

import { ProductsPromiseService } from './products-promise.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsPromiseService', () => {
  let service: ProductsPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
