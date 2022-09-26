import { Component, OnInit } from '@angular/core';
import { ContactItem } from './home-personal_contact_item'
@Component({
  selector: 'app-home-personal',
  templateUrl: './home-personal.component.html',
  styleUrls: ['./home-personal.component.scss']
})
export class HomePersonalComponent implements OnInit {

  constructor() { }
  name = 'Carlos Seca';
  profilePic = 'https://rdy.mx/images/profilepic.jpg';
  
  contactItems : ContactItem[]= [
    {
      title: 'Mobile',
      value: '52 (844) 2128909',
      link: '',
    },
    {
      title: 'Mail',
      value: 'carlosck@gmail.com',
      link: 'mailto: carlosck@gmail.com',
    },
    {
      title: 'Skype',
      value: 'carlos.seca',
      link: '',
    },
    {
      title: 'Location',
      value: 'Saltillo, Coahuila, México.',
      link: '',
    },
    {
      title: 'Url',
      value: 'rdy.mx',
      link: 'https://rdy.mx',
    },
]
  
  ngOnInit(): void {
  }

}
