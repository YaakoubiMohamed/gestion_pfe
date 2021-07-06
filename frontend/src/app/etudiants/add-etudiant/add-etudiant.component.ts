import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private enseignantservice: EnseignantService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      password: [''],
      telephone: [''],
      grade:['etudiant']
    })
  }

  add(){
    this.enseignantservice.createUser(this.addForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/etudiants'])  ;
  }
  annuler()
  {
    this.router.navigate(['/etudiants'])  ;
  }

}
