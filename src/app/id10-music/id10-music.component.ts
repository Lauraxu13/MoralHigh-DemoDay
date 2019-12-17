import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id10-music',
  templateUrl: './id10-music.component.html',
  styleUrls: ['./id10-music.component.css']
})
export class Id10MusicComponent implements OnInit {

  off: boolean = false;
  backMusic = new Audio("assets/flatZone.mp3") ;


  toggleSound() {
    if (this.backMusic.paused) {
    this.backMusic.play();
    this.off = !this.off;
  }
    else this.backMusic.pause();
    // !this.off = this.off;
  } 

  constructor() { }

  ngOnInit() {
  }

}
