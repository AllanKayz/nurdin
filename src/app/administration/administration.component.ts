import { Component, OnInit, ViewChild } from '@angular/core';
import { faBars, faCog, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  public faBars = faBars;
  public faEnvelope = faEnvelope;
  public faCog = faCog;
  public faSignOutAlt = faSignOutAlt;
  @ViewChild('sidebar') sidebar: any;
  @ViewChild('contentPanel') contentPanel: any;
  @ViewChild('logo') logo: any;
  @ViewChild('spacer') spacer: any;
  @ViewChild('dashboard') dashboard: any;
  @ViewChild('inbox') inbox: any;
  @ViewChild('tasks') tasks: any;
  @ViewChild('manageSite') manageSite: any;
  @ViewChild('sidebarList') sidebarList: any;
  @ViewChild('mobileMenu') mobileMenu: any;

  constructor() { }

  ngOnInit(): void {
  }

  public elementsArray: any = [];
  private addHideClass(element: any, index: any, array: any) {
    element.nativeElement.classList.add('hide');
  }
  private removeHideClass(element: any, index: any, array: any) {
    element.nativeElement.classList.remove('hide');
  }

  public toggleSidebar() {
    this.elementsArray = [this.logo, this.spacer, this.dashboard, this.inbox, this.tasks, this.manageSite];
    if (this.contentPanel.nativeElement.classList == 'content-panel') {
      this.contentPanel.nativeElement.classList.remove('content-panel');
      this.contentPanel.nativeElement.classList.add('content-panel-flex-11');
      this.elementsArray.forEach(this.addHideClass);
      this.sidebarList.nativeElement.classList.add('text-center');
    }
    else {
      this.contentPanel.nativeElement.classList.add('content-panel');
      this.contentPanel.nativeElement.classList.remove('content-panel-flex-11');
      this.elementsArray.forEach(this.removeHideClass);
      this.sidebarList.nativeElement.classList.remove('text-center');
    }
  }

  public closeMobileMenu() {
    this.mobileMenu.nativeElement.classList.add('hide');
  }

  public showMobileMenu() {
    this.mobileMenu.nativeElement.classList.remove('hide');
  }
}
