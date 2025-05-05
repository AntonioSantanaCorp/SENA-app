import { EmergencyContact, PersonClub } from '../../models';

export interface TrainerResponse {
  id: number;
  personaClub: PersonClub;
  emergencyContact: EmergencyContact;
  activo: boolean;
  contrato: string;
  fechaIngreso: Date;
}
