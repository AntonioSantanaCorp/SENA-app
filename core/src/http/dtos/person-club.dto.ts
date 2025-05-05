import { PersonClub } from '../../models/persona-club.model';

export class PersonClubDto implements Omit<PersonClub, 'id'> {}
