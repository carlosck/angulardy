import { Component, OnInit, Input } from '@angular/core';
import { TypeTitleContentListingFields } from '../content-types'
import { Entry } from 'contentful';

@Component({
  selector: 'app-common-text-item',
  templateUrl: './common-text-item.component.html',
  styleUrls: ['./common-text-item.component.scss']
})
export class CommonTextItemComponent implements OnInit {

  constructor() { }

  @Input() commonTextItemData? : Entry<TypeTitleContentListingFields>;
  
  ngOnInit(): void {    
  }

}
