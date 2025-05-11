import { PersonClubDto } from '@api/shared';
import { TrainerRequest } from '@sacd/core/http/requests';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { EmergencyContactDto } from './emergency-contact.dto';

export class TrainerDto implements TrainerRequest {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PersonClubDto)
  personaClub: PersonClubDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  contactosEmergencia: EmergencyContactDto;

  @IsOptional()
  contrato: string;
}
