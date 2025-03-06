import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '@core/libs/titles';

@Component({
  selector: 'app-athletes-list',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent],
  templateUrl: './athletes-list.component.html',
  styleUrl: './athletes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthletesListComponent {}
