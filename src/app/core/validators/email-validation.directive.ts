import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Directive({
  selector: '[appEmailValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true
    }
  ]
})
export class EmailValidationDirective implements Validator {
  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && !EMAIL_REGEX.test(c.value)) {
      return { email: true };
    }

    return null;
  }
}
