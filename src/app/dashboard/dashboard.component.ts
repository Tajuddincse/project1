import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  obj: any;
  userData: any;
  constructor(private router: Router, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.obj  = localStorage.getItem('userData');
    var dataVal = JSON.parse(this.obj);
    if(!dataVal.isAdmin){
      this.router.navigateByUrl('/home');
    }
  }

  viewSubmitedForm(){
    this.firestore.collection('ENQUETE-USERS', ref => ref.where('isAdmin', '==', false)).valueChanges().subscribe(response=>{
      if(response.length > 0){
        this.userData = response;
      } else {
        alert('No record found');
      }
    });
  }

}
