import { AthleteCategory, PersonClub, Tutor } from '../../models';

export interface AthleteResponse {
  id: number;
  personaClub: PersonClub;
  tutor: Tutor;
  activo: boolean;
  categoria: AthleteCategory;
}
