import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

//Class in HTML
mute: boolean = true;

 // Music
backMusic = new Audio("assets/flatZone.mp3");

// toggle method
toggleSound():any {
  this.mute = !this.mute;
  if (this.mute === true) {
    this.backMusic.pause();
  } else {
    this.backMusic.play();
  }
}

}