import { signalStore, withComputed } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { withDatatableFeature } from './datatable-feature';
type Todo = { id: string };

export const DataTableStore = signalStore(
  withEntities<Todo>(),
  withDatatableFeature<Todo>()
);
