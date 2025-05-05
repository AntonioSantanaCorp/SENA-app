import { PersonClub } from '@core/models/person-club.model';
import { EmergencyContact } from './emergency-contact.model';

export interface Trainer extends PersonClub {
  idTrainer: number;
  emergencyContact: EmergencyContact;
  activo: boolean;
  contrato: string;
  fechaIngreso: Date;
}
