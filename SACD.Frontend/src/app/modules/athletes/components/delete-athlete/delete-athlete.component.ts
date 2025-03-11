import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlInputComponent } from '@libs/control-field';
import { HeaderTitleComponent } from '@libs/titles';

@Component({
  selector: 'app-delete-athlete',
  standalone: true,
  imports: [HeaderTitleComponent, ControlInputComponent],
  templateUrl: './delete-athlete.component.html',
  styleUrl: './delete-athlete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAthleteComponent {
  constructor(protected readonly dialogRef: DialogRef<DeleteAthleteComponent>) {}
}
