import { AbstractControl } from '@angular/forms';

export class Validates {
  static ValidateName(control: AbstractControl) {
    const NAME_REGEXP = /[^0-9]/;
    if (control.value !== null && NAME_REGEXP.test(control.value.charAt(0))) {
      return null;
    }
    return { validName: true };
  }
  static ValidateEmail(control: AbstractControl) {
    const EMAIL_REGEXP = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    if (control.value !== null && EMAIL_REGEXP.test(control.value.toLowerCase())) {
      return null;
    }
    return { validName: true };
  }
}
