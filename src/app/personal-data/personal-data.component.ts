import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PERSONALDATAComponent implements OnInit {

  contactForm: any;

  @Output() pageName = new EventEmitter<string>();

  constructor(public formData: FormData, public allFormData: FormData,private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
    VotrePays: [this.allFormData.PERSONAL_DATA.VotrePays],
    VotreNiveau: [this.allFormData.PERSONAL_DATA.VotreNiveau],
    VotreSituation: [this.allFormData.PERSONAL_DATA.VotreSituation],
    CombienDenfants: [this.allFormData.PERSONAL_DATA.CombienDenfants],
    AttendezVous: [this.allFormData.PERSONAL_DATA.AttendezVous],
    CombienEnfants: [this.allFormData.PERSONAL_DATA.CombienEnfants],
    })

  }

  submit(formData: any){
    this.allFormData.PERSONAL_DATA.VotrePays = formData.VotrePays;
    this.allFormData.PERSONAL_DATA.VotreNiveau = formData.VotreNiveau;
    this.allFormData.PERSONAL_DATA.VotreSituation = formData.VotreSituation;
    this.allFormData.PERSONAL_DATA.CombienDenfants = formData.CombienDenfants;
    this.allFormData.PERSONAL_DATA.AttendezVous = formData.AttendezVous;
    this.allFormData.PERSONAL_DATA.CombienEnfants = formData.CombienEnfants;
    this.pageName.emit('LODGING');
  }

  back(){
    this.pageName.emit('PROFESSIONAL_DATA');
  }
}
