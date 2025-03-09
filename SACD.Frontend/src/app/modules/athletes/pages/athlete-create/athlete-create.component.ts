import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@libs/forms-information';
import { HeaderSubtitleComponent, HeaderTitleComponent } from '@libs/titles';

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
    ReactiveFormsModule,
  ],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent extends UserDetailsFormComponent {
  protected create(): void {
    this.markAllAsTouched();
    console.log(this.form.value);
  }
}
