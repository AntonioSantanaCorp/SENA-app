import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStore } from '@web/libs/locations';
import { UserDetailsFormComponent } from '@web/libs/shared/ui/forms-information';
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
  selector: 'app-athlete-create',
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
  private readonly locationStore = inject(LocationStore);

  constructor() {
    super();

    effect(() => {
      console.log(this.locationStore.departamentos());
    });
  }

  protected create(): void {
    this.form.markAllAsTouched();
    console.log(this.form.value);
  }
}
