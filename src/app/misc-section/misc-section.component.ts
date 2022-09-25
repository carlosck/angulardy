import { Component, OnInit } from '@angular/core';
import { CommonCardDataItem }from '../common-card/common-card-data-item';

@Component({
  selector: 'app-misc-section',
  templateUrl: './misc-section.component.html',
  styleUrls: ['./misc-section.component.scss']
})
export class MiscSectionComponent implements OnInit {

  constructor() { }

  miscDataItem : CommonCardDataItem[]=[
    {
      title: 'Dark Path',
      link: 'https://rdy.mx/darkpath/',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/darkpath-opt-828.WEBP',
      content: [
        'Unity Webgl',
      ]
    },
    {
      title: 'Flutter App',
      link: 'https://github.com/carlosck/caprishop',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/flutter-opt-828.WEBP',
      content: [
        'Flutter IOS Android ',
      ]
    },
    {
      title: 'Android App',
      link: 'https://play.google.com/store/apps/details?id=mx.rdy.glucosemonitoring',
      image: 'https://www.rdy.mx/images/nextImageExportOptimizer/androidglucose-opt-828.WEBP',
      content: [
        'Java Android',
      ]
    }
  ]

  ngOnInit(): void {
  }

}
