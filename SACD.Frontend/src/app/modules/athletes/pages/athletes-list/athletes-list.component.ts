import { CdkTableModule } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from '@libs/titles';
import { of } from 'rxjs';

import { IconButtonComponent } from '@libs/buttons';
import { DISPLAYED_COLUMNS } from '../../constants/athletes-list.constants';

@Component({
  selector: 'app-athletes-list',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent, CdkTableModule, IconButtonComponent],
  templateUrl: './athletes-list.component.html',
  styleUrl: './athletes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthletesListComponent {
  protected readonly displayedColumns = DISPLAYED_COLUMNS;
  protected athletes$ = of([
    {
      nombres: 'Samuel Santana',
      tipoDocumento: 'Cedula',
      numeroDocumento: '1019538107',
      estado: 'Activo',
      categoria: 'Sub 21',
    },
    {
      nombres: 'Juan Cortes',
      tipoDocumento: 'Cedula',
      numeroDocumento: '1021319531',
      estado: 'Activo',
      categoria: 'Sub 21',
    },
  ]);
}
