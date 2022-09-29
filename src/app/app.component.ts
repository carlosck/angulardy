import { Component } from '@angular/core';
import { ProjectsItems } from './mock-projects'
import { AwardsItems } from './mock-awards'
import { MiscItems } from './mock-misc'
import { Entry } from 'contentful';
import { ContentfulService } from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private contentfulService: ContentfulService) { }
  public sections : Entry<any>[] = [];

  ngOnInit() {
    this.contentfulService.getSections()
    .then(sections => this.sections = sections)
    console.log('sections',this.sections)
  }

  title = 'angulardy';
  name = 'Carlos Seca';
  projectsItems= ProjectsItems;
  awardsItems= AwardsItems;
  miscItems= MiscItems;
  /*
  sectionss = [
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
    

  ];*/
  
}
