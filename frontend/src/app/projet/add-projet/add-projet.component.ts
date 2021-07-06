import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/shared/services/projet.service';
import { EnseignantService } from '../../shared/services/enseignant.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  addForm: FormGroup;
  enseignants: any;
  user: any;

  constructor(private userService:EnseignantService,private fb: FormBuilder, private router: Router,private projetservice: ProjetService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userService.getUsers()
    .subscribe(specialite => {
      this.enseignants = specialite["records"];
      this.enseignants = this.enseignants.filter(x=>{
        return x.grade == 'enseignant';
      })
      console.log('enseignants liste',this.enseignants);
    });
    this.addForm = this.fb.group({
      nom: [''],
      description: [''],
      user_id: [this.user.id],
    })
  }

  add(){
    this.projetservice.createProjet(this.addForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/projets'])  ;
  }
  annuler(){
    this.router.navigate(['/projets'])  ;
  }

}
