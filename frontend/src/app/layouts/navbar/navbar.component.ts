import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;

  constructor() {
    setInterval(()=>{
      this.user = JSON.parse(localStorage.getItem('user'));
    },500);

    
   }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }


}
