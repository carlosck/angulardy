import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePersonalComponent } from './home-personal/home-personal.component';

import { TechnicalSectionComponent } from './technical-section/technical-section.component';

import { CommonTextItemComponent } from './common-text-item/common-text-item.component';

import { CommonCardComponent } from './common-card/common-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonSectionComponent } from './common-section/common-section.component';

import { ContentfulService } from './contentful.service';
import { ToHtmlPipe } from './to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePersonalComponent,
    TechnicalSectionComponent,    
    CommonTextItemComponent, 
    CommonCardComponent,
    CommonSectionComponent,
    ToHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
