import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../shared/services/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  demandes: any;

  constructor(private demandeService:DemandeService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getDemandes();
      console.log(this.getDemandes);
    }, 1000);
  }


  getDemandes(): void {
    this.demandeService.getDemandes()
        .subscribe(specialite => {
          this.demandes = specialite["records"];
          console.log('demandes liste',this.demandes);
        });
  }

  add(){
    this.router.navigate(['/add-demande']);
  }


  delete(demande){
    this.demandeService.deleteDemande(demande).subscribe(
      data => {
        console.log(data);
        this.getDemandes();
      },
      error => console.log(error)
    );
  }

}
