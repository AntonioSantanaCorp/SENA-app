import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { FormControlName, ReactiveFormsModule } from '@angular/forms';
import { DOCUMENTS_TYPES } from '../../../../constants/document-type.constant';
import { ControlFormDirective } from '../../directives/control-form.directive';
import { createUserGeneralInfoForm } from '../../form-controls/user-general-info.form';

@Component({
  selector: 'app-user-general-info',
  standalone: true,
  imports: [ReactiveFormsModule, ControlFormDirective, NgTemplateOutlet],
  templateUrl: './user-general-info.component.html',
  styleUrl: './user-general-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserGeneralInfoComponent implements AfterViewInit {
  private readonly inputs = viewChildren(FormControlName);

  protected readonly documentsTypes = DOCUMENTS_TYPES;

  public readonly form = createUserGeneralInfoForm();

  ngAfterViewInit(): void {}
}
