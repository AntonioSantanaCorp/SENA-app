import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InactivationReason } from '@core/domains/athlete/constants/inactivation-reasons.constant';

export function createAthleteInactivationForm() {
  const formBuilder = inject(FormBuilder);
  const form = formBuilder.nonNullable.group({
    inactivationReason: ['', Validators.required],
    descripcion: [{ value: '', disable: true }],
  });
  const descriptionValidator = Validators.required;

  form.controls.inactivationReason.valueChanges.subscribe((value) => {
    const { descripcion } = form.controls;

    if (value === InactivationReason.Otro)
      descripcion.addValidators(descriptionValidator);
    else descripcion.removeValidators(descriptionValidator);

    descripcion.updateValueAndValidity();
  });

  return form;
}
