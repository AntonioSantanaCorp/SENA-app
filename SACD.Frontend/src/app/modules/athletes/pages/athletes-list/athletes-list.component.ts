import { Dialog } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@core/constants/app-routes.constant';
import { IconButtonComponent } from '@libs/buttons';
import { HeaderTitleComponent } from '@libs/titles';
import { of } from 'rxjs';

import { DeleteAthleteComponent } from '../../components/delete-athlete/delete-athlete.component';
import { DISPLAYED_COLUMNS } from '../../constants/athletes-list.constants';

@Component({
  selector: 'app-athletes-list',
  standalone: true,
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    RouterLink,
    CdkTableModule,
    IconButtonComponent,
  ],
  templateUrl: './athletes-list.component.html',
  styleUrl: './athletes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthletesListComponent {
  protected readonly displayedColumns = DISPLAYED_COLUMNS;

  protected readonly appRoutes = AppRoutes;

  protected athletes$ = of([
    {
      id: 1,
      nombres: 'Samuel Santana',
      tipoDocumento: 'CC',
      numeroDocumento: '1019538107',
      estado: 'Activo',
      categoria: 'Sub 21',
    },
    {
      id: 2,
      nombres: 'Juan Cortes',
      tipoDocumento: 'CC',
      numeroDocumento: '1021319531',
      estado: 'Activo',
      categoria: 'Sub 21',
    },
  ]);

  constructor(private readonly _dialog: Dialog) {}

  public onDelete(): void {
    this._dialog.open(DeleteAthleteComponent);
  }
}
