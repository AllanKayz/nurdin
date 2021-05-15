import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { WebsitedataService } from '../services/websitedata.service';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  headerVariable: any = false;
  durationInSeconds = 5;

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

  constructor(private router: Router, private websiteData: WebsitedataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      this.contact = data.profile[0].phone;
      this.email = data.profile[0].email;
      this.address = data.profile[0].address;
    });
  }

  openSnackBar(message: string, action: string) {
    return this.snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top'
    });
  }

  contactUs(e: Event, contactForm: any): void {
    e.preventDefault();

    if (!contactForm.valid) {
      this.openSnackBar('Fill In All The Needed Information', 'Close')
    }
    else {
      emailjs.sendForm('service_o5at4qh', 'template_h4a5vof', e.target as HTMLFormElement, 'user_hHAWzMAcXONz44iFZmU1n')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          if (result.text === 'OK') {
            this.openSnackBar('Message Sent', 'Close')
            contactForm.reset();
          }
        }, (error) => {
          this.openSnackBar('Failed To Send Message Try Again', 'Close')
          console.log(error.text);
        });
    }
  }

}
