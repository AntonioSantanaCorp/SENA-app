import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '@libs/titles';

@Component({
  selector: 'app-trainer-create',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerCreateComponent {}
