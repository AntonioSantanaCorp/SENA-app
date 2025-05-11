import { FormGroup } from '@angular/forms';
import { TrainerRequest } from '@sacd/core/http/requests';
import { UserDetailsFormModel } from '@web/libs/shared/ui/forms-information';
import { fileToBase64 } from './file-converter.util';

export async function mapFormToTrainerRequest(
  form: FormGroup<UserDetailsFormModel>
): Promise<TrainerRequest> {
  const { addressInfo, generalInfo, tutorInfo } = form.getRawValue();

  if (!generalInfo || !addressInfo || !tutorInfo) {
    throw new Error('Missing required fields');
  }

  const contrato = Reflect.get(generalInfo, 'contrato') as File | null;

  return {
    personaClub: {
      tipoDocumento: generalInfo.tipoDocumento,
      numeroDocumento: String(generalInfo.numeroDocumento),
      idMunicipio: Number(addressInfo.ciudad),
      nombres: generalInfo.nombres,
      apellidos: generalInfo.apellidos,
      fechaNacimento: generalInfo.fechaNacimiento,
      tipoRh: generalInfo.tipoRH,
      peso: generalInfo.peso,
      altura: generalInfo.altura,
      correo: generalInfo.correo,
      numeroTelefono: String(generalInfo.telefono),
      tallaCamisa: generalInfo.tallaCamisa,
      tallaCalzado: String(generalInfo.tallaCalzado),
      tallaPantaloneta: String(generalInfo.tallaPantalon),
      genero: generalInfo.genero,
      direccion: addressInfo.direccion,
    },
    contactosEmergencia: {
      nombres: tutorInfo.nombres,
      apellidos: tutorInfo.apellidos,
      correo: tutorInfo.correo,
      numeroDocumento: String(tutorInfo.numeroDocumento),
      tipoDocumento: tutorInfo.tipoDocumento,
      telefono: String(tutorInfo.telefono),
    },
    contrato: await fileToBase64(contrato),
  };
}
