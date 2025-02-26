import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '../../../../layout/components/header-title/header-title.component';

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
