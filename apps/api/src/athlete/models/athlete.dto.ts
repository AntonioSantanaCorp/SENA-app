import { PersonClubDto, TutorDto } from '@api/shared';
import { AthleteRequest } from '@sacd/core/http/requests';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AthleteDto implements AthleteRequest {
  @IsNotEmpty({ message: 'personaClub no debe estar vacío' })
  @ValidateNested()
  @Type(() => PersonClubDto)
  personaClub: PersonClubDto;

  @IsNotEmpty({ message: 'tutor no debe estar vacío' })
  @ValidateNested()
  @Type(() => TutorDto)
  tutor: TutorDto;
}
