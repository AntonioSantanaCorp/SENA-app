import { DatabaseService } from '@api/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AthleteResponse } from '@sacd/core/http/responses';
import { AthleteDto } from '../../models/athlete.dto';
import { AthleteSchema } from '../../models/athlete.schema';

import { DeleteAthleteRequest } from '@sacd/core/http/requests';
import { CategoriesGenerator } from '@sacd/core/models';
import { LocationsService } from '../../../locations/service/locations.service';
@Injectable()
export class AthleteService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _locationsService: LocationsService
  ) {}

  public async getAthletes(): Promise<AthleteResponse[]> {
    const athletes = await this._db.deportista.findMany({
      include: { personaClub: true, tutor: true },
    });

    const response: AthleteResponse[] = await Promise.all(
      athletes.map((athlete) => this.mapAthleteToResponse(athlete))
    );

    return response;
  }

  public async getAthleteById(id: number): Promise<AthleteResponse> {
    const athlete = await this._db.deportista.findUnique({
      where: { id },
      include: { personaClub: true, tutor: true },
    });

    if (!athlete) throw new NotFoundException('Deportista no encontrado');

    return this.mapAthleteToResponse(athlete);
  }

  public async createAthlete(athlete: AthleteDto): Promise<AthleteResponse> {
    const [createdPersonClub, createdTutor] = await Promise.all([
      this._db.personaClub.create({ data: { ...athlete.personaClub } }),
      this._db.tutor.create({ data: { ...athlete.tutor } }),
    ]);

    const createdDeportista = await this._db.deportista.create({
      data: {
        idTutor: createdTutor.id,
        idPersonaClub: createdPersonClub.id,
        activo: true,
        categoria: CategoriesGenerator.getCategory(
          createdPersonClub.fechaNacimento
        ),
      },
    });

    const departamento =
      await this._locationsService.getDepartamentoByMunicipio(
        createdPersonClub.idMunicipio
      );

    return {
      id: createdDeportista.id,
      activo: createdDeportista.activo,
      categoria: createdDeportista.categoria,
      personaClub: { ...createdPersonClub, idDepartamento: departamento.id },
      tutor: createdTutor,
    };
  }

  public async updateAthlete(
    id: number,
    athlete: AthleteDto
  ): Promise<AthleteResponse> {
    const athleteDb = await this._db.deportista.findUnique({
      where: { id },
    });

    if (!athleteDb) throw new NotFoundException('Deportista no encontrado');

    const [updatedPersonClub, updatedTutor] = await Promise.all([
      this._db.personaClub.update({
        where: { id: athleteDb.idPersonaClub },
        data: { ...athlete.personaClub },
      }),
      this._db.tutor.update({
        where: { id: athleteDb.idTutor },
        data: { ...athlete.tutor },
      }),
    ]);

    const departamento =
      await this._locationsService.getDepartamentoByMunicipio(
        updatedPersonClub.idMunicipio
      );

    return {
      id: athleteDb.id,
      activo: athleteDb.activo,
      categoria: athleteDb.categoria,
      personaClub: { ...updatedPersonClub, idDepartamento: departamento.id },
      tutor: updatedTutor,
    };
  }

  public async deleteAthlete(request: DeleteAthleteRequest): Promise<void> {
    const { id, reason, description } = request;

    await Promise.all([
      this._db.deportista.update({ where: { id }, data: { activo: false } }),
      this._db.desercionDeportista.create({
        data: {
          idDeportista: id,
          fechaDesercion: new Date(),
          razon: reason,
          descripcion: description,
        },
      }),
    ]);
  }

  private async mapAthleteToResponse(
    athlete: AthleteSchema
  ): Promise<AthleteResponse> {
    const departamento =
      await this._locationsService.getDepartamentoByMunicipio(
        athlete.personaClub.idMunicipio
      );

    return {
      id: athlete.id,
      activo: athlete.activo,
      categoria: athlete.categoria,
      personaClub: { ...athlete.personaClub, idDepartamento: departamento.id },
      tutor: athlete.tutor,
    };
  }
}
