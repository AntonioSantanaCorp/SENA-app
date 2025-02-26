import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-address-info',
  standalone: true,
  imports: [],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInfoComponent {}
