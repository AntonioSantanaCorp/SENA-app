import { DatabaseService } from '@api/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AthleteResponse } from '@sacd/core/http/responses';
import { AthleteSchema } from '../models/athlete.schema';

@Injectable()
export class AthleteService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async getAthletes(): Promise<AthleteResponse[]> {
    const athletes = await this.databaseService.deportista.findMany({
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
    const athlete = await this.databaseService.deportista.findUnique({
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
