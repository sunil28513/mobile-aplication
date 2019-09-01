import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbanner',
  templateUrl: './mainbanner.component.html',
  styleUrls: ['./mainbanner.component.css']
})
export class MainbannerComponent implements OnInit {
  iphoneimg:string="assets/images/iphone-app-470.png";

  // Sociall icons
  // socialIcon=[
  //   {facebook:"fa-facebook-square"}, 
  //   {twitter:"fa-twitter"},
  //   {instagram:"fa-instagram"},
  //   {youtube:"fa-youtube-play"}
  // ]

  constructor() { }

  ngOnInit() {
  }

}
