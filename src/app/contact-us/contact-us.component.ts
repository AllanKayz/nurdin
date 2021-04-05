import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

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
