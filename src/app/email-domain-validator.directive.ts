import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[email-domain][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailDomainValidatorDirective, multi: true }
  ]
})
export class EmailDomainValidatorDirective implements Validator {
  validate(control: FormControl): { [key: string]: any } | null {
    if (!control.value) {
      return null;
    }

    if (control.value.indexOf('@cathaybk.com.tw') > -1) {
      return { emailDomain: true };
    } else {
      return null;
    }
  }
}
