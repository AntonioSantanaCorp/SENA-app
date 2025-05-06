import { Injectable } from '@nestjs/common';
import { Categoria, DatabaseService } from '@api/database';

@Injectable()
export class CategoriesService {
  constructor(private readonly _db: DatabaseService) {}

  public async getCategories(): Promise<Categoria[]> {
    return await this._db.categoria.findMany();
  }
}
