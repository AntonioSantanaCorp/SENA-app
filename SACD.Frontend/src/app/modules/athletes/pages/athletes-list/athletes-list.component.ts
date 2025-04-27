import { Dialog } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@core/constants/app-routes.constant';
import { IconButtonComponent } from '@libs/buttons';
import { HeaderTitleComponent } from '@libs/titles';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AthleteApiService } from '@core/domains/athlete/services/athlete-api.service';
import { PaginatorComponent } from '@libs/tables/components/paginator/paginator.component';
import { SearchInputComponent } from '@libs/tables/components/search-input/search-input.component';
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
    PaginatorComponent,
    ReactiveFormsModule,
    SearchInputComponent,
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
  protected readonly searchInput = new FormControl('', { nonNullable: true });

  protected readonly displayedColumns = DISPLAYED_COLUMNS;

  protected readonly appRoutes = AppRoutes;

  protected readonly athleteStore = inject(AthleteStore);

  constructor(private readonly _dialog: Dialog) {}

  public async ngOnInit(): Promise<void> {
    await this.athleteStore.loadData();
  }

  public onDelete(): void {
    this._dialog.open(DeleteAthleteComponent);
  }

  public searchAthlete(): void {
    this.athleteStore.setQuery(this.searchInput.value);
  }

  public clearSearch(): void {
    this.searchInput.setValue('');
    this.athleteStore.setQuery('');
  }
}
