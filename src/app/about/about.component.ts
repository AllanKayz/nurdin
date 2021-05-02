import { Component, OnInit, HostListener } from '@angular/core';
import { WebsitedataService } from '../services/websitedata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name: any;
  public lastname: any;
  public alterego: any;
  public aboutmyself: any;
  headerVariable: any = false;

  @HostListener('document:scroll') scrollfunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
    }
    else {
      this.headerVariable = false;
    }
  }

  constructor(private websiteData: WebsitedataService) { }

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      this.name = data.profile[0].name;
      this.alterego = data.profile[0].alterego;
      this.aboutmyself = data.profile[0].aboutme;
    });
  }
}
