import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInputComponent } from '@libs/control-field';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@libs/forms-information';
import { HeaderSubtitleComponent, HeaderTitleComponent } from '@libs/titles';
import { contractControl } from '../../form-controls/trainer-info.form';

@Component({
  standalone: true,
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
  templateUrl: './trainer-edit.component.html',
  styleUrl: './trainer-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerEditComponent extends UserDetailsFormComponent {
  protected readonly contract = contractControl();
}
