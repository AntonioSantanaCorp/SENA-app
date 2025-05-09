import { DatabaseService } from '@api/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AthleteResponse } from '@sacd/core/http/responses';
import { AthleteDto } from '../../models/athlete.dto';
import { AthleteSchema } from '../../models/athlete.schema';
import { CategoriesService } from '../categories/categories.service';
import { LocationsService } from '../../../locations/service/locations.service';
import { DeleteAthleteRequest } from '@sacd/core/http/requests';
@Injectable()
export class AthleteService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _categoriesDb: CategoriesService,
    private readonly _locationsService: LocationsService
  ) {}

  public async getAthletes(): Promise<AthleteResponse[]> {
    const athletes = await this._db.deportista.findMany({
      where: {
        activo: true,
      },
      include: {
        categoria: true,
        personaClub: true,
        tutor: true,
      },
    });

    const response: AthleteResponse[] = await Promise.all(
      athletes.map((athlete) => this.mapAthleteToResponse(athlete))
    );

    return response;
  }

  public async getAthleteById(id: number): Promise<AthleteResponse> {
    const athlete = await this._db.deportista.findUnique({
      where: { id },
      include: {
        categoria: true,
        personaClub: true,
        tutor: true,
      },
    });

    if (!athlete) throw new NotFoundException('Deportista no encontrado');

    return this.mapAthleteToResponse(athlete);
  }

  public async createAthlete(athlete: AthleteDto): Promise<AthleteResponse> {
    const [createdPersonClub, createdTutor, categories] = await Promise.all([
      this._db.personaClub.create({ data: { ...athlete.personaClub } }),
      this._db.tutor.create({ data: { ...athlete.tutor } }),
      this._categoriesDb.getCategories(),
    ]);

    const createdDeportista = await this._db.deportista.create({
      data: {
        idTutor: createdTutor.id,
        idPersonaClub: createdPersonClub.id,
        activo: true,
        idCategoria: 'SUB-20',
      },
    });

    const departamento =
      await this._locationsService.getDepartamentoByMunicipio(
        createdPersonClub.idMunicipio
      );

    return {
      id: createdDeportista.id,
      activo: createdDeportista.activo,
      categoria: categories.find(({ id }) => id === 'SUB-20'),
      personaClub: { ...createdPersonClub, idDepartamento: departamento.id },
      tutor: createdTutor,
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
