import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-area-user',
  host: { class: 'card col-xl-3 col-md-5 col-sm-12' },
  imports: [ReactiveFormsModule],
  templateUrl: './area-user.component.html',
  styleUrl: './area-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaUserComponent {
  @Input() title = '';

  // avisarle al componente padre que se actualizo
  @Output() updated = new EventEmitter<any>();
}
