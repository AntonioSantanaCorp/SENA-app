import { PersonClub } from '@core/models/person-club.model';

export type Trainer = PersonClub & {
  idTrainer: number;
  activo: boolean;
  contrato: string;
  fechaIngreso: Date;
};
