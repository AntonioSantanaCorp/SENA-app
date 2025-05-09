import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
import { AppRoutes } from '../../../../core/constants';
import Swal from 'sweetalert2';

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
  protected readonly isLoading = signal(false);

  constructor(
    private readonly _athleteApi: AthleteApiService,
    private readonly _router: Router
  ) {
    super();
  }

  protected create(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.isLoading.set(true);
    this._athleteApi.create(this.mapToAthleteRequest()).subscribe({
      next: () => {
        this._router.navigate([AppRoutes.AthleteList]);
        this.isLoading.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Deportista creado correctamente',
          timer: 2000,
          showCancelButton: false,
        });
      },
      error: () => {
        this.isLoading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Error al crear el deportista, intente de nuevo',
          showCancelButton: false,
        });
      },
    });
  }

  protected cancel(): void {
    this._router.navigate([AppRoutes.AthleteList]);
  }

  private mapToAthleteRequest(): AthleteRequest {
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
        numeroTelefono: String(generalInfo.telefono),
        tallaCamisa: generalInfo.tallaCamisa,
        tallaCalzado: String(generalInfo.tallaCalzado),
        tallaPantaloneta: String(generalInfo.tallaPantalon),
        genero: generalInfo.genero,
        direccion: addressInfo.direccion,
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
