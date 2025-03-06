import { FormGroup } from '@angular/forms';
import { UserDetailsFormModel } from './user-details-form-model';

export abstract class UserInfoComponent<T extends FormGroup> {
  public abstract readonly form: T;

  public abstract readonly type: keyof UserDetailsFormModel

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
