import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-athlete-create',
  standalone: true,
  imports: [],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent {}
