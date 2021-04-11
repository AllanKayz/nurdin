import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsitedataService } from '../services/websitedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public projects: any = [];

  constructor(private router: Router, private websiteData: WebsitedataService) { }

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      let arrayEndPos = data.projects.length;
      let thirdPosFromEnd = data.projects.length - 3;
      this.projects = data.projects.slice(thirdPosFromEnd, arrayEndPos);
    });
  }

  showWork() {
    this.router.navigate(['portfolio']);
  }
}
