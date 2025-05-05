import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { firstValueFrom } from 'rxjs';
import { DataTableApi } from '../models/datatable-api.model';
import { DataTable } from '../models/datatable.model';

export function withDataTableFeature<TEntity extends object>(
  selectId: (entity: TEntity) => string | number
) {
  return signalStoreFeature(
    withState<DataTable>({
      isLoading: false,
      filters: { query: '' },
      pagination: { page: 0, pageSize: 10 },
    }),
    withEntities<TEntity>(),
    withComputed(({ filters, entities, pagination }) => ({
      length: computed(() => entities().length),
      data: computed(() => {
        const filterDataFn = () =>
          entities().filter((entity) =>
            Reflect.ownKeys(entity).some((key) =>
              String(Reflect.get(entity, key)).includes(filters().query)
            )
          );

        const dataFiltered = filters().query.trim()
          ? filterDataFn()
          : entities();

        const { page, pageSize } = pagination();
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;

        return dataFiltered.slice(startIndex, endIndex);
      }),
    })),
    withMethods((store, datatableApi = inject(DataTableApi)) => ({
      async loadData(): Promise<void> {
        patchState(store, { isLoading: true });
        const data = await firstValueFrom(datatableApi.getData());
        patchState(
          store,
          { isLoading: false },
          setAllEntities(data, { selectId })
        );
      },
      nextPage(): void {
        patchState(store, ({ pagination }) => ({
          pagination: { ...pagination, page: pagination.page + 1 },
        }));
      },
      previousPage(): void {
        patchState(store, ({ pagination }) => {
          const previousPage = pagination.page - 1;
          const page = previousPage < 0 ? 0 : previousPage;
          return { pagination: { ...pagination, page } };
        });
      },
      setQuery(query: string): void {
        patchState(store, { filters: { query } });
        patchState(store, (state) => ({
          pagination: { ...state.pagination, page: 0 },
        }));
      },
      setPageSize(pageSize: number): void {
        patchState(store, (state) => ({
          pagination: { ...state.pagination, pageSize, page: 0 },
        }));
      },
    }))
  );
}
