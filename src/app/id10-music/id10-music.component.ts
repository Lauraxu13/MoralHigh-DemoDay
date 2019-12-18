import { Component, OnInit } from "@angular/core";
import { MusicService } from '../services/music.service';

@Component({
  selector: "app-id10-music",
  templateUrl: "./id10-music.component.html",
  styleUrls: ["./id10-music.component.css"]
})
export class Id10MusicComponent implements OnInit {

  constructor(public musicService: MusicService) {}

  //pulles toggle sound from music service 
  toggleThatSound() {
    this.musicService.toggleSound();
  }


  ngOnInit() {}
}
