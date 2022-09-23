import { Component, OnInit } from '@angular/core';
import { TechnicalDataItem } from './technical-data-item';
@Component({
  selector: 'app-technical-section',
  templateUrl: './technical-section.component.html',
  styleUrls: ['./technical-section.component.scss']
})
export class TechnicalSectionComponent implements OnInit {

  constructor() { }
  TechnicalDataItems : TechnicalDataItem[]= [
    {
      title: 'HTML',
      content: [
        'Understanding the management and optimization of html code, from the og metas on head and using the tags correctly on the body to make more discoverable websites.',
        'Also using the Video, audio, canvas, svg and websockets elements to reduce weight on the loads.'
      ]
    },
    {
      title: 'JavaScript ',
      content: [
        'For the past years I focused my expertise on developing real dynamic sites, animating html using JQuery, Greensock, Threejs, Pixijxs or consuming services using Rest - GraphQL. ',
        'With the help of standards and tools to deliver clean and functional code like eslint, unit testing, jest, prop-types, styled-components.'
      ]
    },
    {
      title: 'CSS',
      content: [
        'User-first responsive design using mediaqueries also develops eye-catching  3d transform, css animations in a cross browser environment, using sass, less, scss to reduce development time.',        
      ]
    },
    {
      title: 'PHP',
      content: [
        'I\'m able to develop a CMS from scratch or use frameworks to serve rest services. like  Laravel, Wordpress,  Codeigniter, phreeze, Symfony, etc.',
        'Also using the Video, audio, canvas, svg and websockets elements to reduce weight on the loads.'
      ]
    },
    {
      title: 'API',
      content: [
        'Using apis from Google, Paypal, Facebook, Twitter, Youtube, etc.  to complement the content in on our websites.',        
      ]
    },
    {
      title: 'DB',
      content: [
        'Well structured tables, optimized queries, using joins, creating triggers, stored  procedures on MySQL.',
        'Reduce understanding  of NoSql MariaDb, Mongo, etc.',
        'Amazed by GraphQL.'
      ]
    },
    {
      title: 'Misc',
      content: [
        'I have researched technology such as Unity, Android, Facebook Ar Studio, Python, NodeJs, Flutter, Alexa Skills.'
      ]
    },
]
  ngOnInit(): void {
  }

}
