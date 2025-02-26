import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-area-user',
  standalone: true,
  imports: [],
  templateUrl: './area-user.component.html',
  styleUrl: './area-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaUserComponent {}
