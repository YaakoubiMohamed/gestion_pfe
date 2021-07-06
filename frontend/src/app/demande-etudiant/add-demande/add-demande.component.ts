import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from '../../shared/services/demande.service';
import { EnseignantService } from '../../shared/services/enseignant.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {

  addForm: FormGroup;
  now: Date;
  user: any;
  enseignants: any;

  constructor(private userService:EnseignantService,private fb: FormBuilder, private router: Router,private projetservice: DemandeService) { }

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
    this.now = new Date();
    this.addForm = this.fb.group({
      date: [this.now],
      sujet: [''],
      etudiant_id: [this.user.id],
      encadreur_id: [''],
    })
  }

  add(){
    this.projetservice.createDemande(this.addForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/demande-etudiant'])  ;
  }
  annuler(){
    this.router.navigate(['/demande-etudiant'])  ;
  }



}
