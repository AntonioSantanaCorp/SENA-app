import { PersonClub } from '@core/models/person-club.model';
import { AthleteCategory } from './athlete-category';
import { Tutor } from './tutor.model';

export type Athlete = PersonClub & {
  idAthlete: number;
  tutor: Tutor;
  activo: boolean;
  categoria: AthleteCategory;
};
