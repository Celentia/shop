import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/validators/custom.validators';
import { validationMessagesMap } from './validation-messages';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit {
  private fb = inject(FormBuilder);

  orderForm = this.fb.group({
    firstName: ['', { validators: [Validators.required, CustomValidators.firstNameInitialLetter], updateOn: 'blur' }],
    lastName: '',
    email: ['', [Validators.required]],
    phoneNumber: '',
    phoneNumbers: this.fb.array(['']),
    selfPickup: false,
    address: ['']
  });

  // лучше разные идентификаторы использовать, чтобы не было путаницы
  validationMessagesMap = validationMessagesMap;

  placeholder = {
    address: 'Address'
  };

  get firstName(): AbstractControl {
    return this.orderForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.orderForm.get('lastName')!;
  }

  get email(): AbstractControl {
    return this.orderForm.get('email')!;
  }

  get phoneNumber(): AbstractControl {
    return this.orderForm.get('phoneNumber')!;
  }

  get phoneNumbers(): FormArray {
    return this.orderForm.get('phoneNumbers') as unknown as FormArray;
  }

  get selfPickup(): AbstractControl {
    return this.orderForm.get('selfPickup')!;
  }

  get address(): AbstractControl {
    return this.orderForm.get('address')!;
  }

  ngOnInit() {
    this.watchValueChanges();
    this.setValidationMessages();
  }

  onChangeAddressValidators(selfPickup: boolean) {
    const addressControl = this.address;

    if (selfPickup == true) {
      addressControl.setValidators(Validators.required);
      this.placeholder.address = 'Address (required)';
    } else {
      addressControl.clearValidators();
      this.placeholder.address = 'Address';
    }
    addressControl.updateValueAndValidity();
  }

  onAddPhoneNumber() {
    this.phoneNumbers.push(this.phoneNumber);
  }

  onRemovePhoneNumber(i: number) {
    this.phoneNumbers.removeAt(i);
  }

  onSave() {}

  isShowValidationMessage(controlName: string): boolean {
    return (
      this.validationMessagesMap.get(controlName)!.message && (this as { [index: string]: any })[controlName].touched
    );
  }

  private buildValidationMessages(controlName: string) {
    const c: AbstractControl = (this as { [index: string]: any })[controlName];
    this.validationMessagesMap.get(controlName)!.message = '';

    if (c.errors) {
      this.validationMessagesMap.get(controlName)!.message = Object.keys(c.errors)
        .map(key => {
          const value = this.validationMessagesMap.get(controlName)!;
          return (value as { [index: string]: any })[key];
        })
        .join(' ');
    }
  }

  private setValidationMessages() {
    this.validationMessagesMap.forEach((control, controlName) => {
      this.buildValidationMessages(controlName);
    });
  }

  private watchValueChanges() {
    this.orderForm.valueChanges.subscribe(() => this.setValidationMessages());
  }
}
