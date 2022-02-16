import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormData } from '../app/model/form-data';
import { CONTACTDETAILSComponent } from './contact-details/contact-details.component';
import { PROFESSIONALDATAComponent } from './professional-data/professional-data.component';
import { PERSONALDATAComponent } from './personal-data/personal-data.component';
import { LODGINGComponent } from './lodging/lodging.component';
import { MEDIAComponent } from './media/media.component';
import { DAYTODAYComponent } from './day-to-day/day-to-day.component';
import { MOBILITYComponent } from './mobility/mobility.component';
import { ORGANIZATIONSComponent } from './organizations/organizations.component';
import { CONSUMPTIONComponent } from './consumption/consumption.component';
import { VARIOUSComponent } from './various/various.component';
import { AVAILABILITYComponent } from './availability/availability.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    HomeComponent,
    CONTACTDETAILSComponent,
    PROFESSIONALDATAComponent,
    PERSONALDATAComponent,
    LODGINGComponent,
    MEDIAComponent,
    DAYTODAYComponent,
    MOBILITYComponent,
    ORGANIZATIONSComponent,
    CONSUMPTIONComponent,
    VARIOUSComponent,
    AVAILABILITYComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NgSelectModule
  ],
  providers: [FormData],
  bootstrap: [AppComponent]
})
export class AppModule { }
