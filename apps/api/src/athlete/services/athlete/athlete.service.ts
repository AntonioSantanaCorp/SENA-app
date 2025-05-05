import { Injectable } from '@nestjs/common';
import { AthleteResponse } from '@sacd/core/http/responses';
import { DatabaseService } from '../../../core/database/database.service';

@Injectable()
export class AthleteService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async getAthletes(): Promise<AthleteResponse[]> {
    return this.databaseService.
  }
}
