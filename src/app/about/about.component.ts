import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service' 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
// aboutimagepath:string="assets/images/app-screens-1200.png";

public Users = [];
  constructor(private userdetails:UsersService) { }

  ngOnInit() {
    this.Users=this.userdetails.getDetails();
  }
}
