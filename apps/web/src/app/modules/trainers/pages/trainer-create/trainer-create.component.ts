import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlInputComponent } from '@web/libs/shared/ui/control-field';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@web/libs/shared/ui/forms-information';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@web/libs/shared/ui/titles';
import { TrainerApiService } from '@web/libs/trainer/services';
import { AppRoutes } from '../../../../core/constants/app-routes.constant';
import { mapFormToTrainerRequest } from '../../../../core/utils/map-trainer.util';
import { contractControl } from '../../form-controls/trainer-info.form';

@Component({
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ReactiveFormsModule,
    ControlInputComponent,
  ],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerCreateComponent extends UserDetailsFormComponent {
  private readonly _uploadFile = viewChild('contratoRef', {
    read: ElementRef<HTMLInputElement>,
  });

  protected readonly isLoading = signal(false);

  protected readonly contract = contractControl();

  constructor(
    private readonly _trainerApi: TrainerApiService,
    private readonly _router: Router
  ) {
    super();
  }

  //TODO: create trainer
  protected async create(): Promise<void> {
    this.form.markAllAsTouched();
    this.contract.markAsTouched();

    //if (this.form.invalid) return;

    console.log(this._uploadFile()?.nativeElement.files[0]);

    console.log(await mapFormToTrainerRequest(this.form));
  }

  protected cancel(): void {
    this._router.navigate([AppRoutes.TrainerList]);
  }
}

function fileToBase64(file: File | null): Promise<string> {
  if (!file) return Promise.resolve('');

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
