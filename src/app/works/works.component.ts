import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  headerVariable: any = false;

  @HostListener('document:scroll') scrollfunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
    }
    else {
      this.headerVariable = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
