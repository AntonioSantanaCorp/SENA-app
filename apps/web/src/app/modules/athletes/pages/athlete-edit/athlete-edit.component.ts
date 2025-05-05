import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserGeneralInfoComponent,
} from '@web/libs/shared/ui/forms-information';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@web/libs/shared/ui/titles';

@Component({
  selector: 'app-athlete-edit',
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './athlete-edit.component.html',
  styleUrl: './athlete-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteEditComponent {
  public readonly id = input.required<string>();
}
