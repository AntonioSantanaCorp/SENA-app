import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '../../../../layout/components/header-title/header-title.component';

@Component({
  selector: 'app-area-management',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent],
  templateUrl: './area-management.component.html',
  styleUrl: './area-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaManagementComponent {}
