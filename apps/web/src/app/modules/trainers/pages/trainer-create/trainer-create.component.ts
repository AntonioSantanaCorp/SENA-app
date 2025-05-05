import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ControlInputComponent } from '@web/libs/shared/ui/control-field';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@web/libs/shared/ui/forms-information';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@web/libs/shared/ui/titles';
import { contractControl } from '../../form-controls/trainer-info.form';

@Component({
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ReactiveFormsModule,
    ControlInputComponent,
  ],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerCreateComponent extends UserDetailsFormComponent {
  protected readonly contract = contractControl();

  protected create(): void {
    this.form.markAllAsTouched();
    console.log(this.form.value);
  }
}
