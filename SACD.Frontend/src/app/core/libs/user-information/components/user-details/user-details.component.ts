import { Directive, viewChildren } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { UserDetailsFormModel } from '../../models/user-details-form-model';
import { UserInfoComponent } from '../../models/user-info-component.model';

@Directive({
  standalone: true,
})
export abstract class UserDetailsFormComponent {
  protected readonly componentsForms = viewChildren(UserInfoComponent);

  public readonly form = new FormGroup<UserDetailsFormModel>({});

  constructor() {
    toObservable(this.componentsForms).subscribe((components) =>
      components.forEach(({ type, form }) => this.form.addControl(type, form))
    );
  }
}
