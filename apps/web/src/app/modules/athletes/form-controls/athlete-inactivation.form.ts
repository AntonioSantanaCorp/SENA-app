import { inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AthleteInactivationReason } from '@core/domains/athlete/constants/inactivation-reasons.constant';

export function createAthleteInactivationForm() {
  const formBuilder = inject(FormBuilder);
  const form = formBuilder.nonNullable.group({
    inactivationReason: ['', Validators.required],
    descripcion: new FormControl({ value: '', disabled: true }),
  });
  const descriptionValidator = Validators.required;

  form.controls.inactivationReason.valueChanges.subscribe((value) => {
    const { descripcion } = form.controls;

    if (value === AthleteInactivationReason.Otro) {
      descripcion.addValidators(descriptionValidator);
      descripcion.enable();
    } else {
      descripcion.removeValidators(descriptionValidator);
      descripcion.disable();
    }

    descripcion.updateValueAndValidity();
  });

  return form;
}
