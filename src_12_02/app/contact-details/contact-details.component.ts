import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import {FormData} from '../../app/model/form-data';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class CONTACTDETAILSComponent implements OnInit {
  contactForm: any;
  constructor(private fb: FormBuilder,
    public allFormData: FormData,
    public firestore: AngularFirestore) { }

  ngOnInit(){
    this.contactForm = this.fb.group({
      Lastname: [this.allFormData.CONTACT_DETAILS.Lastname, Validators.required],
      Firstname: [this.allFormData.CONTACT_DETAILS.Firstname, Validators.required ],
      Sex: [this.allFormData.CONTACT_DETAILS.Sex, Validators.required ],
      Your_date_of_birth: [this.allFormData.CONTACT_DETAILS.Your_date_of_birth, Validators.required ],
      Address: [this.allFormData.CONTACT_DETAILS.Address, Validators.required ],
      Postal_code: [this.allFormData.CONTACT_DETAILS.Postal_code, Validators.required ],
      Ville: [this.allFormData.CONTACT_DETAILS.Ville, Validators.required ],
      Adresse_Email: [this.allFormData.CONTACT_DETAILS.Adresse_Email, Validators.required ],
      Téléphone: [this.allFormData.CONTACT_DETAILS.Téléphone, Validators.required ],
      Téléphone_portable: [this.allFormData.CONTACT_DETAILS.Téléphone_portable, Validators.required ],
      Email_professionnel: [this.allFormData.CONTACT_DETAILS.Email_professionnel, Validators.required ],
      fixe_professionnel: [this.allFormData.CONTACT_DETAILS.fixe_professionnel, Validators.required ],
      mobile_professionnel: [this.allFormData.CONTACT_DETAILS.mobile_professionnel, Validators.required ],
    });
  }

  submit(formData: any){
    if(this.contactForm.valid){
      this.allFormData.CONTACT_DETAILS.Lastname = formData.Lastname;
      this.allFormData.CONTACT_DETAILS.Firstname = formData.Firstname;
      this.allFormData.CONTACT_DETAILS.Sex = formData.Sex;
      this.allFormData.CONTACT_DETAILS.Your_date_of_birth = formData.Your_date_of_birth;
      this.allFormData.CONTACT_DETAILS.Address = formData.Address;
      this.allFormData.CONTACT_DETAILS.Postal_code = formData.Postal_code;
      this.allFormData.CONTACT_DETAILS.Ville = formData.Ville;
      this.allFormData.CONTACT_DETAILS.Adresse_Email = formData.Adresse_Email;
      this.allFormData.CONTACT_DETAILS.Téléphone = formData.Téléphone;
      this.allFormData.CONTACT_DETAILS.Téléphone_portable = formData.Téléphone_portable;
      this.allFormData.CONTACT_DETAILS.Email_professionnel = formData.Email_professionnel;
      this.allFormData.CONTACT_DETAILS.fixe_professionnel = formData.fixe_professionnel;
      this.allFormData.CONTACT_DETAILS.mobile_professionnel = formData.mobile_professionnel;
    } else {
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
