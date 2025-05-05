import { Injectable } from '@nestjs/common';
import { Categoria } from '../../../prisma/generated/client';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly _db: DatabaseService) {}

  public async getCategories(): Promise<Categoria[]> {
    return await this._db.categoria.findMany();
  }
}
