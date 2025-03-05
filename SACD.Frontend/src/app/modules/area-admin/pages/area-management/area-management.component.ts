import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeaderTitleComponent } from '../../../../layout/components/header-title/header-title.component';
import { AreaUserComponent } from '../../components/area-user/area-user.component';

@Component({
  selector: 'app-area-management',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent, AreaUserComponent],
  templateUrl: './area-management.component.html',
  styleUrl: './area-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaManagementComponent {}
