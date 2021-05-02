import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsitedataService } from '../services/websitedata.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public projects: any = [];
  private typed: any;
  public mission: any = '';
  public values: any = '';
  public philosophy: any = '';
  public vision: any = '';
  public visualIdentity: any = '';
  public marketingMaterial: any = '';
  public productPackaging: any = '';
  public presentations: any = '';
  public shirtAndApparel: any = '';
  public reportsIllustrations: any = '';

  constructor(private router: Router, private websiteData: WebsitedataService) {
    // super();
  }

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      const arrayEndPos = data.projects.length;
      const thirdPosFromEnd = data.projects.length - 3;
      this.projects = data.projects.slice(thirdPosFromEnd, arrayEndPos);
      this.mission = data.statements[0].mission;
      this.values = data.statements[0].values;
      this.vision = data.statements[0].vision;
      this.philosophy = data.statements[0].philosophy;
      this.visualIdentity = data.services[0].visualIdentity;
      this.marketingMaterial = data.services[0].marketingMaterial;
      this.productPackaging = data.services[0].productPackaging;
      this.presentations = data.services[0].presentations;
      this.shirtAndApparel = data.services[0].shirtAndApparel;
      this.reportsIllustrations = data.services[0].reportsIllustrations;
    });
  }

  ngAfterViewInit(): void {
    this.typed = new Typed('.typed-words', {
      strings: ['Logo Design', 'Product Packaging', 'Marketing Material Design', 'Shirt and Apparel Design'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 4000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    });
  }

  showWork(): any {
    this.router.navigate(['portfolio']);
  }

  btnHireMe(): any {
    return window.location.href = 'https://wa.me/26726683369?text=%20Just%20Viewed%20Your%20Profile%20Thought%20We%20Should%20Talk%20More';
  }
}
