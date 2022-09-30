import { Component, OnInit, Input } from '@angular/core';
import { CommonCardDataItem } from './common-card-data-item'
import { TypeCardListing } from '../content-types'
@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent implements OnInit {

  constructor() { }
  @Input() data?: TypeCardListing;
  ngOnInit(): void {
    console.log('data',this.data)
  }

}
