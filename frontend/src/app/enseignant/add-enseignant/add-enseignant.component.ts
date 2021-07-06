import { EnseignantService } from '../../shared/services/enseignant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private enseignantservice: EnseignantService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      password: [''],
      telephone: [''],
      grade:['enseignant']
    })
  }

  add(){
    this.enseignantservice.createUser(this.addForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/enseignants'])  ;
  }
  annuler()
  {
    this.router.navigate(['/enseignants'])  ;
  }
}
