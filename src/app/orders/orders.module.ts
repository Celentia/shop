import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { EmailValidationDirective } from '../core/validators/email-validation.directive';

@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [CommonModule, ReactiveFormsModule, EmailValidationDirective]
})
export class OrdersModule {}
