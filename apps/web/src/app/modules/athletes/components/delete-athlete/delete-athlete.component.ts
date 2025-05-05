import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ATHLETE_INACTIVATION_REASONS } from '@web/libs/athlete/constants';
import { ControlInputComponent } from '@web/libs/shared/ui/control-field';
import { HeaderTitleComponent } from '@web/libs/shared/ui/titles';
import { createAthleteInactivationForm } from '../../form-controls/athlete-inactivation.form';

@Component({
  selector: 'app-delete-athlete',
  host: { class: 'app-alert-dialog' },
  imports: [HeaderTitleComponent, ControlInputComponent, ReactiveFormsModule],
  templateUrl: './delete-athlete.component.html',
  styleUrl: './delete-athlete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAthleteComponent {
  protected readonly inactivationReasons = ATHLETE_INACTIVATION_REASONS;

  protected readonly form = createAthleteInactivationForm();

  constructor(
    protected readonly dialogRef: DialogRef<DeleteAthleteComponent>
  ) {}
}
