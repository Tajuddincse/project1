import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {FormData} from '../model/form-data';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: any;
  isError: boolean = false;
  constructor(private fb: FormBuilder,
     private router: Router,
     public allFormData: FormData,
     public firestore: AngularFirestore) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required ],
    });
  }

  submit(formData: any){
    if(this.loginForm.valid){
      const userData = {
        email: formData.email,
        password: formData.password
      }
      this.firestore.collection('ENQUETE-USERS', ref => ref.where('email', '==', formData.email).where('password', '==', formData.password)).valueChanges().subscribe(response=>{
        if(response.length > 0){
          localStorage.setItem('userData', JSON.stringify(response[0]));
          this.router.navigateByUrl('/home');
        } else {
          this.isError = true;
          setTimeout(()=>{
            this.isError = false;
          }, 3000);
        }
      });
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
