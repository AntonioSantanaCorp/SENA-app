import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '@libs/titles';

@Component({
  selector: 'app-trainers-list',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent],
  templateUrl: './trainers-list.component.html',
  styleUrl: './trainers-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainersListComponent {}
