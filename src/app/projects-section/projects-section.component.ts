import { Component, OnInit } from '@angular/core';
import { ProjectDataItem }from './project-data-item';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {

  constructor() { }
  projectDataItem : ProjectDataItem[]=[
    {
      title: 'Dodge Muscle Car',
      link: 'http://dodge.rauluranga.com/muscle',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/muscle-opt-384.WEBP',
      content: [
        'Using a 3d environment in ThreeJS to set the parallax effect on the initial animation , also a box to rotate the cars menu, animating the lights , smoke and the roll over effects ',
      ]
    },
    {
      title: 'GrupoW Site',
      link: 'https://grupow.com/sitew/',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/grupow-opt-384.WEBP',
      content: [
        'With the help of Pixijs and his displacement effect i can achieve the ripple effect , hammerjs for mobile touch , howler in charge of the sound events, and tweenmax for the animations',
      ]
    },
    {
      title: 'Jeep MX ',
      link: 'https://www.jeep.com.mx/',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/jeep_site-opt-384.WEBP',
      content: [
        'I Develop some sections of the website on React, including promociones using useStaticQuery-graphql from Gatsby, side-nav animation with css animation inside of styled-components, etc.',
      ]
    },
    {
      title: 'JEEP Histories',
      link: 'https://www.jeepstories.mx/',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/jeep_stories-opt-384.WEBP',
      content: [
        'howler etc ',
      ]
    },    

  ]
  ngOnInit(): void {
  }

}