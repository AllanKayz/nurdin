import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { faFacebook } from '@fortawesome/free-brands-svg';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

  letsTalk() {
    return window.location.href = 'https://wa.me/26726683369?text=%20Just%20Viewed%20Your%20Profile%20Thought%20We%20Should%20Talk%20More';
  }

}
