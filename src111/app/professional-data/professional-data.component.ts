import { Component, OnInit } from '@angular/core';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-professional-data',
  templateUrl: './professional-data.component.html',
  styleUrls: ['./professional-data.component.css']
})
export class PROFESSIONALDATAComponent implements OnInit {

  constructor(public formData: FormData) {
    console.log(JSON.stringify(formData));
   }

  ngOnInit(): void {
  }

}
