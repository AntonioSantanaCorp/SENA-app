import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@core/libs/titles';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@core/libs/user-information';

@Component({
  selector: 'app-athlete-create',
  standalone: true,
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent
  ],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent extends UserDetailsFormComponent {
  test() {
    console.log(this.form.value);
  }
}
