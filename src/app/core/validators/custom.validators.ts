import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static firstNameInitialLetter({ value }: AbstractControl): ValidationErrors | null {
    if (value.charCodeAt(0) < 65 || value.charCodeAt(0) > 90) {
      return {
        firstName: true
      };
    }
    return null;
  }
}
