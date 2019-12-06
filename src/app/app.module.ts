import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Id1HomePageComponent } from './id1-home-page/id1-home-page.component';
import { Id2IntroComponent } from './id2-intro/id2-intro.component';
import { Id3HallwayComponent } from './id3-hallway/id3-hallway.component';
import { Id4BathroomComponent } from './id4-bathroom/id4-bathroom.component';
import { Ig5HomeworkDueComponent } from './ig5-homework-due/ig5-homework-due.component';
import { Id5HomeworkDueComponent } from './id5-homework-due/id5-homework-due.component';
import { Id6GymComponent } from './id6-gym/id6-gym.component';
import { Id7ScoringComponent } from './id7-scoring/id7-scoring.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Id1HomePageComponent,
    Id2IntroComponent,
    Id3HallwayComponent,
    Id4BathroomComponent,
    Ig5HomeworkDueComponent,
    Id5HomeworkDueComponent,
    Id6GymComponent,
    Id7ScoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
