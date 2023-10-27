import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProcessOrderComponent } from './process-order.component';

describe('ProcessOrderComponent', () => {
  let component: ProcessOrderComponent;
  let fixture: ComponentFixture<ProcessOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessOrderComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ProcessOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
