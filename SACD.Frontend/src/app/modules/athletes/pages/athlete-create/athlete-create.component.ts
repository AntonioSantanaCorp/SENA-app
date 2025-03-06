import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlInputComponent } from '@core/libs/control-field/components/control-input/control-input.component';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@core/libs/titles';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@core/libs/forms-information';

@Component({
  selector: 'app-athlete-create',
  standalone: true,
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ControlInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent extends UserDetailsFormComponent {
  test = new FormControl('', Validators.required);
  protected create(): void {
    this.markAllAsTouched();
    console.log(this.form.value);
  }
}
