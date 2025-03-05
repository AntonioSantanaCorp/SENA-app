import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export function createUserGeneralInfoForm() {
  const formBuilder = inject(FormBuilder);

  return formBuilder.nonNullable.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipoDocumento: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    tipoRH: ['', Validators.required],
    genero: ['', Validators.required],
    peso: [50],
    altura: [0],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    tallaCamisa: ['S'],
    tallaCalzado: [38, [Validators.pattern('^[0-9]+$')]],
    tallaPantalon: [32, [Validators.pattern('^[0-9]+$')]],
  });
}

export type UserGeneralInfoFormModel = ReturnType<
  typeof createUserGeneralInfoForm
>;
