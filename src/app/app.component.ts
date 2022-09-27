import { Component } from '@angular/core';
import { ProjectsItems } from './mock-projects'
import { AwardsItems } from './mock-awards'
import { MiscItems } from './mock-misc'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardy';
  name = 'Carlos Seca';
  projectsItems= ProjectsItems;
  awardsItems= AwardsItems;
  miscItems= MiscItems;
  
  sections = [
    {
      title:'Projects',
      subtitle:'projects of which I have been part',
      items: this.projectsItems,
    },
    {
      title:'Awards',
      subtitle:'Some winning projects where I have been involved',
      items: this.awardsItems,
    },
    {
      title:'Misc',
      subtitle:'Some Hobbies or side projects, not on my daily basis',
      items: this.miscItems,
    },
    

  ];
  
}
