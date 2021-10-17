import { Component, OnInit } from '@angular/core';
import { WebsitedataService } from '../../services/websitedata.service';

@Component({
  selector: 'app-sitemanager',
  templateUrl: './sitemanager.component.html',
  styleUrls: ['./sitemanager.component.css']
})

export class SitemanagerComponent implements OnInit {

  constructor(private websiteData: WebsitedataService) { }

  values = 'values';
  mission = 'mission';
  philosophy = 'philosophy';

  ngOnInit(): void {
    this.websiteData.getLocalData().subscribe((data: any) => {
      this.values = data.statements[0].values;
      this.mission = data.statements[0].mission;
      this.philosophy = data.statements[0].philosophy;
    });
  }
}
