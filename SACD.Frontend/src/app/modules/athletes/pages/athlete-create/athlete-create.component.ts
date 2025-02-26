import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '../../../../layout/components/header-title/header-title.component';

@Component({
  selector: 'app-athlete-create',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent {}
