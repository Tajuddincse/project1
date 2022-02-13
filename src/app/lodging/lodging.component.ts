import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})
export class LODGINGComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();
  selectedResidency: any;
  selectedEqipmentOfYourSecondHome: any;
  selectedmyWorkProject: any;
  TypeDeLogement: any;
  StatutDeVotreResidencePrincipale: any;
  avezVousUneResidenceSecondaire: any;
  deQuelTypeDeLogementsAgitil: any;

  mainresidency = [{"title":"Any"},{"title":"garden shed"},{"title":"carport"},{"title":"Water softener"},{"title":"Alarm"},{"title":"Connected devices"},{"title":"DIY workshop"},{"title":"Balcony"},{"title":"Barbecue"},{"title":"bowl"},{"title":"Electric privacy screen"},{"title":"Camera / CCTV"},{"title":"cellar"},{"title":"wine cellar"},{"title":"heater"},{"title":"water heater"},{"title":"Chimney"},{"title":"Air conditioner"},{"title":"short"},{"title":"equipped kitchen"},{"title":"Addiction"},{"title":"Automation"},{"title":"Fountain"},{"title":"Garage"},{"title":"barn"},{"title":"attic"},{"title":"gymnasium"},{"title":"Jacuzzi"},{"title":"Garden"},{"title":"Solar panels"},{"title":"car park"},{"title":"Patio"},{"title":"Pergola"},{"title":"Pool"},{"title":"Wood or pellet stove"},{"title":"Heat pump / Reversible air conditioning"},{"title":"Automatic gate"},{"title":"Chicken coop"},{"title":"well"},{"title":"Tight"},{"title":"Spa"},{"title":"awning"},{"title":"Farmland"},{"title":"Terrace"},{"title":"Skylight"},{"title":"Veranda"},{"title":"Videophone"},{"title":"Anti-burglary glazing"},{"title":"Motorized shutters"},{"title":"other, give details"}];
  eqipmentOfYourSecondHome = [{"title":"Any"},{"title":"Alarm"},{"title":"Others)"},{"title":"Balcony"},{"title":"Camera/ Video surveillance"},{"title":"Garage"},{"title":"Garden"},{"title":"Solar panels"},{"title":"Pool"},{"title":"heat pump"},{"title":"Automatic gate"},{"title":"Terrace"},{"title":"Veranda"},{"title":"Motorized shutters"}];
  myWorkProject = [{"title":"Aucun"},{"title":"Abri jardin"},{"title":"Abri voiture"},{"title":"Achat"},{"title":"Alarme"},{"title":"Aménagement d'un fourgon"},{"title":"Aménagement des extérieurs"},{"title":"Aménager un appartement"},{"title":"Balcon"},{"title":"Bibliothèque"},{"title":"Caméra/ Vidéo surveillance"},{"title":"Chaudière"},{"title":"Chauffage"},{"title":"Cheminée"},{"title":"Climatisation"},{"title":"Cloisons"},{"title":"Combles"},{"title":"Construction d'un puits"},{"title":"Construction four à bois"},{"title":"Construction maison"},{"title":"Cuisine équipée"},{"title":"Décoration d'intérieur"},{"title":"Déménagement"},{"title":"Domotique"},{"title":"Dressing"},{"title":"Electricité"},{"title":"Façade"},{"title":"Fenêtres - Volets - Portes"},{"title":"Fosse septique"},{"title":"Garage"},{"title":"Isolation"},{"title":"Jacuzzi"},{"title":"Jardin"},{"title":"Mur de soutènement"},{"title":"Panneaux solaires"},{"title":"Peinture"},{"title":"Pergola"},{"title":"Piscine"},{"title":"Plafond"},{"title":"Plan de travail cuisine"},{"title":"Plomberie "},{"title":"Poele à bois ou granules"},{"title":"Pompe a chaleur"},{"title":"Portail automatique"},{"title":"Revêtements des sols"},{"title":"Revêtements muraux"},{"title":"Salle cinéma"},{"title":"Salle de bains"},{"title":"Serrurerie"},{"title":"Spa"},{"title":"Store banne"},{"title":"Stores"},{"title":"Terrasse"},{"title":"Toilettes"},{"title":"Toiture"},{"title":"Travaux d'extensions"},{"title":"Travaux de rénovations"},{"title":"Véranda"},{"title":"Visiophone"},{"title":"Volets électriques"},{"title":"Autre, précisez"}];

  constructor(public formData: FormData, public allFormData: FormData,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedResidency = this.allFormData.LODGING.selectedResidency;
    this.selectedEqipmentOfYourSecondHome = this.allFormData.LODGING.selectedEqipmentOfYourSecondHome;
    this.selectedmyWorkProject = this.allFormData.LODGING.selectedmyWorkProject;
    this.TypeDeLogement = this.allFormData.LODGING.TypeDeLogement;
    this.StatutDeVotreResidencePrincipale = this.allFormData.LODGING.StatutDeVotreResidencePrincipale;
    this.avezVousUneResidenceSecondaire = this.allFormData.LODGING.avezVousUneResidenceSecondaire;
    this.deQuelTypeDeLogementsAgitil = this.allFormData.LODGING.deQuelTypeDeLogementsAgitil;
  }

  setSelectedResidency(event: any){
    this.selectedResidency = event;
  }
  setavezVousUneResidenceSecondaire(event: any){
    this.avezVousUneResidenceSecondaire = event.target.value;
  }
  setselectedEqipmentOfYourSecondHome(event: any){
    this.selectedEqipmentOfYourSecondHome = event;
  }
  setselectedmyWorkProject(event: any){
    this.selectedmyWorkProject = event;
  }
  setdeQuelTypeDeLogementsAgitil(event: any){
    this.deQuelTypeDeLogementsAgitil = event.target.value;
  }
  setTypeDeLogement(event: any){
    this.TypeDeLogement = event.target.value;
  }
  setStatutDeVotreResidencePrincipale(event: any){
   this.StatutDeVotreResidencePrincipale = event.target.value;
  }
  back(){
    this.pageName.emit('PERSONAL_DATA');
  }
  saveForm(){
    this.allFormData.LODGING.TypeDeLogement = this.TypeDeLogement;
    this.allFormData.LODGING.StatutDeVotreResidencePrincipale = this.StatutDeVotreResidencePrincipale;
    this.allFormData.LODGING.selectedResidency = this.selectedResidency;
    this.allFormData.LODGING.avezVousUneResidenceSecondaire = this.avezVousUneResidenceSecondaire;
    this.allFormData.LODGING.deQuelTypeDeLogementsAgitil = this.deQuelTypeDeLogementsAgitil;
    this.allFormData.LODGING.selectedEqipmentOfYourSecondHome = this.selectedEqipmentOfYourSecondHome;
    this.allFormData.LODGING.selectedmyWorkProject = this.selectedmyWorkProject;
    this.pageName.emit('MEDIA');
  }
}
