import { Component, OnInit, HostListener } from '@angular/core';
import { WebsitedataService } from '../services/websitedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  headerVariable: any = false;

  public address = '';
  public email = '';
  public contact = '';

  @HostListener('document:scroll') scrollfunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
    }
    else {
      this.headerVariable = false;
    }
  }

  constructor(private router: Router, private websiteData: WebsitedataService) { }

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      this.contact = data.profile[0].phone;
      this.email = data.profile[0].email;
      this.address = data.profile[0].address;
    });
  }

}
