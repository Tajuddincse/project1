import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobility',
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.css']
})
export class MOBILITYComponent implements OnInit {


  selectedQuelsMoyens: any = [];
  selectedQuelleCarte: any = [];

  quelsMoyens = [{"title":"Aucun"},{"title":"A pieds"},{"title":"Avion"},{"title":"Bateau"},{"title":"Bus"},{"title":"Camping-car"},{"title":"Car"},{"title":"Covoiturage"},{"title":"Métro / RER"},{"title":"Moto ou scooter"},{"title":"PAM (Pour aider à la mobilité)"},{"title":"Planche à roulette"},{"title":"Roller"},{"title":"Skateboard électrique"},{"title":"Taxi"},{"title":"Ter"},{"title":"TGV"},{"title":"Tramway"},{"title":"Transilien"},{"title":"Trottinette"},{"title":"Trottinette électrique "},{"title":"Vélo"},{"title":"Vélo électrique "},{"title":"Voiture"},{"title":"Voiture sans permis"},{"title":"Voitures en libre-service"},{"title":"VTC (Uber, chauffeur privé, ...)"},{"title":"Autre, précisez"}];

  quelleCarte = [{"title":"Aucune"},{"title":"Carte carburant"},{"title":"Carte de recharge pour voiture électrique"},{"title":"Compagnies aériennes"},{"title":"Scooters libre-service"},{"title":"SNCF"},{"title":"Stationnement / Parking"},{"title":"Télépéage"},{"title":"Transports en commun (métro, bus, tram)"},{"title":"Trottinettes en libre-service"},{"title":"Vélos en libre-service"},{"title":"Voitures en libre-service"},{"title":"Autre, précisez"}];

  constructor() { }

  ngOnInit(): void {
  }

}
