import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class CONSUMPTIONComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();

  selectedTypes: any;
  selectedDansQuelle: any;
  selectedAvezVous: any;
  lorsqueVousFaites: any;
  quePensezVousDesProduitsBio: any;
  

  types = [{"title":"AMAP (Association pour le maintien d'une agriculture paysanne)"},{"title":"Enseignes de Hard Discount"},{"title":"Hyper et supermarchés"},{"title":"Magasin de producteurs"},{"title":"Magasins bio"},{"title":"Magasins vrac"},{"title":"Maraîcher"},{"title":"Supérettes et magasins de proximité"},{"title":"Sur internet (drive ou livraison à domicile)"},{"title":"Sur le marché"},{"title":"Autre, précisez"}];
  dansQuelle = [{"title":"Aucune"},{"title":"Action"},{"title":"Aldi"},{"title":"Amazon"},{"title":"Atac"},{"title":"Au bout du champ"},{"title":"Auchan"},{"title":"Auchan City"},{"title":"Auchan Direct.fr"},{"title":"Auchan Drive"},{"title":"BBG Market"},{"title":"Bio Frais"},{"title":"Bio'Nantes"},{"title":"Botanic"},{"title":"Boucherie André "},{"title":"Cactus"},{"title":"Carrefour"},{"title":"Carrefour Bio"},{"title":"Carrefour City"},{"title":"Carrefour Contact"},{"title":"Carrefour Drive"},{"title":"Carrefour Express"},{"title":"Carrefour Market"},{"title":"Carrefour montagne"},{"title":"Carrefour planet"},{"title":"Casino"},{"title":"Casino Drive"},{"title":"Casino Shop"},{"title":"Casino Shopping"},{"title":"Cocci Market"},{"title":"Cora"},{"title":"Daily Monop"},{"title":"Day by Day"},{"title":"De l'autre côté de la rue"},{"title":"Delbard"},{"title":"Delhaize"},{"title":"Diagonal"},{"title":"Drive (retrait en magasin)"},{"title":"Ecomarché"},{"title":"Franprix"},{"title":"Géant casino"},{"title":"Grand Frais"},{"title":"H.market"},{"title":"HMarket"},{"title":"Houra.fr"},{"title":"Hyper Casino"},{"title":"Ikéa"},{"title":"Intermarché"},{"title":"Intermarché Contact"},{"title":"Intermarché Drive"},{"title":"Intermarché Express"},{"title":"Intermarché super"},{"title":"Kazidomi"},{"title":"L'Aromathèque"},{"title":"L'Eau Vive"},{"title":"L'Epicerie équitable"},{"title":"La Fourche"},{"title":"La Fourmi"},{"title":"La Graine Epicerie"},{"title":"La Louve"},{"title":"La Maison Plisson"},{"title":"La Marjolaine"},{"title":"La ruche qui dit Oui"},{"title":"La Vie Claire"},{"title":"La Vie Saine"},{"title":"Label vie (Bio)"},{"title":"Le Grand Panier Bio"},{"title":"Le marché de Léopold"},{"title":"Leader price"},{"title":"Les Jardins de Provence"},{"title":"Les nouveaux Robinson"},{"title":"Livraison à domicile"},{"title":"Ma Ferme en Ville"},{"title":"Ma grand-mère fait du Vélo"},{"title":"Magasin bio"},{"title":"Marcel et fils "},{"title":"Marché Frais Géant"},{"title":"Marks & Spencer"},{"title":"Match"},{"title":"Maximarché"},{"title":"Naturalia"},{"title":"Naturenville"},{"title":"NaturéO"},{"title":"Norma"},{"title":"Normal Stokomani"},{"title":"O'Marché Frais"},{"title":"O'tera"},{"title":"Paris Store"},{"title":"Petit casino"},{"title":"Petit commercant"},{"title":"Picard"},{"title":"Potager City"},{"title":"Prairial"},{"title":"Producteur local"},{"title":"Satoriz"},{"title":"Scarole & Marcellin"},{"title":"Sherpa"},{"title":"Simply market"},{"title":"Spar"},{"title":"Super Halle"},{"title":"Supermarché Match"},{"title":"Sur le marché"},{"title":"Tang Frères"},{"title":"Terres Lyonnaises"},{"title":"Trader Joe's"},{"title":"Uber Eats"},{"title":"Un Grain dans le Grenier"},{"title":"Un Monde Vegan"},{"title":"Vival"},{"title":"Autre, précisez"}];
  avezVous = [{"title":"Aucune"},{"title":"Je suis adepte du sans gluten"},{"title":"Je suis allergique au gluten"},{"title":"Je suis un régime spécifique"},{"title":"Je suis un régime hyposodé"},{"title":"Je suis un régime hyperprotéïné"},{"title":"J'ai des allergies d’alimentaires (lactose, fruits à coque, …)"},{"title":"Je suis végétarien"},{"title":"Je suis pesco-végétarien"},{"title":"Je suis végétalien"},{"title":"Je suis flexitarien"},{"title":"Je mange halal"},{"title":"Je mange casher"}];

  constructor(public allFormData: FormData) { }

  ngOnInit(): void {
    this.selectedTypes = this.allFormData.CONSUMPTION.selectedTypes;
    this.selectedDansQuelle = this.allFormData.CONSUMPTION.selectedDansQuelle
    this.selectedAvezVous = this.allFormData.CONSUMPTION.selectedAvezVous;
    this.lorsqueVousFaites = this.allFormData.CONSUMPTION.lorsqueVousFaites;
    this.quePensezVousDesProduitsBio = this.allFormData.CONSUMPTION.quePensezVousDesProduitsBio;
  }

  setlorsqueVousFaites(event: any){
    this.lorsqueVousFaites = event.target.value;
  }
  setQuePensezVousDesProduitsBio(event: any){
    this.quePensezVousDesProduitsBio = event.target.value;
  }

  back(){
    this.pageName.emit('ORGANIZATIONS');
  }
 
  saveForm(){
    this.allFormData.CONSUMPTION.selectedTypes = this.selectedTypes;
    this.allFormData.CONSUMPTION.selectedDansQuelle = this.selectedDansQuelle;
    this.allFormData.CONSUMPTION.selectedAvezVous = this.selectedAvezVous;
    this.allFormData.CONSUMPTION.lorsqueVousFaites = this.lorsqueVousFaites;
    this.allFormData.CONSUMPTION.quePensezVousDesProduitsBio = this.quePensezVousDesProduitsBio;
    this.pageName.emit('VARIOUS');
  }

}
