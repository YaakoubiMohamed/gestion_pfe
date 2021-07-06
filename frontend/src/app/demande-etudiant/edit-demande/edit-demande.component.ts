import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from '../../shared/services/demande.service';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {

  addForm: FormGroup;
  now: Date;
  demande: any;

  constructor(private fb: FormBuilder, private router: Router,private projetservice: DemandeService) { }

  ngOnInit(): void {
    this.now = new Date();
    this.demande = JSON.parse(localStorage.getItem('demande'));
    this.addForm = this.fb.group({
      date: [this.now],
      sujet: [this.demande.sujet],
      etudiant_id: [this.demande.etudiant_id],
      encadreur_id: [this.demande.encadreur_id],
    })
  }

  add(){
    this.projetservice.updateDemande(this.demande.id,this.addForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
    //this.router.navigate(['/projets'])  ;
  }

}
