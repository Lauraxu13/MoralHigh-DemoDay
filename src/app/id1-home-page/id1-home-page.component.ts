import { Component, OnInit } from "@angular/core";
import { MasterService } from "../services/master.service";
import { Router } from "@angular/router";
import { Id2IntroComponent } from "../id2-intro/id2-intro.component";
import { TotalScore } from "../total-score";
import { NgForm } from '@angular/forms';
import { MusicService } from '../services/music.service';


@Component({
  selector: "app-id1-home-page",
  templateUrl: "./id1-home-page.component.html",
  styleUrls: ["./id1-home-page.component.css"]
})
export class Id1HomePageComponent implements OnInit {
  name: string;
 

  //on click submit --> name into service, start music, routes to intro page
  newPlayer(name: string) {
    this.service.setName(name);
    console.log(name);
    this.musicService.toggleSound();
    this.router.navigate(["/intro"]);
  }

  constructor(
    private router: Router,
    private service: MasterService,
    public musicService: MusicService
  ) { }

  ngOnInit() { }
}
