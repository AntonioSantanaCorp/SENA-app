import { AddressInfoFormModel } from '../form-controls/address-info.form';
import { UserGeneralInfoFormModel } from '../form-controls/user-general-info.form';

export type UserDetailsFormModel = {
  generalInfo?: UserGeneralInfoFormModel;
  addressInfo?: AddressInfoFormModel;
};
