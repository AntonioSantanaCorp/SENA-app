export interface PersonClub {
    id: number;
    tipoDocumento: string;
    idMunicipio: number;
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
  