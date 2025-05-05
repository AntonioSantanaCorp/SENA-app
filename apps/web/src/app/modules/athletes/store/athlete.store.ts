import { Athlete } from '@core/domains/athlete/models/athlete.model';
import { withDataTableFeature } from '@libs/tables/datasource-features/datatable-state';
import { signalStore } from '@ngrx/signals';

export const AthleteStore = signalStore(
  withDataTableFeature<Athlete>((athlete) => athlete.id)
);
