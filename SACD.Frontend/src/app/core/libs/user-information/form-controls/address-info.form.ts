import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export function createAddressInfoForm() {
  const formBuilder = inject(FormBuilder);

  return formBuilder.nonNullable.group({
    departamento: ['', Validators.required],
    ciudad: ['', Validators.required],
    direccion: ['', Validators.required],
  });
}

export type AddressInfoFormModel = ReturnType<typeof createAddressInfoForm>;
