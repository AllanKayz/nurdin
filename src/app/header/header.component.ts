import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public faBars = faBars;
  @ViewChild('homeLink') homeLink: any;
  @ViewChild('aboutLink') aboutLink: any;
  @ViewChild('portfolioLink') portfolioLink: any;
  @ViewChild('contactLink') contactLink: any;
  @ViewChild('logo') logo: any;
  headerVariable: any = false;
  @HostListener('document:scroll') scrollfunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
      this.homeLink.nativeElement.classList.remove('text-white');
      this.aboutLink.nativeElement.classList.remove('text-white');
      this.portfolioLink.nativeElement.classList.remove('text-white');
      this.contactLink.nativeElement.classList.remove('text-white');
      this.logo.nativeElement.classList.remove('hide');
    }
    else {
      this.headerVariable = false;
      this.homeLink.nativeElement.classList.add('text-white');
      this.aboutLink.nativeElement.classList.add('text-white');
      this.portfolioLink.nativeElement.classList.add('text-white');
      this.contactLink.nativeElement.classList.add('text-white');
      this.logo.nativeElement.classList.add('hide');
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
