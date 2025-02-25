import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-athlete-details',
  standalone: true,
  imports: [],
  templateUrl: './athlete-details.component.html',
  styleUrl: './athlete-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteDetailsComponent {}
