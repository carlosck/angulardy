import { Component, OnInit, Input } from '@angular/core';
import { CommonCardDataItem }from '../common-card/common-card-data-item';

@Component({
  selector: 'app-common-section',
  templateUrl: './common-section.component.html',
  styleUrls: ['./common-section.component.scss']
})
export class CommonSectionComponent implements OnInit {

  constructor() { }
  @Input() title?: string
  @Input() subtitle?: string;
  @Input() items?: CommonCardDataItem[];

  ngOnInit(): void {    
  }

}
