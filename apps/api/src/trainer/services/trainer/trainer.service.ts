import { DatabaseService } from '@api/database';
import { Injectable } from '@nestjs/common';
import { TrainerResponse } from '@sacd/core/http/responses';
import { TrainerSchema } from '../../models/trainer.schema';
import { LocationsService } from '../../../locations/service/locations.service';

@Injectable()
export class TrainerService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _locationsService: LocationsService
  ) {}

  public async getTrainers(): Promise<TrainerResponse[]> {
    const trainers = await this._db.entrenador.findMany({
      include: {
        personaClub: true,
        contactosEmergencia: true,
      },
    });

    const response: TrainerResponse[] = await Promise.all(
      trainers.map((trainer) => this.mapTrainerToResponse(trainer))
    );

    return response;
  }

  private async mapTrainerToResponse(
    trainer: TrainerSchema
  ): Promise<TrainerResponse> {
    const departamento =
      await this._locationsService.getDepartamentoByMunicipio(
        trainer.personaClub.idMunicipio
      );

    // Convertir el buffer a base64 si existe
    const contratoBase64 = trainer.contrato
      ? Buffer.from(trainer.contrato).toString('base64')
      : null;

    return {
      id: trainer.id,
      personaClub: { ...trainer.personaClub, idDepartamento: departamento.id },
      emergencyContact: trainer.contactosEmergencia,
      activo: trainer.activo,
      contrato: contratoBase64,
      fechaIngreso: trainer.fechaIngreso,
    };
  }
}
