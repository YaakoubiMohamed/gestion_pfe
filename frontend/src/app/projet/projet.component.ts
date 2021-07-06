import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../shared/services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets: any;

  constructor(private projetService:ProjetService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getProjets();
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

  add(){
    this.router.navigate(['/add-projet']);
  }


  delete(projet){
    this.projetService.deleteProjet(projet).subscribe(
      data => {
        console.log(data);
        this.getProjets();
      },
      error => console.log(error)
    );
  }


}
