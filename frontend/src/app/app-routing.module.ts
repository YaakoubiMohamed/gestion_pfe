import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { SoutenanceComponent } from './soutenance/soutenance.component';
import { DemandeComponent } from './demande/demande.component';
import { ProjetComponent } from './projet/projet.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { LoginComponent } from './login/login.component';
import { AddEnseignantComponent } from './enseignant/add-enseignant/add-enseignant.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { AddDemandeComponent } from './demande-etudiant/add-demande/add-demande.component';
import { EditDemandeComponent } from './demande-etudiant/edit-demande/edit-demande.component';
import { AddSoutenanceComponent } from './soutenance/add-soutenance/add-soutenance.component';
import { EditSoutenanceComponent } from './soutenance/edit-soutenance/edit-soutenance.component';
import { AddEtudiantComponent } from './etudiants/add-etudiant/add-etudiant.component';
import { DemandeEtudiantComponent } from './demande-etudiant/demande-etudiant.component';
import { AddEntrepriseComponent } from './entreprise/add-entreprise/add-entreprise.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'',component:LayoutsComponent,
  children:[
    {path:'home', component:HomeComponent},
    {path:'profile', component:ProfileComponent},
    {path:'enseignants', component:EnseignantComponent},
    {path:'add-enseignant', component:AddEnseignantComponent},
    {path:'add-entreprise', component:AddEntrepriseComponent},
    {path:'entreprise', component:EntrepriseComponent},
    {path:'etudiants', component:EtudiantsComponent},
    {path:'projets', component:ProjetComponent},
    {path:'add-projet', component:AddProjetComponent},
    {path:'add-demande', component:AddDemandeComponent},
    {path:'edit-demande', component:EditDemandeComponent},
    {path:'demandes', component:DemandeComponent},
    {path:'demande-etudiant', component:DemandeEtudiantComponent},
    {path:'soutenance', component:SoutenanceComponent},
    {path:'add-soutenance', component:AddSoutenanceComponent},
    {path:'add-etudiant', component:AddEtudiantComponent},
    {path:'edit-soutenance', component:EditSoutenanceComponent}
  ]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
