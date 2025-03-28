import { signalStoreFeature, withState } from '@ngrx/signals';
import { DataTable } from '../models/datatable.model';

export function withDataTableState() {
  return signalStoreFeature(
    withState<DataTable>({
      isLoading: false,
      filters: { query: '' },
      pagination: { page: 0, pageSize: 10 },
    })
  );
}
