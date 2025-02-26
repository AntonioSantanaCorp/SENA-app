import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTitleComponent } from "../../../../layout/components/header-title/header-title.component";

@Component({
  selector: 'app-trainer-create',
  standalone: true,
  host: { class: 'page' },
  imports: [HeaderTitleComponent],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerCreateComponent {}
