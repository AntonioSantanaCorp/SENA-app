import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AthleteRequest } from '@sacd/core/http/requests';
import { AthleteApiService } from '@web/libs/athlete/services';
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
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-athlete-create',
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent extends UserDetailsFormComponent {
  private readonly _athleteApi = inject(AthleteApiService);

  protected async create(): Promise<void> {
    try {
      this.form.markAllAsTouched();

      if (this.form.invalid) return;

      await firstValueFrom(
        this._athleteApi.create(this.createAthleteRequest())
      );
    } catch (error) {
      console.error(error);
    }
  }

  private createAthleteRequest(): AthleteRequest {
    const { addressInfo, generalInfo, tutorInfo } = this.form.getRawValue();

    if (!generalInfo || !addressInfo || !tutorInfo) {
      throw new Error('Missing required fields');
    }

    return {
      personaClub: {
        tipoDocumento: generalInfo.tipoDocumento,
        numeroDocumento: String(generalInfo.numeroDocumento),
        idMunicipio: Number(addressInfo.ciudad),
        nombres: generalInfo.nombres,
        apellidos: generalInfo.apellidos,
        fechaNacimento: new Date(generalInfo.fechaNacimiento),
        tipoRh: generalInfo.tipoRH,
        peso: generalInfo.peso,
        altura: generalInfo.altura,
        correo: generalInfo.correo,
        numeroTelefono: Number(generalInfo.telefono),
        tallaCamisa: generalInfo.tallaCamisa,
        tallaCalzado: String(generalInfo.tallaCalzado),
        tallaPantaloneta: String(generalInfo.tallaPantalon),
        genero: generalInfo.genero,
      },
      tutor: {
        nombres: tutorInfo.nombres,
        apellidos: tutorInfo.apellidos,
        correo: tutorInfo.correo,
        numeroDocumento: String(tutorInfo.numeroDocumento),
        tipoDocumento: tutorInfo.tipoDocumento,
        telefono: String(tutorInfo.telefono),
      },
    };
  }
}
