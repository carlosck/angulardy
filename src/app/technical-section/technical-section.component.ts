import { Component, OnInit } from '@angular/core';
import { TypeTitleContentListingFields } from '../content-types';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-technical-section',
  templateUrl: './technical-section.component.html',
  styleUrls: ['./technical-section.component.scss']
})
export class TechnicalSectionComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

public technicalItems : Entry<TypeTitleContentListingFields>[] = [];

  ngOnInit() {
    this.contentfulService.getTechnical({order: 'sys.createdAt'})
    .then(technicalItems => this.technicalItems = technicalItems)
    console.log('this.technicalItems',this.technicalItems)    
  }

}
