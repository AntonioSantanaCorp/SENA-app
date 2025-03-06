import { FormGroup } from '@angular/forms';

export abstract class UserInfoComponent<T extends FormGroup> {
  public abstract readonly form: T;

  public get value(): ReturnType<T['getRawValue']> {
    return this.form.getRawValue();
  }

  public get valid() {
    return this.form.valid;
  }

  public get invalid() {
    return this.form.invalid;
  }
}
