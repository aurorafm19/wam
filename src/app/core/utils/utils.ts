import { HttpParams } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function createHttpParams(params: {}, httpParams = new HttpParams()): HttpParams {
  Object.keys(params).forEach(param => {
    if (params[param]) {
      httpParams = httpParams.set(param, params[param]);
    }
  });

  return httpParams;
}
export function isValidNameOrLastname(data: string) {
  const nameLastnameRegex = new RegExp(/^[a-zA-Z]*$/g);
  return nameLastnameRegex.test(data);
}

export function ValidatorNonSpecialAndNumberCharacters(control: AbstractControl): ValidationErrors | null {
  if (!isValidNameOrLastname(control.value)) {
    return { validNonSpecialAndNumberCharacter: true };
  }
  return null;
}
