import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trainer-edit',
  standalone: true,
  imports: [],
  templateUrl: './trainer-edit.component.html',
  styleUrl: './trainer-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerEditComponent {}
