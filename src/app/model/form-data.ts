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
  VotreSituationProfessionnelle = '';
  QuelEstVotreStatutProfessionnel = '';
  QuelleProfessionExercezVous = '';
  NomDeLentreprise = '';
  DansQuelSecteur = '';
  SecteurPrive = '';
  QuelsSontLes = '';
  Adresse = '';
  CodePostal = '';
  Ville = '';
  QuelleEstLa = '';
  QuelChiffre = '';
  QuelEstVotre = '';
}
class PERSONAL_DATA{
  VotrePays = '';
  VotreNiveau  = '';
  VotreSituation = '';
  CombienDenfants = '';
  AttendezVous = '';
  CombienEnfants = '';
}

class LODGING{
  selectedResidency: any;
  selectedEqipmentOfYourSecondHome: any;
  selectedmyWorkProject: any;
  TypeDeLogement: any;
  StatutDeVotreResidencePrincipale: any;
  avezVousUneResidenceSecondaire: any;
  deQuelTypeDeLogementsAgitil: any;
}
class MEDIA{
  selectedQuelles: any;
  selectedavezVvous: any;
  selectedquelsMagazines: any;
  selectedQuelest: any;
  selectedMobile: any;
  marqueDeVotreTelephonePortablePersonnel: any;
}
class DAY_TO_DAY{
  selectedQuelSport: any;
  selectedQuelsSont: any;
  selectedPortezVous: any;
  selectedProblemes: any;
  selectedQuelest: any;
  selectedVotrePeau: any;
  selectedQuelleEst: any;
  selectedQuelsAnimaux: any;
  fumezVous: any;
  avezhabitude: any;
}
class MOBILITY{
  selectedQuelsMoyens: any;
  selectedQuelleCarte: any;
  combienDeVehiculesAutomobiles: any;
  combienDeVehicules2roues: any;
}
class ORGANIZATIONS{
  selectedAssuranceHabitation: any;
  selectedMutuellePersonnelle: any;
  selectedMutuelleProfessionnelle: any;
  selectedAssuranceAutomobile: any;
  selectedAssuranceVie: any;
  selectedAssurancedDece: any;
  selectedQuelleEst: any;
  selectedQuelsAnimaux: any;
  selectedCredit: any;
}
class CONSUMPTION{
  selectedTypes: any;
  selectedDansQuelle: any;
  selectedAvezVous: any;
  lorsqueVousFaites: any;
  quePensezVousDesProduitsBio: any;
}
class VARIOUS{
  sensibilitePolitique: any;
  quePensezVous: any;
  aupresDeQuel: any;
  commentAvezAous: any;
  sibesoin: any;
}
class AVAILABILITY{
  slotList: any = [];
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
