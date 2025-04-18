import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '@libs/titles';
import { AreaUserComponent } from '../../components/area-user/area-user.component';

@Component({
  selector: 'app-area-management',
  host: { class: 'page' },
  imports: [HeaderTitleComponent, AreaUserComponent],
  templateUrl: './area-management.component.html',
  styleUrl: './area-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaManagementComponent {}
