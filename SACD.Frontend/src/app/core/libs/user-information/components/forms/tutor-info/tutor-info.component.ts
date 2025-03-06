import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { UserInfoComponent } from '../../../models/user-info-component.model';

@Component({
  selector: 'app-tutor-info',
  standalone: true,
  imports: [],
  providers: [{ provide: UserInfoComponent, useExisting: TutorInfoComponent }],
  templateUrl: './tutor-info.component.html',
  styleUrl: './tutor-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorInfoComponent {}
