import { signalStoreFeature, type, withState } from '@ngrx/signals';
import { EntityProps, EntityState } from '@ngrx/signals/entities';
import { DataTable } from '../models/datatable.model';

export function withDatatableFeature<Entity>() {
  return signalStoreFeature(
    { state: type<EntityState<Entity>>(), props: type<EntityProps<Entity>>() },
    withState<DataTable>({
      isLoading: false,
      filters: { query: '' },
      pagination: { page: 0, pageSize: 10, length: 0 },
    })
    // withComputed(({ filters, entities }) => ({
    //   dataFiltered: computed(() => {}),
    // }))
  );
}
