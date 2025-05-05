export type PersonClub = {
  id: number;
  tipoDocumento: number;
  idMunicipio: number;
  idUsuario: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento?: Date;
  tipoRh?: string;
  peso?: number;
  altura?: number;
  correo: string;
  numeroTelefono?: number;
  tallaCamisa?: string;
  tallaCalzado?: string;
  tallaPantaloneta?: string;
  genero?: string;
  direccion?: string;
};
