import { Component, OnInit, Input } from '@angular/core';
import { CommonTextItemData } from './common-text-item-data'
@Component({
  selector: 'app-common-text-item',
  templateUrl: './common-text-item.component.html',
  styleUrls: ['./common-text-item.component.scss']
})
export class CommonTextItemComponent implements OnInit {

  constructor() { }

  @Input() commonTextItemData? : CommonTextItemData;
  
  ngOnInit(): void {
  }

}
