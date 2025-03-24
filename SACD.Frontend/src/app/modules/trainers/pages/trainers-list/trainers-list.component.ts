import { Dialog } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@core/constants/app-routes.constant';
import { IconButtonComponent } from '@libs/buttons';
import { HeaderTitleComponent } from '@libs/titles';
import { of } from 'rxjs';
import { DeleteTrainerComponent } from '../../components/delete-trainer/delete-trainer.component';
import { DISPLAYED_COLUMNS } from '../../constant/trainer-list.constant';

@Component({
  selector: 'app-trainers-list',
  standalone: true,
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    RouterLink,
    CdkTableModule,
    IconButtonComponent,
  ],
  templateUrl: './trainers-list.component.html',
  styleUrl: './trainers-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainersListComponent {
  protected readonly displayedColumns = DISPLAYED_COLUMNS;

  protected readonly appRoutes = AppRoutes;

  protected trainers$ = of([
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
    this._dialog.open(DeleteTrainerComponent);
  }
}
