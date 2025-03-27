import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TRAINER_INACTIVATION_REASONS } from '@core/domains/trainer/constants/inactivation-reasons.constant';
import { ControlInputComponent } from '@libs/control-field';
import { HeaderTitleComponent } from '@libs/titles';
import { createTrainerInactivationForm } from '../../form-controls/trainer-inactivation.form';

@Component({
    selector: 'app-delete-trainer',
    host: { class: 'app-alert-dialog' },
    imports: [HeaderTitleComponent, ControlInputComponent, ReactiveFormsModule],
    templateUrl: './delete-trainer.component.html',
    styleUrl: './delete-trainer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteTrainerComponent {
  protected readonly inactivationReasons = TRAINER_INACTIVATION_REASONS;

  protected readonly form = createTrainerInactivationForm();

  constructor(
    protected readonly dialogRef: DialogRef<DeleteTrainerComponent>
  ) {}
}
