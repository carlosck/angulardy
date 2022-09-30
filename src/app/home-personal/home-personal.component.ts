import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';

import { TypeContactListingFields } from '../content-types'
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-home-personal',
  templateUrl: './home-personal.component.html',
  styleUrls: ['./home-personal.component.scss']
})
export class HomePersonalComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }
  name = 'Carlos Seca';
  profilePic = 'https://rdy.mx/images/profilepic.jpg';
  
  public contactItems : Entry<TypeContactListingFields>[] = [];
  
  ngOnInit() {
    this.contentfulService.getContact({order: 'sys.createdAt'})
    .then(contactItems => this.contactItems = contactItems)    
  }

}
