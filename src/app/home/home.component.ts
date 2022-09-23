import { Component, OnInit } from '@angular/core';
import { CommonTextItemData } from '../common-text-item/common-text-item-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  homeData : CommonTextItemData[]=[
    {
      'title': 'About me',
      'content': 
        [
          'Web developer (full stack) with 15+ years of experience.',  
          'Fluent with HTML, JS, JQuery, CSS for front end and PHP, Node for backend.', 
          'Knowledgeable with frameworks like: React, Next, WordPress, Laravel',
          'Plenty of experience with MySQL, NoSQL(MariaDb, Mongo) and Headless CMS like Gatsby, Prep.io.', 
          'Familiar with Angular, Vue',
          'Taking freelance in my leisure time.',
          'Passionate about family, technology and nature.',
        ],        
    },
    {
      'title': 'Education',
      'content': 
        [
          'Engineer in Computer Science<span> Facultad de Sistemas Universidad Autónoma de Coahuila<span> ',
        ],  
    },
    {
      'title': 'Languages',
      'content': 
        [
          'Spanish: <span>Native</span>',
          'English : <span>Working proficiency</span>',
        ],
    },
    
  ]
  ngOnInit(): void {
  }

}
