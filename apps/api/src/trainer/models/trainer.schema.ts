import { PersonaClub, ContactosEmergencia } from '@api/database';

export interface TrainerSchema {
  id: number;
  personaClub: PersonaClub;
  contactosEmergencia: ContactosEmergencia;
  activo: boolean;
  contrato: Buffer | Uint8Array;
  fechaIngreso: Date;
}
