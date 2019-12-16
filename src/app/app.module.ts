import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Id1HomePageComponent } from "./id1-home-page/id1-home-page.component";
import { Id2IntroComponent } from "./id2-intro/id2-intro.component";
import { Id3HallwayComponent } from "./id3-hallway/id3-hallway.component";
import { Id4BathroomComponent } from "./id4-bathroom/id4-bathroom.component";
import { Id5HomeworkDueComponent } from "./id5-homework-due/id5-homework-due.component";
import { Id6GymComponent } from "./id6-gym/id6-gym.component";
import { Id7ScoringComponent } from "./id7-scoring/id7-scoring.component";
import { Id8LeaderboardComponent } from './id8-leaderboard/id8-leaderboard.component';
import { Id9TransitionComponent } from './id9-transition/id9-transition.component';


@NgModule({
  declarations: [
    AppComponent,
    Id1HomePageComponent,
    Id2IntroComponent,
    Id3HallwayComponent,
    Id4BathroomComponent,
    Id5HomeworkDueComponent,
    Id6GymComponent,
    Id7ScoringComponent,
    Id8LeaderboardComponent,
    Id9TransitionComponent,
    
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
