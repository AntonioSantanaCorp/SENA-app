import { EmergencyContact } from '../models/emergency-contact.model';
import { PersonClub } from '../models/persona-club.model';

export interface TrainerResponse {
  id: number;
  personaClub: PersonClub;
  emergencyContact: EmergencyContact;
  activo: boolean;
  contrato: string;
  fechaIngreso: Date;
}
