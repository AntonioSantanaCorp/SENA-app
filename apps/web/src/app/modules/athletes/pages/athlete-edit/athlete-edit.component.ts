import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { AthleteResponse } from '@sacd/core/http/responses';
import { AthleteApiService } from '@web/libs/athlete/services';
import {
  AddressInfo,
  AddressInfoComponent,
  TutorInfo,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@web/libs/shared/ui/forms-information';
import { UserGeneralInfo } from '@web/libs/shared/ui/forms-information';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@web/libs/shared/ui/titles';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-athlete-edit',
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './athlete-edit.component.html',
  styleUrl: './athlete-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteEditComponent extends UserDetailsFormComponent {
  public readonly id = input.required<string>();

  private readonly _athleteApi = inject(AthleteApiService);

  constructor() {
    super();
    toObservable(this.id)
      .pipe(switchMap((id) => this._athleteApi.getById(id)))
      .subscribe((athlete) => {
        this.form.patchValue(this.mapAthleteToForm(athlete));
        this.form.markAllAsTouched();
      });
  }

  private mapAthleteToForm(athlete: AthleteResponse) {
    const { personaClub, tutor } = athlete;

    const generalInfo: UserGeneralInfo = {
      nombres: personaClub.nombres,
      apellidos: personaClub.apellidos,
      tipoDocumento: personaClub.tipoDocumento,
      numeroDocumento: personaClub.numeroDocumento,
      fechaNacimiento: personaClub.fechaNacimiento?.toISOString() ?? '',
      tipoRH: personaClub.tipoRh ?? '',
      genero: personaClub.genero ?? '',
      peso: personaClub.peso ?? 0,
      altura: personaClub.altura ?? 0,
      correo: personaClub.correo ?? '',
      telefono: String(personaClub.numeroTelefono ?? ''),
      tallaCamisa: personaClub.tallaCamisa ?? '',
      tallaCalzado: Number(personaClub.tallaCalzado ?? 0),
      tallaPantalon: Number(personaClub.tallaPantaloneta ?? 0),
    };

    const tutorInfo: TutorInfo = {
      nombres: tutor.nombres,
      apellidos: tutor.apellidos,
      tipoDocumento: tutor.tipoDocumento,
      numeroDocumento: tutor.numeroDocumento,
      correo: tutor.correo,
      telefono: String(tutor.telefono ?? ''),
    };

    const addressInfo: AddressInfo = {
      departamento: String(personaClub.idDepartamento ?? ''),
      ciudad: String(personaClub.idMunicipio ?? ''),
      direccion: personaClub.direccion ?? '',
    };

    return {
      generalInfo,
      tutorInfo,
      addressInfo,
    };
  }
}
