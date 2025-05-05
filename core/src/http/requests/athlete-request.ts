import { PersonClub, Tutor } from '../../models';

export interface AthleteRequest {
  personaClub: Omit<PersonClub, 'id'>;
  tutor: Omit<Tutor, 'id'>;
}
