import { Directive } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
  selector: 'app-menu-section',
  host: { class: 'nav-item dropdown mx-2' },
  hostDirectives: [
    {
      directive: RouterLinkActive,
      inputs: ['routerLinkActive:urlActive', 'routerLinkActiveOptions'],
    },
  ],
  standalone: true,
  exportAs: 'appMenuSection',
})
export class MenuSectionDirective {
  public get isActive() {
    return this._rla.isActive;
  }

  constructor(private readonly _rla: RouterLinkActive) {
    this._rla.routerLinkActiveOptions = { exact: true };
  }
}
