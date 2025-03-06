import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  AddressInfoFormModel,
  createAddressInfoForm,
} from '../../form-controls/address-info.form';
import { UserInfoComponent } from '../../models/user-info-component.model';

@Component({
  selector: 'app-address-info',
  standalone: true,
  imports: [],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInfoComponent extends UserInfoComponent<AddressInfoFormModel> {
  public readonly form = createAddressInfoForm();
}
