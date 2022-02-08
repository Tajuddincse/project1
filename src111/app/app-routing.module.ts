import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AVAILABILITYComponent } from './availability/availability.component';
import { CONSUMPTIONComponent } from './consumption/consumption.component';
import { DAYTODAYComponent } from './day-to-day/day-to-day.component';
import { LODGINGComponent } from './lodging/lodging.component';
import { MEDIAComponent } from './media/media.component';
import { MOBILITYComponent } from './mobility/mobility.component';
import { ORGANIZATIONSComponent } from './organizations/organizations.component';
import { PERSONALDATAComponent } from './personal-data/personal-data.component';
import { PROFESSIONALDATAComponent } from './professional-data/professional-data.component';
import { VARIOUSComponent } from './various/various.component';


const routes: Routes = [
  {path: '', redirectTo:'auth', pathMatch:'full'},
  {path: 'auth', component:AuthComponent, pathMatch:'full'},
  {path: 'home', component:HomeComponent, pathMatch:'full'},
  {path: 'register', component:RegisterComponent, pathMatch:'full'},
  {path: 'availibity', component:AVAILABILITYComponent, pathMatch:'full'},
  {path: 'consuption', component:CONSUMPTIONComponent, pathMatch:'full'},
  {path: 'day-to-day', component:DAYTODAYComponent, pathMatch:'full'},
  {path: 'lodging', component:LODGINGComponent, pathMatch:'full'},
  {path: 'media', component:MEDIAComponent, pathMatch:'full'},
  {path: 'mobility', component:MOBILITYComponent, pathMatch:'full'},
  {path: 'orginization', component:ORGANIZATIONSComponent, pathMatch:'full'},
  {path: 'personal-data', component:PERSONALDATAComponent, pathMatch:'full'},
  {path: 'professional-data', component:PROFESSIONALDATAComponent, pathMatch:'full'},
  {path: 'various', component:VARIOUSComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
