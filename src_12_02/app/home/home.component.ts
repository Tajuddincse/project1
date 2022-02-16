import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormData} from '../model/form-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentPage = 'CONTACT_DETAILS';
  constructor(private router: Router, public allFormData: FormData) {

    if(!localStorage.getItem('userData')){
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
  }

  changeMenu(tabs: string){
    this.currentPage = tabs;
  }

}
