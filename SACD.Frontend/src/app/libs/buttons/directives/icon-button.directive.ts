import { Component } from '@angular/core';

@Component({
  selector: 'button[appIconButton],a[appIconButton]',
  host: { class: 'btn btn-outline-primary btn-sm rounded-circle icon-btn' },
  standalone: true,
  template: ` <span class="material-symbols-outlined">
    <ng-content></ng-content>
  </span>`,
})
export class IconButtonComponent {}
