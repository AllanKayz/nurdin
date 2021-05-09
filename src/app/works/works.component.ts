import { Component, OnInit, HostListener } from '@angular/core';
import { WebsitedataService } from '../services/websitedata.service'

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  headerVariable: any = false;
  public projects: any = [];
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
      this.projects = data.projects;
    });
  }
}
