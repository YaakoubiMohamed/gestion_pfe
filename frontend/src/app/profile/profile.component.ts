import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: string;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
