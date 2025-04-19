import { Trainer } from '@core/domains/trainer/models/trainer.model';
import { withDataTableFeature } from '@libs/tables/datasource-features/datatable-state';
import { signalStore } from '@ngrx/signals';

export const TrainerStore = signalStore(
  withDataTableFeature<Trainer>((trainer) => trainer.id)
);
