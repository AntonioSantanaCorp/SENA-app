import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@core/libs/titles';
import {
  AddressInfoComponent,
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
  ],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent extends UserDetailsFormComponent {}
