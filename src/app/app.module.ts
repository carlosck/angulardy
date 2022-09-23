import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePersonalComponent } from './home-personal/home-personal.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { TechnicalSectionComponent } from './technical-section/technical-section.component';

import { CommonTextItemComponent } from './common-text-item/common-text-item.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { CommonCardComponent } from './common-card/common-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePersonalComponent,
    HomeContactComponent,    
    TechnicalSectionComponent,    
    CommonTextItemComponent, 
    ProjectsSectionComponent, CommonCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
