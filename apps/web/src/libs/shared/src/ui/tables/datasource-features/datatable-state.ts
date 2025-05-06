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
        // Función recursiva para buscar en todas las propiedades, incluidas las anidadas
        const containsQuery = (obj: any, query: string): boolean => {
          if (obj == null) return false;
          if (
            typeof obj === 'string' ||
            typeof obj === 'number' ||
            typeof obj === 'boolean'
          ) {
            return String(obj).toLowerCase().includes(query.toLowerCase());
          }
          if (Array.isArray(obj)) {
            return obj.some((item) => containsQuery(item, query));
          }
          if (typeof obj === 'object') {
            return Reflect.ownKeys(obj).some((key) =>
              containsQuery(obj[key], query)
            );
          }
          return false;
        };

        const filterDataFn = () =>
          entities().filter((entity) => containsQuery(entity, filters().query));

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
