import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTitleComponent {}
