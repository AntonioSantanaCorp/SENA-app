import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trainer-details',
  standalone: true,
  imports: [],
  templateUrl: './trainer-details.component.html',
  styleUrl: './trainer-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerDetailsComponent {}
