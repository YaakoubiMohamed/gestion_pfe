import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../shared/services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignants: any;

  constructor(private userService:EnseignantService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getUsers();
      console.log(this.getUsers);
    }, 1000);
  }


  getUsers(): void {
    this.userService.getUsers()
        .subscribe(specialite => {
          this.enseignants = specialite["records"];
          this.enseignants = this.enseignants.filter(x=>{
            return x.grade == 'enseignant';
          })
          console.log('enseignants liste',this.enseignants);
        });
  }

  add(){
    this.router.navigate(['/add-enseignant']);
  }


  delete(user){
    this.userService.deleteUser(user).subscribe(
      data => {
        console.log(data);
        this.getUsers();
      },
      error => console.log(error)
    );
  }

}
