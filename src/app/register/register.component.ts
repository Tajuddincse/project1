import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: any;
  regObj: any;
  constructor(private fb: FormBuilder, private router: Router, public firestore: AngularFirestore) { }

  ngOnInit(){
    this.firestore.collection('users').valueChanges().subscribe(resp=>{
      console.log(resp);
    });
    this.loginForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required ],
    });
  }

  submit(formData: any){
    if(this.loginForm.valid){
      const id = this.firestore.createId();
      const userData = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        contact: formData.contact,
        email: formData.email,
        password: formData.password,
        userId: id
      }
      this.regObj = this.firestore.doc<any>('ENQUETE-USERS/'+ id);
      this.regObj.set(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      this.router.navigateByUrl('/home');
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
