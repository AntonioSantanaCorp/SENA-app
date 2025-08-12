import { DatabaseService } from '@api/database';
import { Injectable } from '@nestjs/common';
import {
  DepartamentoResponse,
  MunicipioResponse,
} from '@sacd/core/http/responses';

@Injectable()
export class LocationsService {
  constructor(private readonly _db: DatabaseService) {}

  async getDepartamentos(): Promise<DepartamentoResponse[]> {
    return this._db.prisma.departamento.findMany();
  }

  async getMunicipios(idDepartamento: number): Promise<MunicipioResponse[]> {
    return this._db.prisma.municipio.findMany({
      where: {
        idDepartamento,
      },
    });
  }

  async getDepartamentoByMunicipio(
    idMunicipio: number
  ): Promise<DepartamentoResponse | null> {
    const municipio = await this._db.prisma.municipio.findUnique({
      where: {
        id: idMunicipio,
      },
      include: {
        departamento: true,
      },
    });

    return municipio?.departamento;
  }
}
