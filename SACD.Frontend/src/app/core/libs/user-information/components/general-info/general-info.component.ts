import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralInfoComponent {

}
