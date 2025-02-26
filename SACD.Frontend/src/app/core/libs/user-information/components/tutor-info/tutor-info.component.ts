import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-tutor-info',
  standalone: true,
  imports: [],
  templateUrl: './tutor-info.component.html',
  styleUrl: './tutor-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorInfoComponent {}
