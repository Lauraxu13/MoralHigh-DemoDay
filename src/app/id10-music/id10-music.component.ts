import { Component, OnInit } from "@angular/core";
import { MusicService } from '../music.service';

@Component({
  selector: "app-id10-music",
  templateUrl: "./id10-music.component.html",
  styleUrls: ["./id10-music.component.css"]
})
export class Id10MusicComponent implements OnInit {
  // mute: boolean = true;
  // backMusic = new Audio("assets/flatZone.mp3");

  // toggleSound() {
  //   this.mute = !this.mute;
  //   if (this.mute === true) {
  //     this.backMusic.pause();
  //   } else {
  //     this.backMusic.play();
  //   }
  // }

  constructor( private musicService: MusicService) {

    
  }

  toggleThatSound(){
    
    this.musicService.toggleSound();
  }
  ngOnInit() {

  }
}
