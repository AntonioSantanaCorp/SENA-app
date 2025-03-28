import { Athlete } from '@core/domains/athlete/models/athlete.model';
import { withDataTableEntity } from '@libs/tables/datasource/datatable-entity';
import { withDataTableFeature } from '@libs/tables/datasource/datatable-feature';
import { withDataTableState } from '@libs/tables/datasource/datatable-state';
import { signalStore } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';

export const AthleteStore = signalStore(
  withDataTableState(),
  withEntities<Athlete>(),
  withDataTableEntity<Athlete>((athlete) => athlete.id),
  withDataTableFeature<Athlete>()
);
