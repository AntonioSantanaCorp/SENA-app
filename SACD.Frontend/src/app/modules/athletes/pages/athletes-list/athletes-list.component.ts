import { Dialog } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@core/constants/app-routes.constant';
import { IconButtonComponent } from '@libs/buttons';
import { HeaderTitleComponent } from '@libs/titles';
import { of } from 'rxjs';

import { AthleteApiService } from '@core/domains/athlete/services/athlete-api.service';
import { DataTableApi } from '@libs/tables/models/datatable-api.model';
import { DeleteAthleteComponent } from '../../components/delete-athlete/delete-athlete.component';
import { DISPLAYED_COLUMNS } from '../../constants/athletes-list.constants';
import { AthleteStore } from '../../store/athlete.store';

@Component({
  selector: 'app-athletes-list',
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    RouterLink,
    CdkTableModule,
    IconButtonComponent,
  ],
  providers: [
    { provide: DataTableApi, useClass: AthleteApiService },
    AthleteStore,
  ],
  templateUrl: './athletes-list.component.html',
  styleUrl: './athletes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthletesListComponent implements OnInit {
  protected readonly displayedColumns = DISPLAYED_COLUMNS;

  protected readonly appRoutes = AppRoutes;

  protected readonly athleteStore = inject(AthleteStore);

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

  constructor(private readonly _dialog: Dialog) {
    effect(() => {
      console.log(this.athleteStore.pagination());
    });
  }

  public async ngOnInit(): Promise<void> {
    await this.athleteStore.loadData();
  }

  public onDelete(): void {
    this.athleteStore.nextPage();
    // this._dialog.open(DeleteAthleteComponent);
  }
}
