import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutes } from '../core/app-config';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuItemDirective } from './directives/menu-item.directive';
import { MenuSectionDirective } from './directives/menu-section.directive';
import { MenuTitleSectionDirective } from './directives/menu-title-section.directive';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuSectionDirective,
    MenuTitleSectionDirective,
    MenuListComponent,
    MenuItemDirective,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  protected readonly appRoutes = AppRoutes;
}
