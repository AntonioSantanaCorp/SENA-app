import { DatabaseService } from '@api/database';
import { Injectable } from '@nestjs/common';
import { Deportista } from '@prisma/client';
import { AthleteResponse } from '@sacd/core/http/responses';

@Injectable()
export class AthleteService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async getAthletes(): Promise<Deportista[]> {
    return this.databaseService.deportista.findMany({
      include: {
        persona: true,
      },
    });
  }
}
