import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';
import { ProjetService } from 'src/app/shared/services/projet.service';
import { SoutenanceService } from '../../shared/services/soutenance.service';

@Component({
  selector: 'app-add-soutenance',
  templateUrl: './add-soutenance.component.html',
  styleUrls: ['./add-soutenance.component.css']
})
export class AddSoutenanceComponent implements OnInit {

  addForm: FormGroup;
  now: Date;
  projets: any;
  enseignants: any;

  constructor(private userService:EnseignantService,private projetService:ProjetService,private fb: FormBuilder, private router: Router,private projetservice: SoutenanceService) { }

  ngOnInit(): void {
    this.now = new Date();
    this.addForm = this.fb.group({
      date: [''],
      projet_id: [''],
      salle: [''],
      president_id: [''],
      rapporteur_id: [''],
      examinateur_id: [''],
    });
    setTimeout(() => {
      this.getProjets();
      this.getUsers();
      console.log(this.getProjets);
    }, 1000);
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

  add(){
    console.log(this.addForm.value);
    this.projetservice.createSoutenance(this.addForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
    //this.router.navigate(['/soutenance'])  ;
  }
  annuler()
  {
    this.router.navigate(['/soutenance'])  ;
  }


}
