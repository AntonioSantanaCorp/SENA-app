import { DatabaseService } from '@api/database';
import { Injectable } from '@nestjs/common';
import { TrainerResponse } from '@sacd/core/http/responses';
import { LocationsService } from '../../../locations/service/locations.service';
import { TrainerDto } from '../../models/trainer.dto';
import { TrainerSchema } from '../../models/trainer.schema';
@Injectable()
export class TrainerService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _locationsService: LocationsService
  ) {}

  public async getTrainers(): Promise<TrainerResponse[]> {
    const trainers = await this._db.entrenador.findMany({
      include: { personaClub: true, contactosEmergencia: true },
    });

    const response: TrainerResponse[] = await Promise.all(
      trainers.map((trainer) => this.mapTrainerToResponse(trainer))
    );

    return response;
  }

  public async getTrainerById(id: number): Promise<TrainerResponse> {
    const trainer = await this._db.entrenador.findUnique({
      where: { id },
      include: { personaClub: true, contactosEmergencia: true },
    });

    return this.mapTrainerToResponse(trainer);
  }

  public async createTrainer(trainer: TrainerDto): Promise<TrainerResponse> {
    try {
      const [createdPersonClub, createdEmergencyContact] = await Promise.all([
        this._db.personaClub.create({ data: { ...trainer.personaClub } }),
        this._db.contactosEmergencia.create({
          data: { ...trainer.contactosEmergencia },
        }),
      ]);

      const createdTrainer = await this._db.entrenador.create({
        data: {
          idPersonaClub: createdPersonClub.id,
          idContactoEmergencia: createdEmergencyContact.id,
          fechaIngreso: new Date(),
          activo: true,
          contrato: Buffer.from(trainer.contrato),
        },
      });

      return this.mapTrainerToResponse({
        ...createdTrainer,
        personaClub: createdPersonClub,
        contactosEmergencia: createdEmergencyContact,
      });
    } catch (error) {
      throw new Error('Error al crear el entrenador');
    }
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
