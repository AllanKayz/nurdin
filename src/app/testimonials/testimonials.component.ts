import { Component, OnInit } from '@angular/core';
import { WebsitedataService } from '../services/websitedata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  };

  public testimonies: any = [];

  constructor(private websiteData: WebsitedataService) { }

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      this.testimonies = data.testimonies;
    });
  }

}
