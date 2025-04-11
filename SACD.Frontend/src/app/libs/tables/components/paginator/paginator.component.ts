import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  numberAttribute,
  output,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  protected readonly page = signal<number>(1);

  protected readonly resume = computed(() => {
    const pageSize = this.pageSize();
    const page = this.page();
    const length = this.lenght();
    const startIndex = (page - 1) * pageSize + 1;
    const endIndex = Math.min(page * pageSize, length);
    return `${startIndex} - ${endIndex} de ${length}`;
  });

  protected readonly disablePrevBtn = computed(() => {
    const pageSize = this.pageSize();
    const minPageOpt = Math.min(...this.pageSizeOptions());

    return pageSize === minPageOpt;
  });

  protected readonly disableNextBtn = computed(
    () => this.pageSize() === this.lenght()
  );

  public readonly pageSize = input(0, { transform: numberAttribute });

  public readonly lenght = input(0, { transform: numberAttribute });

  public readonly pageSizeOptions = input<number[]>([5, 10, 25, 100]);

  public readonly nextPageEvent = output<void>();

  public readonly prevPageEvent = output<void>();

  constructor() {
    toObservable(this.pageSize).subscribe(() => {
      this.page.set(1);
    });
  }

  public nextPage(): void {
    this.nextPageEvent.emit();
    this.page.update((page) => page + 1);
  }

  public prevPage(): void {
    this.prevPageEvent.emit();
    this.page.update((page) => {
      const previousPage = page - 1;
      return previousPage <= 0 ? 1 : previousPage;
    });
  }
}
