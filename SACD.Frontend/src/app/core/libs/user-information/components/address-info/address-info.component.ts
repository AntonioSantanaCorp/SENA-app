import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInputComponent } from '../../../control-field/components/control-input/control-input.component';
import {
  AddressInfoFormModel,
  createAddressInfoForm,
} from '../../form-controls/address-info.form';
import { UserInfoComponent } from '../../models/user-info-component.model';

@Component({
  selector: 'app-address-info',
  standalone: true,
  imports: [ReactiveFormsModule, ControlInputComponent],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInfoComponent extends UserInfoComponent<AddressInfoFormModel> {
  public readonly form = createAddressInfoForm();
}
