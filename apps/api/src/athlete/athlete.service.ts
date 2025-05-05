import { Injectable } from '@nestjs/common';
import { tb_deportistas } from '@prisma/client';
import { DatabaseService } from '../core/database/database.service';

@Injectable()
export class AthleteService {
  constructor(private readonly database: DatabaseService) {}

  getAllAthletes(): Promise<tb_deportistas[]> {
    return this.database.tb_deportistas.findMany();
  }
}
