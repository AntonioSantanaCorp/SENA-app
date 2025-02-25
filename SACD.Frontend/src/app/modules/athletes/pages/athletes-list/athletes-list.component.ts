import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-athletes-list',
  standalone: true,
  imports: [],
  templateUrl: './athletes-list.component.html',
  styleUrl: './athletes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AthletesListComponent {

}
