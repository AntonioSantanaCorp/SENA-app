import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trainers-list',
  standalone: true,
  imports: [],
  templateUrl: './trainers-list.component.html',
  styleUrl: './trainers-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainersListComponent {}
