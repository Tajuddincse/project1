import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  @Input() userData: any;
  obj: any;
  userObj: any;
  constructor(private route: ActivatedRoute,
    public allFormData: FormData,
    private router: Router,
    public firestore: AngularFirestore) {}

  ngOnInit(): void {}

  viewDetails(userId: any){
    this.firestore.collection('ENQUETE-USERS-DATA', ref => ref.where('userId', '==', userId)).valueChanges().subscribe(response=>{
      if(response.length > 0){
        this.obj = response;
        this.userObj = JSON.parse(this.obj[0]['userData']);
        this.allFormData.CONTACT_DETAILS = this.userObj.CONTACT_DETAILS;
        this.allFormData.PROFESSIONAL_DATA = this.userObj.PROFESSIONAL_DATA;
        this.allFormData.PERSONAL_DATA = this.userObj.PERSONAL_DATA;
        this.allFormData.LODGING = this.userObj.LODGING;
        this.allFormData.MEDIA = this.userObj.MEDIA;
        this.allFormData.DAY_TO_DAY = this.userObj.DAY_TO_DAY;
        this.allFormData.MOBILITY = this.userObj.MOBILITY;
        this.allFormData.ORGANIZATIONS = this.userObj.ORGANIZATIONS;
        this.allFormData.CONSUMPTION = this.userObj.CONSUMPTION;
        this.allFormData.VARIOUS = this.userObj.VARIOUS;
        this.allFormData.AVAILABILITY = this.userObj.AVAILABILITY;
        this.router.navigateByUrl('/home');
      } else {
        alert('No record found');
      }
    });
  }

}
