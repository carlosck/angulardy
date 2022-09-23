import { Component, OnInit, Input  } from '@angular/core';
import { HomeSectionData } from './home-section-data';


@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  
  constructor() { }
  @Input() homeSectionData?: HomeSectionData;
  

  ngOnInit(): void {
  }
}
