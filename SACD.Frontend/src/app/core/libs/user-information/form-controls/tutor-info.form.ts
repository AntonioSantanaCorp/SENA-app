import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export function createTutorInfoForm() {
  const formBuilder = inject(FormBuilder);

  return formBuilder.nonNullable.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipoDocumento: ['', Validators.required],
    numeroDocumento: ['', Validators.required],
    correo: ['', Validators.required],
  });
}
