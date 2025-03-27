import { AddressInfoForm } from '../form-controls/address-info.form';
import { TutorInfoForm } from '../form-controls/tutor-info.form';
import { UserGeneralInfoForm } from '../form-controls/user-general-info.form';

export interface UserDetailsFormModel {
  generalInfo?: UserGeneralInfoForm;
  addressInfo?: AddressInfoForm;
  tutorInfo?: TutorInfoForm;
}
