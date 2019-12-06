import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Id1HomePageComponent } from './id1-home-page/id1-home-page.component';
import { Id2IntroComponent } from './id2-intro/id2-intro.component';
import { Id3HallwayComponent } from './id3-hallway/id3-hallway.component';
import { Id4BathroomComponent } from './id4-bathroom/id4-bathroom.component';
import { Id5HomeworkDueComponent } from './id5-homework-due/id5-homework-due.component';
import { Id6GymComponent } from './id6-gym/id6-gym.component';
import { Id7ScoringComponent } from './id7-scoring/id7-scoring.component';


const routes: Routes = [
  {path: "home" , component: Id1HomePageComponent },
  {path: "intro" , component: Id2IntroComponent },
  {path: "hallway" , component: Id3HallwayComponent },
  {path: "bathroom" , component: Id4BathroomComponent },
  {path: "homework" , component: Id5HomeworkDueComponent },
  {path: "gym" , component: Id6GymComponent },
  {path: "score" , component: Id7ScoringComponent },
  {path: "", redirectTo: "/home", pathMatch: "full" }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
