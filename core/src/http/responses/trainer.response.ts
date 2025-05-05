import { EmergencyContact, PersonClub } from '../../entities';

export interface TrainerResponse {
  id: number;
  personaClub: PersonClub;
  emergencyContact: EmergencyContact;
  activo: boolean;
  contrato: string;
  fechaIngreso: Date;
}
