import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-id3-hallway",
  templateUrl: "./id3-hallway.component.html",
  styleUrls: ["./id3-hallway.component.css"]
})
export class Id3HallwayComponent implements OnInit {
  nextCounter: number = 0;

  showDialogue: boolean = false;
  doAnimate: boolean = false;


  backgroundSrc = '/assets/Hallway.png';

  constructor(private router: Router) { }

  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      // applies the class of .animate
      this.doAnimate = true;
      this.showDialogue = true;
    } else {
      this.router.navigate(["bathroom"]);
    }
  }

  ngOnInit() {
    document.body.classList.add('hallwayBody');
  }

}
