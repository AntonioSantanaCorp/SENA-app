import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserGeneralInfoComponent } from '../../../../core/libs/user-information/components/user-general-info/user-general-info.component';
import { HeaderTitleComponent } from '../../../../layout/components/header-title/header-title.component';
import { AtheleFormModel } from '../../models/athele-form.model';

@Component({
  selector: 'app-athlete-create',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent, UserGeneralInfoComponent],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent {
  protected userForm?: AtheleFormModel;
}
