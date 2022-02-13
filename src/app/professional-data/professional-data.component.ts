import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-professional-data',
  templateUrl: './professional-data.component.html',
  styleUrls: ['./professional-data.component.css']
})
export class PROFESSIONALDATAComponent implements OnInit {
  contactForm: any;
  @Output() pageName = new EventEmitter<string>();

  constructor(public formData: FormData, public allFormData: FormData,private fb: FormBuilder) {
    console.log(JSON.stringify(formData));
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      VotreSituationProfessionnelle: [this.allFormData.PROFESSIONAL_DATA.VotreSituationProfessionnelle],
      QuelEstVotreStatutProfessionnel: [this.allFormData.PROFESSIONAL_DATA.QuelEstVotreStatutProfessionnel],
      QuelleProfessionExercezVous: [this.allFormData.PROFESSIONAL_DATA.QuelleProfessionExercezVous],
      NomDeLentreprise: [this.allFormData.PROFESSIONAL_DATA.NomDeLentreprise],
      DansQuelSecteur: [this.allFormData.PROFESSIONAL_DATA.DansQuelSecteur],
      SecteurPrive: [this.allFormData.PROFESSIONAL_DATA.SecteurPrive ],
      QuelsSontLes: [this.allFormData.PROFESSIONAL_DATA.QuelsSontLes],
      Adresse: [this.allFormData.PROFESSIONAL_DATA.Adresse],
      CodePostal: [this.allFormData.PROFESSIONAL_DATA.CodePostal],
      Ville: [this.allFormData.PROFESSIONAL_DATA.Ville],
      QuelleEstLa: [this.allFormData.PROFESSIONAL_DATA.QuelleEstLa],
      QuelChiffre: [this.allFormData.PROFESSIONAL_DATA.QuelChiffre],
      QuelEstVotre: [this.allFormData.PROFESSIONAL_DATA.QuelEstVotre],
    });
  }


  submit(formData: any){
    this.allFormData.PROFESSIONAL_DATA.VotreSituationProfessionnelle = formData.VotreSituationProfessionnelle;
    this.allFormData.PROFESSIONAL_DATA.QuelEstVotreStatutProfessionnel = formData.QuelEstVotreStatutProfessionnel;
    this.allFormData.PROFESSIONAL_DATA.QuelleProfessionExercezVous = formData.QuelleProfessionExercezVous;
    this.allFormData.PROFESSIONAL_DATA.NomDeLentreprise = formData.NomDeLentreprise;
    this.allFormData.PROFESSIONAL_DATA.DansQuelSecteur = formData.DansQuelSecteur;
    this.allFormData.PROFESSIONAL_DATA.SecteurPrive = formData.SecteurPrive;
    this.allFormData.PROFESSIONAL_DATA.QuelsSontLes = formData.QuelsSontLes;
    this.allFormData.PROFESSIONAL_DATA.Adresse = formData.Adresse;
    this.allFormData.PROFESSIONAL_DATA.CodePostal = formData.CodePostal;
    this.allFormData.PROFESSIONAL_DATA.Ville = formData.Ville;
    this.allFormData.PROFESSIONAL_DATA.QuelleEstLa = formData.QuelleEstLa;
    this.allFormData.PROFESSIONAL_DATA.QuelChiffre = formData.QuelChiffre;
    this.allFormData.PROFESSIONAL_DATA.QuelEstVotre = formData.QuelEstVotre;
    this.pageName.emit('PERSONAL_DATA');
    console.log(JSON.stringify(formData))
  }

    back(){
      this.pageName.emit('CONTACT_DETAILS');
    }
}
