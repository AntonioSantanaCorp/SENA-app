import { AthleteCategory } from '../models/athlete-category.model';
import { PersonClub } from '../models/persona-club.model';
import { Tutor } from '../models/tutor.model';

export interface AthleteResponse {
  id: number;
  personaClub: PersonClub;
  tutor: Tutor;
  activo: boolean;
  categoria: AthleteCategory;
}
