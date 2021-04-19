import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgxTypedJsComponent } from 'ngx-typed-js';
import { WebsitedataService } from '../services/websitedata.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // @ViewChild(NgxTypedJsComponent) typed: any;
  public projects: any = [];

  constructor(private router: Router, private websiteData: WebsitedataService) {
    // super();
  }

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      const arrayEndPos = data.projects.length;
      const thirdPosFromEnd = data.projects.length - 3;
      this.projects = data.projects.slice(thirdPosFromEnd, arrayEndPos);
    });
  }

  ngAfterViewInit(): void {
    let typed = new Typed('.typed-words', {
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
}
