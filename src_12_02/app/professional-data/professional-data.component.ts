import { Component, OnInit } from '@angular/core';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-professional-data',
  templateUrl: './professional-data.component.html',
  styleUrls: ['./professional-data.component.css']
})
export class PROFESSIONALDATAComponent implements OnInit {
  // companySecondryBank = [
  //   { id: 1, name: 'Banco Borges' },
  //   { id: 2, name: 'Caisse Epargne'},
  //   { id: 3, name: 'Crédit Agricole' },
  //   { id: 4, name: 'ING Direct' },
  //   { id: 4, name: 'Orange Bank' },
  //   { id: 4, name: 'Société Générale' },
  //   { id: 4, name: 'Autre, précisez' },
  // ];

  constructor(public formData: FormData) {
    console.log(JSON.stringify(formData));
   }

  ngOnInit(): void {
  }

}
