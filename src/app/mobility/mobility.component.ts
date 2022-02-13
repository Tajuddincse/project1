import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-mobility',
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.css']
})
export class MOBILITYComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();

  selectedQuelsMoyens: any;
  selectedQuelleCarte: any;
  combienDeVehiculesAutomobiles:any;
  combienDeVehicules2roues: any;

  quelsMoyens = [{"title":"Aucun"},{"title":"A pieds"},{"title":"Avion"},{"title":"Bateau"},{"title":"Bus"},{"title":"Camping-car"},{"title":"Car"},{"title":"Covoiturage"},{"title":"Métro / RER"},{"title":"Moto ou scooter"},{"title":"PAM (Pour aider à la mobilité)"},{"title":"Planche à roulette"},{"title":"Roller"},{"title":"Skateboard électrique"},{"title":"Taxi"},{"title":"Ter"},{"title":"TGV"},{"title":"Tramway"},{"title":"Transilien"},{"title":"Trottinette"},{"title":"Trottinette électrique "},{"title":"Vélo"},{"title":"Vélo électrique "},{"title":"Voiture"},{"title":"Voiture sans permis"},{"title":"Voitures en libre-service"},{"title":"VTC (Uber, chauffeur privé, ...)"},{"title":"Autre, précisez"}];

  quelleCarte = [{"title":"Aucune"},{"title":"Carte carburant"},{"title":"Carte de recharge pour voiture électrique"},{"title":"Compagnies aériennes"},{"title":"Scooters libre-service"},{"title":"SNCF"},{"title":"Stationnement / Parking"},{"title":"Télépéage"},{"title":"Transports en commun (métro, bus, tram)"},{"title":"Trottinettes en libre-service"},{"title":"Vélos en libre-service"},{"title":"Voitures en libre-service"},{"title":"Autre, précisez"}];

  constructor(public allFormData: FormData) { }

  ngOnInit(): void {
    this.selectedQuelsMoyens = this.allFormData.MOBILITY.selectedQuelsMoyens;
    this.selectedQuelleCarte = this.allFormData.MOBILITY.selectedQuelleCarte;
    this.combienDeVehiculesAutomobiles = this.allFormData.MOBILITY.combienDeVehiculesAutomobiles;
    this.combienDeVehicules2roues = this.allFormData.MOBILITY.combienDeVehicules2roues;
  }

  back(){
    this.pageName.emit('DAY_TO_DAY');
  }
  setCombienDeVehiculesAutomobiles(event: any){
    this.combienDeVehiculesAutomobiles = event.target.value;
  }
  setCombienDeVehicules2roues(event: any){
    this.combienDeVehicules2roues = event.target.value;
  }
  saveForm(){
    this.allFormData.MOBILITY.selectedQuelsMoyens = this.selectedQuelsMoyens;
    this.allFormData.MOBILITY.selectedQuelleCarte =  this.selectedQuelleCarte;
    this.allFormData.MOBILITY.combienDeVehiculesAutomobiles = this.combienDeVehiculesAutomobiles;
    this.allFormData.MOBILITY.combienDeVehicules2roues = this.combienDeVehicules2roues;
    this.pageName.emit('ORGANIZATIONS');
  }

}
