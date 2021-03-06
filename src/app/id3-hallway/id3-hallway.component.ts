import { Component, OnInit, HostBinding } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from '../services/master.service';
import { CharacterService } from '../services/character.service';

@Component({
  selector: "app-id3-hallway",
  templateUrl: "./id3-hallway.component.html",
  styleUrls: ["./id3-hallway.component.css"],
  animations: []
})
export class Id3HallwayComponent implements OnInit {
  nextCounter: number = 0;

  showDialogue: boolean = false;
  doAnimate: boolean = false;
  name: string;

  character: string[] = [];

  


  constructor(private router: Router, private service: MasterService, private charService: CharacterService) { }

  //onclick 
  nextButton() {
    this.nextCounter++;
    //if on click counter is less than or equal to 1 
    if (this.nextCounter <= 1) {
      // applies the class of .animate
      this.doAnimate = true;
      //display dialogue
      this.showDialogue = true;
    } else {
      // if counter is greater than 1  nav to bathroom
      this.router.navigate(["bathroom"]);
    }
  }

  ngOnInit() {
    document.body.classList.add('hallwayBody');
    this.character = this.charService.getCharacter();
    this.name = this.service.getName();
  }
}
