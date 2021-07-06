import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../shared/services/enseignant.service';
import { ProjetService } from '../shared/services/projet.service';
import { SoutenanceService } from '../shared/services/soutenance.service';

@Component({
  selector: 'app-soutenance',
  templateUrl: './soutenance.component.html',
  styleUrls: ['./soutenance.component.css']
})
export class SoutenanceComponent implements OnInit {

  soutenances: any;
  projets: any;
  enseignants: any;

  constructor(private userService:EnseignantService,private projetService:ProjetService,private soutenanceService:SoutenanceService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getSoutenances();
      this.getProjets();
      this.getUsers();
      console.log(this.getSoutenances);
    }, 1000);
  }


  getSoutenances(): void {
    this.soutenanceService.getSoutenances()
        .subscribe(specialite => {
          this.soutenances = specialite["records"];         
          console.log('soutenances liste',this.soutenances);
        });
  }
  getProjets(): void {
    this.projetService.getProjets()
        .subscribe(specialite => {
          this.projets = specialite["records"];
          console.log('projets liste',this.projets);
        });
  }


  getUsers(): void {
    this.userService.getUsers()
        .subscribe(specialite => {
          this.enseignants = specialite["records"];
          this.enseignants = this.enseignants.filter(x=>{
            return x.grade == 'enseignant';
          })
          console.log('enseignants liste',this.enseignants);
        });
  }

  edit(soutenance){
    localStorage.setItem('soutenance',JSON.stringify(soutenance));
    this.router.navigate(['/edit-soutenance']);
  }


  delete(soutenance){
    this.soutenanceService.deleteSoutenance(soutenance).subscribe(
      data => {
        console.log(data);
        this.getSoutenances();
      },
      error => console.log(error)
    );
  }

}
