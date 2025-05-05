import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../core/database/database.service';

@Injectable()
export class AthleteService {
  constructor(private readonly database: DatabaseService) {}

  getAllAthletes(): Promise<unknown[]> {
    return new Promise((resolve) => {
      resolve([]);
    });
  }
}
