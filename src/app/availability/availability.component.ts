import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AVAILABILITYComponent implements OnInit {
  slotList: any = [];
  constructor() { }

  ngOnInit(): void {

  }

  setValue(slot: string){
    if(this.slotList.indexOf(slot) == -1){
      this.slotList.push(slot);
    } else if(this.slotList.indexOf(slot) > -1){
      const index = this.slotList.indexOf(slot);
      this.slotList.splice(index, 1);
    }
    console.log(JSON.stringify(this.slotList));
  }
  checkNotInArray(slot: string){
    if(this.slotList.indexOf(slot) > -1){
      return true;
    } else {
      return false;
    }
  }
}
