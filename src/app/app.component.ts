import { Component } from '@angular/core';
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
    this.contentfulService.getSections({order: 'sys.createdAt'})
    .then((sections) =>{
      this.sections = sections      
    } )
    
  }

  title = 'angulardy';
  name = 'Carlos Seca';
  
}
