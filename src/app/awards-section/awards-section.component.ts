import { Component, OnInit } from '@angular/core';
import { CommonCardDataItem }from '../common-card/common-card-data-item';

@Component({
  selector: 'app-awards-section',
  templateUrl: './awards-section.component.html',
  styleUrls: ['./awards-section.component.scss']
})
export class AwardsSectionComponent implements OnInit {

  constructor() { }

  projectDataItem : CommonCardDataItem[]=[
    {
      title: 'Dodge - Muscle Car',
      link: 'https://www.awwwards.com/sites/unleash-the-beast',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/muscle-opt-384.WEBP',
      content: [
        'Frontend',
      ]
    },
    {
      title: 'Folicure - MX ',
      link: 'https://www.awwwards.com/sites/folicure-mexico',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/folicure_site-opt-384.WEBP',
      content: [
        'Frontend',
      ]
    },
    {
      title: 'Rexona - The Next Super Hero',
      link: 'https://www.awwwards.com/sites/the-next-super-hero',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/next-super-hero-opt-384.WEBP',
      content: [
        'Frontend',
      ]
    },
    {
      title: 'Rexona - 8 Reclutas',
      link: 'https://thefwa.com/cases/8-reclutas-8-recruits',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/8reclutas-opt-384.WEBP',
      content: [
        'Backend',
      ]
    },

  ]
  
  ngOnInit(): void {
  }

}
