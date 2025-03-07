import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInputComponent } from '../../../../control-field/components/control-input/control-input.component';
import {
  AddressInfoForm,
  createAddressInfoForm,
} from '../../../form-controls/address-info.form';
import { FormComponent } from '../../../directives/form-component.directive';

@Component({
  selector: 'app-address-info',
  standalone: true,
  host: { class: 'form-section' },
  imports: [ReactiveFormsModule, ControlInputComponent],
  providers: [
    { provide: FormComponent, useExisting: AddressInfoComponent },
  ],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInfoComponent extends FormComponent<AddressInfoForm> {
  public override readonly type = 'addressInfo';

  public readonly form = createAddressInfoForm();
}
