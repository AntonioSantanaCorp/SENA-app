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
import { ControlFormDirective } from '../../directives/control-form.directive';
import { createUserGeneralInfoForm } from '../../form-controls/user-general-info.form';

@Component({
  selector: 'app-user-general-info',
  standalone: true,
  host: { class: 'form-section' },
  imports: [ReactiveFormsModule, ControlFormDirective, NgTemplateOutlet],
  templateUrl: './user-general-info.component.html',
  styleUrl: './user-general-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserGeneralInfoComponent {
  protected readonly documentsTypes = DOCUMENTS_TYPES;

  protected readonly rhTypes = RH_TYPES;

  protected readonly shirtsSizes = SHIRT_SIZES;

  protected readonly genders = GENDERS;

  public readonly form = createUserGeneralInfoForm();

  protected get value() {
    return this.form.getRawValue();
  }

  protected get valid() {
    return this.form.valid;
  }

  protected get invalid() {
    return this.form.invalid;
  }
}
