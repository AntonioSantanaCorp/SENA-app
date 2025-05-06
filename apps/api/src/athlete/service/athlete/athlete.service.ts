import { DatabaseService } from '@api/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AthleteResponse } from '@sacd/core/http/responses';
import { AthleteDto } from '../../models/athlete.dto';
import { AthleteSchema } from '../../models/athlete.schema';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class AthleteService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _categoriesDb: CategoriesService
  ) {}

  public async getAthletes(): Promise<AthleteResponse[]> {
    const athletes = await this._db.deportista.findMany({
      include: {
        categoria: true,
        personaClub: true,
        tutor: true,
      },
    });

    const response: AthleteResponse[] = athletes.map(this.mapAthleteToResponse);

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

    if (athlete) throw new NotFoundException('Deportista no encontrado');

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

    return {
      id: createdDeportista.id,
      activo: createdDeportista.activo,
      categoria: categories.find(({ id }) => id === 'SUB-20'),
      personaClub: createdPersonClub,
      tutor: createdTutor,
    };
  }

  private mapAthleteToResponse(athlete: AthleteSchema): AthleteResponse {
    return {
      id: athlete.id,
      activo: athlete.activo,
      categoria: athlete.categoria,
      personaClub: athlete.personaClub,
      tutor: athlete.tutor,
    };
  }
}
