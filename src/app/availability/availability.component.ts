import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormData} from '../../app/model/form-data';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AVAILABILITYComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();
  slotList: any = [];
  regObj: any;
  obj: any;
  dataVal: any;
  constructor(public allFormData: FormData, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.slotList = this.allFormData.AVAILABILITY.slotList;
    this.obj  = localStorage.getItem('userData');
    this.dataVal = JSON.parse(this.obj);
  }

  setValue(slot: string){
    if(this.slotList.indexOf(slot) == -1){
      this.slotList.push(slot);
    } else if(this.slotList.indexOf(slot) > -1){
      const index = this.slotList.indexOf(slot);
      this.slotList.splice(index, 1);
    }
    this.allFormData.AVAILABILITY.slotList = this.slotList;
  }
  checkNotInArray(slot: string){
    if(this.slotList.indexOf(slot) > -1){
      return true;
    } else {
      return false;
    }
  }

  back(){
    this.pageName.emit('VARIOUS');
  }
 
  saveForm(){
    console.log(JSON.stringify(this.allFormData));
    const id = this.firestore.createId();
      const userDatas = {
        userData: JSON.stringify(this.allFormData),
        userId: this.dataVal.userId
      }
      console.log(JSON.stringify(userDatas));
      this.regObj = this.firestore.doc<any>('ENQUETE-USERS-DATA/'+ id);
      this.regObj.set(userDatas);
      if(this.regObj){
        alert('Form submitted');
       // window.location.reload();
      }
  }
}
