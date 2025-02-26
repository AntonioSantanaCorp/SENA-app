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
    peso: [0],
    altura: [0],
    correo: ['', Validators.required],
    telefono: ['', Validators.required],
    tallaCamisa: ['S'],
    tallaCalzado: [0],
    tallaPantalon: [0],
  });
}
