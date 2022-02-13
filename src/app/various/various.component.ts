import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-various',
  templateUrl: './various.component.html',
  styleUrls: ['./various.component.css']
})
export class VARIOUSComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();
  sensibilitePolitique: any;
  quePensezVous: any;
  aupresDeQuel: any;
  commentAvezAous: any;
  sibesoin: any;

  constructor(public allFormData: FormData) { }

  ngOnInit(){
    this.sensibilitePolitique = this.allFormData.VARIOUS.sensibilitePolitique;
    this.quePensezVous = this.allFormData.VARIOUS.quePensezVous;
    this.aupresDeQuel = this.allFormData.VARIOUS.aupresDeQuel;
    this.commentAvezAous = this.allFormData.VARIOUS.commentAvezAous;
    this.sibesoin = this.allFormData.VARIOUS.sibesoin;
  }
  setSensibilitePolitique(event: any){
    this.sensibilitePolitique = event.target.value;
  }
  setQuePensezVous(event: any){
    this.quePensezVous = event.target.value;
  }

  back(){
    this.pageName.emit('CONSUMPTION');
  }
 
  saveForm(){
    this.allFormData.VARIOUS.sensibilitePolitique = this.sensibilitePolitique;
    this.allFormData.VARIOUS.quePensezVous = this.quePensezVous;
    this.allFormData.VARIOUS.aupresDeQuel = this.aupresDeQuel;
    this.allFormData.VARIOUS.commentAvezAous = this.commentAvezAous;
    this.allFormData.VARIOUS.sibesoin = this.sibesoin;
    this.pageName.emit('AVAILABILITY');
  }

}
