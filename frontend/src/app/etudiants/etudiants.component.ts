import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../shared/services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants: any;

  constructor(private etudiantService:EtudiantService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getEtudiants();
      console.log(this.getEtudiants);
    }, 1000);
  }

  add(){
    this.router.navigate(['/add-etudiant']);
  }


  getEtudiants(): void {
    this.etudiantService.getEtudiants()
        .subscribe(specialite => {
          this.etudiants = specialite["records"];
          this.etudiants = this.etudiants.filter(x=>{
            return x.grade == 'etudiant';
          })
          console.log('etudiants liste',this.etudiants);
        });
  }

 


  delete(etudiant){
    this.etudiantService.deleteEtudiant(etudiant).subscribe(
      data => {
        console.log(data);
        this.getEtudiants();
      },
      error => console.log(error)
    );
  }


}
