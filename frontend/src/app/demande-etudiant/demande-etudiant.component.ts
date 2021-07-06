import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../shared/services/demande.service';
import { EnseignantService } from '../shared/services/enseignant.service';

@Component({
  selector: 'app-demande-etudiant',
  templateUrl: './demande-etudiant.component.html',
  styleUrls: ['./demande-etudiant.component.css']
})
export class DemandeEtudiantComponent implements OnInit {

  demandes: any;
  users: any;

  constructor(private userService:EnseignantService,private demandeService:DemandeService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getDemandes();
      this.getUsers()
      console.log(this.getDemandes);
    }, 1000);
  }
  getUsers(): void {
    this.userService.getUsers()
        .subscribe(specialite => {
          this.users = specialite["records"];
          
          console.log('enseignants liste',this.users);
        });
  }


  getDemandes(): void {
    this.demandeService.getDemandes()
        .subscribe(specialite => {
          this.demandes = specialite["records"];
          console.log('demandes liste',this.demandes);
        });
  }

  add(){
    this.router.navigate(['/add-demande']);
  }


  delete(demande){
    this.demandeService.deleteDemande(demande).subscribe(
      data => {
        console.log(data);
        this.getDemandes();
      },
      error => console.log(error)
    );
  }


}
