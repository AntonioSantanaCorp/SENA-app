import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInputComponent } from '@libs/control-field';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserGeneralInfoComponent,
} from '@libs/forms-information';
import { HeaderSubtitleComponent, HeaderTitleComponent } from '@libs/titles';

@Component({
  selector: 'app-athlete-edit',
  standalone: true,
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ControlInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './athlete-edit.component.html',
  styleUrl: './athlete-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteEditComponent {}
