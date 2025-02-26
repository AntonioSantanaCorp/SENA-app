import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-athlete-edit',
  standalone: true,
  imports: [],
  templateUrl: './athlete-edit.component.html',
  styleUrl: './athlete-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteEditComponent {}
