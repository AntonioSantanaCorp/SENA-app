import { DatabaseService } from '@api/database';
import { Injectable } from '@nestjs/common';
import { AthleteResponse } from '@sacd/core/http/responses';

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

    const response: AthleteResponse[] = athletes.map((athlete) => ({
      id: athlete.id,
      activo: athlete.activo,
      categoria: athlete.categoria,
      personaClub: athlete.personaClub,
      tutor: athlete.tutor,
    }));

    return response;
  }
}
