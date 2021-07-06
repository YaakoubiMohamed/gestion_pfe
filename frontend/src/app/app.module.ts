import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjetComponent } from './projet/projet.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';
import { SoutenanceComponent } from './soutenance/soutenance.component';
import { DemandeComponent } from './demande/demande.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { DemandeEtudiantComponent } from './demande-etudiant/demande-etudiant.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { LoginComponent } from './login/login.component';
import { AddDemandeComponent } from './demande-etudiant/add-demande/add-demande.component';
import { EditDemandeComponent } from './demande-etudiant/edit-demande/edit-demande.component';
import { EditProjetComponent } from './projet/edit-projet/edit-projet.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { EditSoutenanceComponent } from './soutenance/edit-soutenance/edit-soutenance.component';
import { AddSoutenanceComponent } from './soutenance/add-soutenance/add-soutenance.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEnseignantComponent } from './enseignant/add-enseignant/add-enseignant.component';
import { JwtInterceptor } from './shared/services/jwt.interceptor';
import { AuthService } from './shared/services/auth.service';
import { JarwisService } from './shared/services/jarwis.service';
import { TokenService } from './shared/services/token.service';
import { AddEtudiantComponent } from './etudiants/add-etudiant/add-etudiant.component';
import { AddEntrepriseComponent } from './entreprise/add-entreprise/add-entreprise.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    ProjetComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    SoutenanceComponent,
    DemandeComponent,
    EtudiantsComponent,
    DemandeEtudiantComponent,
    ProfileComponent,
    UpdateProfileComponent,
    LoginComponent,
    AddDemandeComponent,
    EditDemandeComponent,
    EditProjetComponent,
    EditProfileComponent,
    EditSoutenanceComponent,
    AddSoutenanceComponent,
    EnseignantComponent,
    EntrepriseComponent,
    AddEnseignantComponent,
    AddEtudiantComponent,
    AddEntrepriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    HttpClient,
    JarwisService,TokenService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
