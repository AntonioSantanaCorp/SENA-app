import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { INACTIVATION_REASONS_LIST } from '@core/domains/athlete/constants/inactivation-reasons.constant';
import { ControlInputComponent } from '@libs/control-field';
import { HeaderTitleComponent } from '@libs/titles';
import { createAthleteInactivationForm } from '../../form-controls/athlete-inactivation.form';

@Component({
  selector: 'app-delete-athlete',
  standalone: true,
  imports: [HeaderTitleComponent, ControlInputComponent, ReactiveFormsModule],
  templateUrl: './delete-athlete.component.html',
  styleUrl: './delete-athlete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAthleteComponent {
  protected inactivationReasons = INACTIVATION_REASONS_LIST;

  protected readonly form = createAthleteInactivationForm();

  constructor(
    protected readonly dialogRef: DialogRef<DeleteAthleteComponent>
  ) {}
}
