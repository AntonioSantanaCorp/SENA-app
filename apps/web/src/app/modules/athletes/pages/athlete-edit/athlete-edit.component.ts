import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AthleteResponse } from '@sacd/core/http/responses';
import { AthleteApiService } from '@web/libs/athlete/services';
import {
  AddressInfo,
  AddressInfoComponent,
  TutorInfo,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfo,
  UserGeneralInfoComponent,
} from '@web/libs/shared/ui/forms-information';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@web/libs/shared/ui/titles';
import { switchMap } from 'rxjs';
import { AppRoutes } from '../../../../core/constants';

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

  constructor(
    private readonly _athleteApi: AthleteApiService,
    private readonly _router: Router
  ) {
    super();

    toObservable(this.id)
      .pipe(
        switchMap((id) => this._athleteApi.getById(id)),
        takeUntilDestroyed()
      )
      .subscribe((athlete) => {
        this.form.patchValue(this.mapAthleteToForm(athlete));
        this.form.markAllAsTouched();
      });
  }

  protected cancel(): void {
    this._router.navigate([AppRoutes.AthleteList]);
  }

  private mapAthleteToForm(athlete: AthleteResponse) {
    const { personaClub, tutor } = athlete;


    const generalInfo: UserGeneralInfo = {
      nombres: personaClub.nombres,
      apellidos: personaClub.apellidos,
      tipoDocumento: personaClub.tipoDocumento,
      numeroDocumento: personaClub.numeroDocumento,
      fechaNacimiento: String(personaClub.fechaNacimento).split('T')[0],
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
