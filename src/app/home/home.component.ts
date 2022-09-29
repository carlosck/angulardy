import { Component, OnInit } from '@angular/core';
import { TypeTitleContentListingFields } from '../content-types';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }
  
  public homeItems : Entry<TypeTitleContentListingFields>[] = [];
  
  ngOnInit() {
    this.contentfulService.getHome()
    .then(homeItems => this.homeItems = homeItems)
    console.log('this.homeItems',this.homeItems)    
  }

}
