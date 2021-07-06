import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../shared/services/enseignant.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entreprises: any;
  infos: any;

  constructor(private userService:EnseignantService,private entrepriseService:EnseignantService, private router:Router) { }

  ngOnInit() {
    //setTimeout(() => {
      this.getUsers();
      this.getEntreprise();
      console.log(this.getUsers);
    //}, 1000);
  }


  getUsers(): void {
    this.userService.getUsers()
        .subscribe(specialite => {
          this.entreprises = specialite["records"];
          this.entreprises = this.entreprises.filter(x=>{
            return x.grade == 'entreprise';
          })
          console.log('entreprises liste',this.entreprises);
        });
  }

  getEntreprise(): void {
    this.entrepriseService.getEntreprises()
        .subscribe(specialite => {
          this.infos = specialite["records"];
          
          console.log('entreprises liste',this.infos);
        });
  }

  add(){
    this.router.navigate(['/add-entreprise']);
  }


  delete(user){
    this.userService.deleteUser(user.id).subscribe(
      data => {
        console.log(data);
        this.getUsers();
      },
      error => console.log(error)
    );
  }

}
