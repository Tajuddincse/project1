import { Injectable } from "@angular/core";
@Injectable()

class CONTACT_DETAILS{
  Lastname = '';
  Firstname = '';
  Sex = '';
  Your_date_of_birth = '';
  Address = '';
  Postal_code = '';
  Ville = '';
  Adresse_Email = '';
  Téléphone = '';
  Téléphone_portable = '';
  Email_professionnel ='';
  fixe_professionnel = '';
  mobile_professionnel = '';
}
class PROFESSIONAL_DATA{

}
class PERSONAL_DATA{
  userName: any;
}
class LODGING{
  userName: any;
}
class MEDIA{
  userName: any;
}
class DAY_TO_DAY{
  userName: any;
}
class MOBILITY{
  userName: any;
}
class ORGANIZATIONS{
  userName: any;
}
class CONSUMPTION{
  userName: any;
}
class VARIOUS{
  userName: any;
}
class AVAILABILITY{
  userName: any;
}

export class FormData {
  CONTACT_DETAILS = new CONTACT_DETAILS;
  PROFESSIONAL_DATA = new PROFESSIONAL_DATA;
  PERSONAL_DATA = new PERSONAL_DATA;
  LODGING = new LODGING;
  MEDIA = new MEDIA;
  DAY_TO_DAY = new DAY_TO_DAY;
  MOBILITY = new MOBILITY;
  ORGANIZATIONS = new ORGANIZATIONS;
  CONSUMPTION = new CONSUMPTION;
  VARIOUS = new VARIOUS;
  AVAILABILITY = new AVAILABILITY;
}
