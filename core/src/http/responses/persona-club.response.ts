export interface PersonClubResponse {
    id: number;
    tipoDocumento: string;
    numeroDocumento: string;
    idMunicipio: number;
    idDepartamento: number;
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
  }
  