import { FormControl, Validators } from '@angular/forms';

export function contractControl() {
  return new FormControl<File | null>(null, Validators.required);
}

export type ContractForm = ReturnType<typeof contractControl>;