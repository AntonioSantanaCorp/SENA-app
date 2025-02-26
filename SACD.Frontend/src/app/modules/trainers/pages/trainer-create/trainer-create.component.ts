import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trainer-create',
  standalone: true,
  imports: [],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerCreateComponent {}
