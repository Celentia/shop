import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CartItem } from '../models/cart.model';
import { CartObservableService } from './cart-observable.service';

describe('CartObservableService', () => {
  let service: CartObservableService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartObservableService, { provide: HttpClient, useValue: httpClientSpy }]
    });

    service = TestBed.inject(CartObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCartItems', () => {
    it('should return an observable of cart items', () => {
      const mockCartItems: CartItem[] = [
        { id: 1, name: 'Product 1', quantity: 1, price: 10 },
        { id: 2, name: 'Product 2', quantity: 1, price: 20 }
      ];

      httpClientSpy.get.and.returnValue(of(mockCartItems));

      service.getCartItems().subscribe(cartItems => {
        expect(cartItems).toEqual(mockCartItems);
      });
    });
  });

  describe('isEmptyCart', () => {
    it('should return true if the cart is empty', () => {
      const mockCartItems: CartItem[] = [];

      spyOn(service, 'getCartItems').and.returnValue(of(mockCartItems));

      service.isEmptyCart().subscribe(isEmpty => {
        expect(isEmpty).toEqual(true);
      });
    });

    it('should return false if the cart is not empty', () => {
      const mockCartItems: CartItem[] = [{ id: 1, name: 'Product 1', quantity: 1, price: 10 }];

      spyOn(service, 'getCartItems').and.returnValue(of(mockCartItems));

      service.isEmptyCart().subscribe(isEmpty => {
        expect(isEmpty).toBe(false);
      });
    });
  });
});
