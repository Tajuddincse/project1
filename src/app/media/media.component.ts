import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MEDIAComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();
  contactForm: any;
  selectedQuelles: any;
  selectedavezVvous: any;
  selectedquelsMagazines: any;
  selectedQuelest: any;
  selectedMobile: any;
  marqueDeVotreTelephonePortablePersonnel: any;

  quelles = [{"title":" Ado FM"},{"title":" Alouette"},{"title":" Alta fréquenza"},{"title":" Aucune"},{"title":" Autoroute FM"},{"title":" Autoroute Info"},{"title":" Black Box"},{"title":" Champagne FM"},{"title":" Chante France"},{"title":" Contact FM"},{"title":" Evasion FM"},{"title":" Fc radio (Fréquence côtière)"},{"title":" FG DJ Radio"},{"title":" France Bleu"},{"title":" France Culture"},{"title":" France Info"},{"title":" France Inter"},{"title":" France maghreb"},{"title":" France Musique"},{"title":" Fun Radio"},{"title":" Jazz radio"},{"title":" jordanne FM"},{"title":" Latina"},{"title":" LCI Radio"},{"title":" M Radio"},{"title":" Mona FM"},{"title":" Normandie FM"},{"title":" Nostalgie"},{"title":" Parenthèse radio"},{"title":" Phare FM"},{"title":" Radio Classique"},{"title":" Radio Courtoisie"},{"title":" Radio de la mer"},{"title":" Radio espérance"},{"title":" Radio FG"},{"title":" Radio Nova"},{"title":" Radio orient"},{"title":" Radio scoop"},{"title":" Radio star"},{"title":" Radio Trafic FM"},{"title":" Radio vitamine"},{"title":" Radio zinzine"},{"title":" Rire et chansons"},{"title":" Sud Radio"},{"title":" TSF Jazz"},{"title":" Vibration"},{"title":" Virgin Radio"},{"title":" Voltage"},{"title":"Africa n°1"},{"title":"Alpes 1"},{"title":"AlterNantes"},{"title":"ARL"},{"title":"Arte Radio"},{"title":"Canal B"},{"title":"Capsao"},{"title":"CINEMUSIC Radio"},{"title":"Classic 21"},{"title":"Classic FM NL"},{"title":"Delta FM"},{"title":"Djam Radio"},{"title":"Flower power radio"},{"title":"France 2"},{"title":"Fréquence Jazz"},{"title":"Frisky Radio"},{"title":"Galaxie Radio"},{"title":"Générations"},{"title":"Grimaldi FM"},{"title":"Happy Fm"},{"title":"Hot Radio"},{"title":"Ici et maintenant"},{"title":"Impact FM"},{"title":"Kawa hifi station"},{"title":"Là La Radio"},{"title":"La Radio Plus"},{"title":"Latitude "},{"title":"Littoral FM"},{"title":"Magnum la radio"},{"title":"Maritima"},{"title":"Max FM"},{"title":"Maxi 80"},{"title":"MBS Radio"},{"title":"Mistral FM"},{"title":"Océane"},{"title":"ODS Radio"},{"title":"Pastel fm"},{"title":"Radio 6"},{"title":"Radio 666"},{"title":"Radio Activ'"},{"title":"Radio alpha"},{"title":"Radio Béton"},{"title":"Radio Brume"},{"title":"Radio Camargue"},{"title":"Radio campus"},{"title":"Radio Canut"},{"title":"Radio Capital"},{"title":"Radio Caroline"},{"title":"Radio Cristal"},{"title":"Radio Dio"},{"title":"Radio Espace"},{"title":"Radio Flash"},{"title":"Radio Grenouille"},{"title":"Radio Isa"},{"title":"Radio J"},{"title":"Radio Kabul"},{"title":"Radio libertaire"},{"title":"Radio locale"},{"title":"Radio Meuh"},{"title":"Radio Monaco"},{"title":"Radio Néo"},{"title":"Radio parleur"},{"title":"Radio Phénix"},{"title":"Radio Pomme d'api"},{"title":"Radio Rézo"},{"title":"Radio Saint Ferréol"},{"title":"Radio Salam"},{"title":"Radio sympa"},{"title":"Radio Transat"},{"title":"RAM"},{"title":"RBA"},{"title":"RCA"},{"title":"Résonance"},{"title":"Riviera Radio"},{"title":"RVA"},{"title":"Spoon radio"},{"title":"Tarmac"},{"title":"Tendance ouest"},{"title":"Tonic Radio"},{"title":"Trace FM"},{"title":"Urban hit"},{"title":"Virage Radio"},{"title":"VivaCité"},{"title":"Zebradio"},{"title":"Autre, précisez"}];

  avezVvous = [{"title":"Aucun"},{"title":"AB1"},{"title":"ADN"},{"title":"Alice"},{"title":"Alsace 20"},{"title":"Altice Studio"},{"title":"Amazon Prime"},{"title":"Angers Télé"},{"title":"Anime Digital Network"},{"title":"Apple music"},{"title":"Apple TV"},{"title":"Army stories"},{"title":"Arte"},{"title":"Azur TV"},{"title":"Baby TV"},{"title":"BFM Business Paris"},{"title":"Bouquet Famille (Orange)"},{"title":"Bouquet Maghreb"},{"title":"C STAR"},{"title":"Canal +"},{"title":"Canal + Cinéma"},{"title":"Canal + Le bouquet"},{"title":"Canal + Sport"},{"title":"Canal 32"},{"title":"Canal Panorama"},{"title":"Canal Play"},{"title":"Canal sat"},{"title":"Chaines hertziennes"},{"title":"Cinaps TV"},{"title":"Darty"},{"title":"Demain IDF"},{"title":"Eurosport player"},{"title":"France 2"},{"title":"France 3"},{"title":"France 4"},{"title":"France 5"},{"title":"Franceinfo"},{"title":"Grand Lille TV"},{"title":"Grand Littoral TV"},{"title":"HBO Max"},{"title":"La chaine Normande"},{"title":"La Chaîne Parlementaire (LCP)"},{"title":"Le Bouquet Africain"},{"title":"Le cable"},{"title":"LM TV Sarthe"},{"title":"Madelen"},{"title":"MaTélé"},{"title":"Mirabelle TV"},{"title":"My canal"},{"title":"Numericable"},{"title":"OCS (Orange Cinéma Séries)"},{"title":"Orange"},{"title":"Paramount Channel"},{"title":"Paris Première"},{"title":"Planète +"},{"title":"Provence Azur"},{"title":"Public Sénat"},{"title":"Rakuten VIKI"},{"title":"Salto"},{"title":"Shadowz"},{"title":"Starz"},{"title":"Télé Bocal"},{"title":"Trace Urban"},{"title":"TV Paese"},{"title":"TV Rennes 35 Bretagne"},{"title":"TV Sud Camargue-Cévennes"},{"title":"TV7 Bordeaux"},{"title":"TV8 Mont-Blanc"},{"title":"Var Azur"},{"title":"Wakanim"},{"title":"WEO la télé du Nord-Pas-de Calais"},{"title":"Autre, précisez"}];

  quelsMagazines = [{"title":"Aucun"},{"title":"01 Informatique Business Et Technologies"},{"title":"1 jour 1 actu"},{"title":"3 étoiles magazine"},{"title":"30 millions d'amis"},{"title":"5 majeur"},{"title":"60 Millions De Consommateurs"},{"title":"A nous Paris"},{"title":"Abricot"},{"title":"Action Commerciale"},{"title":"Actualité De L'histoire"},{"title":"Ad Architectural Digest"},{"title":"AD magazine"},{"title":"Air & Cosmo"},{"title":"Air Et Cosmos"},{"title":"Air fan"},{"title":"Alpes Magazine"},{"title":"Alternatif Bien-être"},{"title":"Alternative santé"},{"title":"Alternatives Economiques"},{"title":"Alternatives Internationales"},{"title":"AMC"},{"title":"Amina"},{"title":"Animal Attitude"},{"title":"Animan"},{"title":"AnimeLand"},{"title":"Anna"},{"title":"Arabies"},{"title":"Archéologie"},{"title":"Archéopages"},{"title":"Architecture Durable"},{"title":"Arrondir Ses Fins De Mois"},{"title":"Art & Décoration"},{"title":"Art Absoluement"},{"title":"Art Press"},{"title":"Artistes magazine"},{"title":"Arts in the city"},{"title":"Arts Magazine"},{"title":"ASH"},{"title":"Astrapi"},{"title":"ATELIER Déco & Création"},{"title":"Atout Chat"},{"title":"Atout Chien"},{"title":"Aujourd'hui En France"},{"title":"Auto Hebdo"},{"title":"Auto Moto"},{"title":"Auto Plus"},{"title":"Autoretro"},{"title":"Avantages"},{"title":"Aventures Magazine"},{"title":"Avivre"},{"title":"Axe & Alliés"},{"title":"Azart"},{"title":"Azart Photographie"},{"title":"Babar"},{"title":"Bam"},{"title":"Bambi"},{"title":"Basket News"},{"title":"Basta magazine"},{"title":"Bayard Jeunesse"},{"title":"Beaux Arts Magazine"},{"title":"Biba"},{"title":"Biocontact"},{"title":"Booska-p"},{"title":"Bretagne Magazine"},{"title":"Broderie Inspiration"},{"title":"Burda Patchwork"},{"title":"Burda Tendances Mode"},{"title":"Burda Tricot"},{"title":"Ça M’intéresse"},{"title":"Cafeyn (e-magazine)"},{"title":"Cahiers Du Cinema"},{"title":"Cake Masters"},{"title":"Campagne Decoration"},{"title":"Camping-car Magazine"},{"title":"Canard PC"},{"title":"Capital"},{"title":"Cause Commune"},{"title":"Causette"},{"title":"Causeur"},{"title":"Cerveau et psycho"},{"title":"Challenges"},{"title":"Champions Du Ce1"},{"title":"Champions Du Cp"},{"title":"Charente Libre"},{"title":"Charlie Hebdo"},{"title":"Chasse-Marée"},{"title":"Chasseur d'Images"},{"title":"Châtelaine"},{"title":"Chaudron Magique"},{"title":"Chef D'entreprise Magazine"},{"title":"Cheval magazine"},{"title":"Ciel & espace"},{"title":"Cinéma Teaser"},{"title":"City magazine international"},{"title":"Classica"},{"title":"Clebrite Magazine"},{"title":"Comment ça Marche"},{"title":"Concours Magazine"},{"title":"Connaissance Des Arts"},{"title":"Corse-Matin"},{"title":"Cosmétiquemag"},{"title":"Cosmopolitan"},{"title":"COUDRE C'EST FACILE"},{"title":"Courrier Cadres"},{"title":"Courrier International"},{"title":"Coyote mag"},{"title":"Cuisine Actuelle"},{"title":"Cuisine Et Vins De France"},{"title":"Culture Scrapbooking"},{"title":"Curionautes des sciences"},{"title":"Dada"},{"title":"Dalloz"},{"title":"Danser"},{"title":"Décision Achats"},{"title":"Dernières Nouvelles d'Alsace"},{"title":"Détection passion"},{"title":"Détente jardin"},{"title":"Détours en France"},{"title":"Diapason"},{"title":"Digital Photo"},{"title":"Direct Matin"},{"title":"Dj Mag"},{"title":"Dossier Familial"},{"title":"Dossiers d'archéologie"},{"title":"Dreams"},{"title":"Eco Parent"},{"title":"EJE Journal"},{"title":"El País"},{"title":"Elle A Table"},{"title":"Elle Decoration"},{"title":"Espaces latinos"},{"title":"Esprit bonsaï"},{"title":"Etapes"},{"title":"F1 Racing"},{"title":"Face au Risque"},{"title":"Fait Main"},{"title":"Fakir"},{"title":"Famili"},{"title":"Famille Chrétienne"},{"title":"Femme Actuelle"},{"title":"Filières Avicoles"},{"title":"Financial Times"},{"title":"Flair magazine"},{"title":"FLAT 6"},{"title":"Fleurs Créatif"},{"title":"Fluide Glacial"},{"title":"France Amerique"},{"title":"France Dimanche"},{"title":"France Football (mardi+ Week-end)"},{"title":"France routes"},{"title":"France Soir"},{"title":"France-Antilles"},{"title":"Frandroid"},{"title":"Frankfurter Allgemeine Zeitung"},{"title":"Fun to learn Friends"},{"title":"Gabrielle"},{"title":"Gagner Au Quinte +"},{"title":"Gala"},{"title":"Gala Gourmand"},{"title":"Garçon Magazine"},{"title":"Gaultmillau"},{"title":"Gazelle"},{"title":"Gazette des Armes"},{"title":"Gazoline"},{"title":"Généalogie Magazine"},{"title":"Geo Ado"},{"title":"Géo plein air"},{"title":"Glamour"},{"title":"Golf magazine"},{"title":"Gq Gentlemen S Quarterly"},{"title":"Grand Prix Magazine"},{"title":"Grande Galerie, Le Journal Du Louvre"},{"title":"Grands Reportages"},{"title":"Grazia"},{"title":"Grimper magazine"},{"title":"Hand Action"},{"title":"Happinez"},{"title":"Harvard Business Review"},{"title":"Healthy Food"},{"title":"Histoire & Civilisations"},{"title":"Historia / Historia Thematique"},{"title":"Home Magazine"},{"title":"I Love English (site Anglais)"},{"title":"I Love English Junior (bayard Kids)"},{"title":"Ici Paris"},{"title":"Ideat"},{"title":"Images Doc"},{"title":"Images Du Monde"},{"title":"Infrarouge"},{"title":"Initiative Communiste"},{"title":"International Herald Tribune"},{"title":"Internet Pratique"},{"title":"Investir Le Journal Des Finances"},{"title":"Isa"},{"title":"J'aime Lire"},{"title":"J'apprends à Lire"},{"title":"J'apprends L'anglais"},{"title":"Jalouse"},{"title":"Jardin Facile"},{"title":"Jardin Pratique"},{"title":"JDA"},{"title":"Je Lis Deja"},{"title":"Je Lis Des Histoires Vraies"},{"title":"Jeanne Magazine"},{"title":"Jeune Afrique"},{"title":"Jeux Sur Un Plateau"},{"title":"Jeux Video Magazine"},{"title":"Jogging International"},{"title":"Joypad"},{"title":"Kaizen"},{"title":"Kiblind magazine"},{"title":"Kid Paddle Magazine"},{"title":"L'AGEFI"},{"title":"L'Alsace Le Pays"},{"title":"L'ami Des Jardins"},{"title":"L'Architecture d'Aujourd'hui"},{"title":"L'ART DE L'AQUARELLE"},{"title":"L'Atelier des Nanas (ADN)"},{"title":"L'Auto Journal"},{"title":"L'Automobile Magazine"},{"title":"L'Écran fantastique"},{"title":"L'éléphant"},{"title":"L'envers des affaires"},{"title":"L'equipe - Edition Du Lundi Au Samedi"},{"title":"L'Espress international"},{"title":"L'Est Républicain"},{"title":"L'etudiant"},{"title":"L'expansion"},{"title":"L'Hôtellerie Restauration"},{"title":"L'humanité"},{"title":"L'indépendant"},{"title":"L'indépendant de Perpignan"},{"title":"L'Infirmière Magazine"},{"title":"L'officiel Voyage"},{"title":"L'ordinateur Individuel Svm"},{"title":"L'Yvonne républicaine"},{"title":"L214 Mag"},{"title":"La Chronique d'Amnesty International"},{"title":"La Croix"},{"title":"La Déferlante"},{"title":"La Dépêche du Midi"},{"title":"La Gazette de l'Hôtel Drouot"},{"title":"La Gazette des communes"},{"title":"La Lettre De La Bourse"},{"title":"La Liberté de l'Est"},{"title":"La maison écologique"},{"title":"La Maison Victor"},{"title":"La Manche libre"},{"title":"La Marseillaise"},{"title":"La Montagne"},{"title":"La Nouvelle République"},{"title":"La Nouvelle République du Centre-Ouest (NR)"},{"title":"La Nouvelle Vie ouvrière (NVO)"},{"title":"La Peche Et Les Poissons"},{"title":"La Presse bisontine"},{"title":"La Presse de la Manche"},{"title":"La Provence"},{"title":"La Quinzaine littéraire"},{"title":"La Recherche"},{"title":"La République de Seine et Marne"},{"title":"La République des Pyrénées"},{"title":"La Revue"},{"title":"La Revue Des Jeux"},{"title":"La Revue Des Montres"},{"title":"La Revue dessinée"},{"title":"La Revue du praticien"},{"title":"La Revue Du Vin De France"},{"title":"La Revue Fiduciaire"},{"title":"La Revue Nationale De La Chasse"},{"title":"La revue Prescrire"},{"title":"La Revue XYZ de la Nouvelle"},{"title":"La RPF (Revue Pratique du Froid)"},{"title":"La Salamandre"},{"title":"La Semaine Juridique"},{"title":"La tribu du vivant"},{"title":"La Tribune"},{"title":"La Tribune de Lyon"},{"title":"La Vie"},{"title":"La Voix Du Nord"},{"title":"Land Mag"},{"title":"Le Berry Républicain"},{"title":"Le Bien public Saône-et-Loire"},{"title":"Le Canard Enchaîné"},{"title":"Le Chasseur Francais"},{"title":"Le Courrier De L Atlas"},{"title":"Le Courrier picard"},{"title":"Le Dauphiné Libéré"},{"title":"Le Fana de l'Aviation"},{"title":"Le Figaro"},{"title":"Le Figaro Business"},{"title":"Le Film français"},{"title":"Le Journal de l'Animation"},{"title":"Le Journal De La Haute Marne"},{"title":"Le Journal De La Maison"},{"title":"Le Journal De Mickey"},{"title":"Le Journal de Saône-et-Loire (JSL)"},{"title":"Le Journal De Spirou"},{"title":"Le Journal Des Arts"},{"title":"Le Journal des femmes"},{"title":"Le Journal Des Finances"},{"title":"Le journal des psychologues "},{"title":"Le Journal du Bugey"},{"title":"Le Journal du centre"},{"title":"Le Journal Du Dimanche (jdd)"},{"title":"Le journal du pâtissier"},{"title":"Le Journal online de Saône-et-Loire"},{"title":"Le Magazine Officiel Windows"},{"title":"Le Maine libre"},{"title":"Le Monde de l'Education"},{"title":"Le monde de la photo"},{"title":"Le Monde Des Ados"},{"title":"Le Monde Diplomatique"},{"title":"Le Monde Du Camping Car"},{"title":"Le Networker magazine"},{"title":"Le Nouveau Détective"},{"title":"Le Nouvel Observateur"},{"title":"Le Parisien"},{"title":"Le Particulier"},{"title":"Le Patriote"},{"title":"Le Pays gessien"},{"title":"Le Pays malouin"},{"title":"Le Point Vétérinaire"},{"title":"Le Point-édition internationale"},{"title":"Le Populaire"},{"title":"Le Républicain Lorrain"},{"title":"Le Républicain Lot-et-Garonne"},{"title":"Le Spectacle Du Monde"},{"title":"Le Télégramme de Brest"},{"title":"Le Virus Informatique"},{"title":"Les Afriques"},{"title":"Les Années Laser"},{"title":"Les Cahiers De Science Et Vie"},{"title":"Les champs de mars"},{"title":"Les Clefs de l'actualité"},{"title":"Les débrouillards"},{"title":"Les Dossiers De L Actualite"},{"title":"Les explorateurs"},{"title":"Les Grands Dossiers Des Sciences Humaines"},{"title":"Les Infos Pays De Ploërmel"},{"title":"Les P Tites Filles A La Vanille"},{"title":"Les Veillees Des Chaumieres"},{"title":"Les Week Ends Du Figaro"},{"title":"Liaisons Sociales Magazine"},{"title":"Liberation"},{"title":"Libération"},{"title":"LSA (Libre Service Actualités)"},{"title":"LVA (La Vie de l'Auto)"},{"title":"Lyon Capitale"},{"title":"Lyon Mag"},{"title":"M le magazine le Monde"},{"title":"Madame Figaro"},{"title":"MadmoiZelle"},{"title":"Magazine Litteraire"},{"title":"Magic maman"},{"title":"Magic Patch"},{"title":"Magic RPM"},{"title":"Magville"},{"title":"Mains Et Merveilles"},{"title":"Maison & Travaux"},{"title":"Maison Bricolage Et Decoration"},{"title":"Maison créative"},{"title":"Maison Française"},{"title":"Maison Magazine"},{"title":"Maisons Cote Est"},{"title":"Maisons Cote Ouest"},{"title":"Maisons Cote Sud"},{"title":"Management"},{"title":"Manière de voir"},{"title":"Manon"},{"title":"Marca"},{"title":"Marianne"},{"title":"Marie Claire"},{"title":"Marie Claire Idées"},{"title":"Marie Claire Maison"},{"title":"Marie France"},{"title":"Marketing Direct"},{"title":"Marketing Magazine"},{"title":"Marmiton"},{"title":"Massif Central"},{"title":"Mastermind"},{"title":"Match"},{"title":"Maxi"},{"title":"Maxi Basket"},{"title":"Maximoto"},{"title":"Médiapart"},{"title":"Mediapart"},{"title":"Medias"},{"title":"Men S Health"},{"title":"Mes Premiers J'Aime Lire"},{"title":"Mieux Reussir Aux Courses"},{"title":"Mieux Vivre Votre Argent"},{"title":"Modes Et Travaux"},{"title":"Mon Jardin Et Ma Maison"},{"title":"Monnaie magazine"},{"title":"Montagnes Magazine"},{"title":"Moteur Boat"},{"title":"Moto Crampons"},{"title":"Moto et Motards"},{"title":"Moto Journal"},{"title":"Moto Magazine"},{"title":"Mots Croises Magazine/mots Fleches"},{"title":"Mozaïc"},{"title":"National Géographic"},{"title":"National Geographic France"},{"title":"National géographic litle kids"},{"title":"Nature"},{"title":"Nature Trail"},{"title":"NéoSanté"},{"title":"Nez - La revue olfactive"},{"title":"Nice Matin"},{"title":"Nord Eclair"},{"title":"Objectif grand Paris"},{"title":"Okapi"},{"title":"Onze Mondial"},{"title":"Opportunites- La Lettre De Boursier.com Privileges"},{"title":"Ouest France"},{"title":"P'tit Loup Le Magazine Qui Dit Tout Surtout"},{"title":"Papoum"},{"title":"Parents"},{"title":"Paris Match"},{"title":"Paris Normandie"},{"title":"Passion rando"},{"title":"Patrimoine Normand"},{"title":"Paulette"},{"title":"Paysage Actualités"},{"title":"Pc Achat"},{"title":"Pc hardware"},{"title":"Pc update"},{"title":"Pèlerin Magazine"},{"title":"Petites Mains"},{"title":"Philosophie Magazine"},{"title":"Pianiste"},{"title":"Plantes et Santé"},{"title":"Playboy"},{"title":"Pokemon Le Magazine Officiel"},{"title":"Polka Magazine"},{"title":"Pomme d'api"},{"title":"Pour la science"},{"title":"Pratique Des Arts"},{"title":"Presse locale"},{"title":"Presse-Océan"},{"title":"Prima (format Poche)"},{"title":"Prima Maison"},{"title":"Psycho Enfants"},{"title":"Psychologies Magazine"},{"title":"Pyrénées Magazine"},{"title":"QG Gentlemen's Quartely"},{"title":"Raids"},{"title":"Rebelle santé"},{"title":"Régal"},{"title":"Reporters sans Frontières"},{"title":"Retro Gamer Collection"},{"title":"Revue archéologique"},{"title":"Ricardo"},{"title":"Road Runner"},{"title":"RockyRama"},{"title":"Running Attitude"},{"title":"Rustica"},{"title":"Santé magazine"},{"title":"Santé Naturelle"},{"title":"Saveurs"},{"title":"Saveurs Thermomix"},{"title":"Sciences Et Avenir"},{"title":"Sciences Humaines"},{"title":"Skieur Magazine"},{"title":"Slate"},{"title":"Socialter"},{"title":"Sport Auto"},{"title":"STRADA"},{"title":"Strategies"},{"title":"Subaqua"},{"title":"Supply Chain Magazine"},{"title":"Svm Mac"},{"title":"Tatouage Magazine"},{"title":"Technikart"},{"title":"Télé 2 Semaines"},{"title":"Télé Cable Sat"},{"title":"Télé Magazine"},{"title":"Télé Star"},{"title":"Télé Star Jeux"},{"title":"Télé Tnt Programme"},{"title":"Telerama"},{"title":"Tendances Couture"},{"title":"Tennis Magazine"},{"title":"Terra Eco"},{"title":"Terre Sauvage"},{"title":"The Africa Report"},{"title":"The Business of Fashion"},{"title":"The conversation"},{"title":"The Guardian"},{"title":"Theatral Magazine"},{"title":"Thrasher Magazine"},{"title":"Thuriès Magazine"},{"title":"Toboggan"},{"title":"Today In English"},{"title":"Top Sante"},{"title":"TourMaG"},{"title":"Tractorama"},{"title":"Trails"},{"title":"Tralalire"},{"title":"Transfuge"},{"title":"Travail & Sécurité"},{"title":"Trax"},{"title":"Trek Magazine"},{"title":"Trente Millions D Amis"},{"title":"Trial Magazine"},{"title":"Triathlete"},{"title":"TV Grandes Chaînes"},{"title":"Tv magazine"},{"title":"Urbanisme"},{"title":"Usbek & Rica"},{"title":"Valeurs Actuelles"},{"title":"Vanity Fair"},{"title":"Var Matin"},{"title":"Veggie Magazine"},{"title":"Veir Magazine"},{"title":"Vélo Magazine"},{"title":"Vélo Tout Terrain"},{"title":"Version Femina"},{"title":"Vestiaires"},{"title":"Vie Pratique Gourmand"},{"title":"Ville, Rails & Transports"},{"title":"Virage"},{"title":"Vital Food"},{"title":"Vivre Coté Paris"},{"title":"Vocable Allemand"},{"title":"Vocable Anglais"},{"title":"Vocable Espagnol"},{"title":"Vogue France"},{"title":"Voila"},{"title":"Vosges Matin"},{"title":"Votre Beaute"},{"title":"Vous et votre Mac"},{"title":"VTT Magazine"},{"title":"WAD"},{"title":"Wakou"},{"title":"Wapiti"},{"title":"We demain"},{"title":"What Hi-fi"},{"title":"White Dwarf"},{"title":"Witch Mag"},{"title":"WW (Weight Watchers)"},{"title":"Yam"},{"title":"Yoga Magazine"},{"title":"Youpi j'ai compris"},{"title":"Zadig"},{"title":"Autre, précisez"}];

  quelest = [{"title":"Aucun"},{"title":"Alice"},{"title":"Alsatis"},{"title":"AMBSE"},{"title":"Can'L"},{"title":"Comcable"},{"title":"Darty"},{"title":"Europasat"},{"title":"Eutelsat"},{"title":"La Poste Mobile"},{"title":"Monaco Telecom"},{"title":"Nautile"},{"title":"Numericable"},{"title":"Orange"},{"title":"Planet Campus"},{"title":"Régie municipale"},{"title":"Sat2Way"},{"title":"Vialis"},{"title":"Autre, précisez"}];

  phoneMobile = [{"title":"Aucun"},{"title":"Afone"},{"title":"Alphalink"},{"title":"Auchan Telecom"},{"title":"Bazil télécom"},{"title":"Carrefour"},{"title":"Casino Mobile"},{"title":"Estvideo numericable"},{"title":"Fnac mobile"},{"title":"Je n'ai pas de téléphone mobile"},{"title":"La French Mobile"},{"title":"La Poste mobile"},{"title":"Lebara"},{"title":"Lycamobile"},{"title":"Monaco Telecom"},{"title":"Numericable"},{"title":"Orange"},{"title":"Paritel"},{"title":"Sewan Communications"},{"title":"Sosh - Orange"},{"title":"Syma Mobile"},{"title":"Symacom"},{"title":"Transatel"},{"title":"Universal Mobile"},{"title":"Vialis"},{"title":"Vodafone"},{"title":"Zyma"},{"title":"Autre, précisez"}];
  
  constructor(public formData: FormData, public allFormData: FormData,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedQuelles = this.allFormData.MEDIA.selectedQuelles;
    this.selectedavezVvous = this.allFormData.MEDIA.selectedavezVvous;
    this.selectedquelsMagazines = this.allFormData.MEDIA.selectedquelsMagazines;
    this.selectedQuelest = this.allFormData.MEDIA.selectedQuelest;
    this.selectedMobile = this.allFormData.MEDIA.selectedMobile;
    this.marqueDeVotreTelephonePortablePersonnel = this.allFormData.MEDIA.marqueDeVotreTelephonePortablePersonnel;
  }
  setselectedQuelles(event: any){
    this.selectedQuelles = event;
  }
  setselectedavezVvous(event: any){
    this.selectedavezVvous = event;
  }
  setselectedquelsMagazines(event: any){
    this.selectedquelsMagazines = event;
  }
  setselectedQuelest(event: any){
    this.selectedQuelest = event;
  }
  setselectedMobile(event: any){
    this.selectedMobile = event;
  }
  setMarqueDeVotreTelephonePortablePersonnel(event: any){
    this.marqueDeVotreTelephonePortablePersonnel = event.target.value;
  }
  saveFormData(){
    this.allFormData.MEDIA.selectedQuelles = this.selectedQuelles;
    this.allFormData.MEDIA.selectedavezVvous = this.selectedavezVvous;
    this.allFormData.MEDIA.selectedquelsMagazines = this.selectedquelsMagazines;
    this.allFormData.MEDIA.selectedQuelest = this.selectedQuelest;
    this.allFormData.MEDIA.selectedMobile = this.selectedMobile;
    this.allFormData.MEDIA.marqueDeVotreTelephonePortablePersonnel = this.marqueDeVotreTelephonePortablePersonnel;
    this.pageName.emit('DAY_TO_DAY');
  }

  back(){
    this.pageName.emit('LODGING');
  }
}
