import { Observable } from 'rxjs';

export abstract class DataTableApi<T extends object> {
  abstract getData(): Observable<T[]>;
}
