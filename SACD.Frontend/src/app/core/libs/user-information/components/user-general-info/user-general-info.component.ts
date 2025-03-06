import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DOCUMENTS_TYPES } from '../../../../constants/document-type.constant';
import { GENDERS } from '../../../../constants/gender.constant';
import { RH_TYPES } from '../../../../constants/rh-type.constant';
import { SHIRT_SIZES } from '../../../../constants/shirt-size.constant';
import { ControlInputComponent } from '../../../control-field/components/control-input/control-input.component';
import { ControlFormDirective } from '../../directives/control-form.directive';
import {
  createUserGeneralInfoForm,
  UserGeneralInfoFormModel,
} from '../../form-controls/user-general-info.form';
import { UserInfoComponent } from '../../models/user-info-component.model';

@Component({
  selector: 'app-user-general-info',
  standalone: true,
  host: { class: 'form-section' },
  imports: [
    ReactiveFormsModule,
    ControlFormDirective,
    NgTemplateOutlet,
    ControlInputComponent,
  ],
  templateUrl: './user-general-info.component.html',
  styleUrl: './user-general-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserGeneralInfoComponent extends UserInfoComponent<UserGeneralInfoFormModel> {
  protected readonly documentsTypes = DOCUMENTS_TYPES;

  protected readonly rhTypes = RH_TYPES;

  protected readonly shirtsSizes = SHIRT_SIZES;

  protected readonly genders = GENDERS;

  public override readonly form = createUserGeneralInfoForm();
}
