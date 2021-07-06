import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private enseignantservice: EnseignantService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      password: [''],
      telephone: [''],
      departement: [''],
      grade:['entreprise'],
      nom_en: [''],
      telephone_en: [''],
      adresse_en: [''],
    })
  }

  add(){
    this.enseignantservice.createUser(this.addForm.value)
    .subscribe(data => {
      console.log(data['status'].id);
      let record={};
      record['nom']= this.addForm.value.nom_en;
      record['adresse']= this.addForm.value.adresse_en;
      record['telephone']= this.addForm.value.telephone_en;
      record['user_id']=data['status'].id;
      console.log(record);
      this.enseignantservice.createEntreprise(record)
      .subscribe(res => {
        console.log(res)
      }, error => console.log(error));
      console.log(data)
    }, error => console.log(error));
    //this.router.navigate(['/entreprise'])  ;
  }
  annuler()
  {
    this.router.navigate(['/entreprise'])  ;
  }

}
