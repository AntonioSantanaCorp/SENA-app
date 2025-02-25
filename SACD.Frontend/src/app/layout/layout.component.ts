import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  RouterModule,
  RouterOutlet
} from '@angular/router';
import { AppRoutes } from '../core/app-config';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  protected readonly appRoutes = AppRoutes;
}
