import { Directive, viewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlInputComponent } from '@core/libs/control-field/components/control-input/control-input.component';
import { UserDetailsFormModel } from '../models/user-details-form-model';

@Directive({ standalone: true })
export abstract class FormComponent<T extends FormGroup> {
  private readonly _controlFields = viewChildren(ControlInputComponent);

  public abstract readonly form: T;

  public abstract readonly type: keyof UserDetailsFormModel;

  public get value(): ReturnType<T['getRawValue']> {
    return this.form.getRawValue();
  }

  public get valid() {
    return this.form.valid;
  }

  public get invalid() {
    return this.form.invalid;
  }

  public markAsTouched(): void {
    this._controlFields().forEach((control) => control.markAsTouched());
  }
}
