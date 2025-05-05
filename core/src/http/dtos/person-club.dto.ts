import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PersonClubRequest } from '../requests';

export class PersonClubDto implements PersonClubRequest {
  @IsString()
  @IsNotEmpty()
  tipoDocumento: string;

  @IsNumber()
  @IsNotEmpty()
  idMunicipio: number;

  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsDate()
  @IsNotEmpty()
  fechaNacimiento: Date;

  @IsString()
  @IsNotEmpty()
  tipoRh: string;

  @IsNumber()
  @IsNotEmpty()
  peso: number;

  @IsNumber()
  @IsNotEmpty()
  altura: number;

  @IsString()
  @IsNotEmpty()
  correo: string;

  @IsNumber()
  @IsNotEmpty()
  numeroTelefono: number;

  @IsString()
  @IsNotEmpty()
  tallaCamisa: string;

  @IsString()
  @IsNotEmpty()
  tallaCalzado: string;

  @IsString()
  @IsNotEmpty()
  tallaPantaloneta: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  direccion?: string | undefined;
}
