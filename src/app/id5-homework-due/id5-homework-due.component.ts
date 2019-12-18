import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../services/master.service';
import { TotalScore } from '../total-score';
import { CharacterService } from '../services/character.service';

@Component({
  selector: "app-id5-homework-due",
  templateUrl: "./id5-homework-due.component.html",
  styleUrls: ["./id5-homework-due.component.css"]
})
export class Id5HomeworkDueComponent implements OnInit {
  nextCounter: number = 0;
  hideDialogue: boolean = false;
  showOpt: boolean = false;
  total: TotalScore;
  character: string[];
  transition: boolean = false;
  animateSeconds: number = 5;



  constructor(private router: Router, private service: MasterService, private charService: CharacterService) { }

  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.showOpt = true;
    }
  }

  //Option 1 on page 5  -- sets scores and starts animation to route
  opt1id5() {
    this.total.Nerd = this.total.Nerd + 2;
    this.total.Jock = this.total.Jock - 2;
    this.service.setTSacademia(this.total.Nerd, this.total.Jock);

    this.total.Nice = this.total.Nice + 1;
    this.total.Bully = this.total.Bully - 1;
    this.service.setTScharisma(this.total.Nice, this.total.Bully);

    this.showOpt = !this.showOpt;
    this.transition = !this.transition;
    this.animationCountDown();

    console.log(this.total);
  }

  //Option 2 on page 5  -- sets scores and starts animation to route
  opt2id5() {
    this.total.Nerd = this.total.Nerd - 2;
    this.total.Jock = this.total.Jock + 2;
    this.service.setTSacademia(this.total.Nerd, this.total.Jock);

    this.total.Nice = this.total.Nice - 1;
    this.total.Bully = this.total.Bully + 1;
    this.service.setTScharisma(this.total.Nice, this.total.Bully);

    this.showOpt = !this.showOpt;
    this.transition = !this.transition;
    this.animationCountDown();

    console.log(this.total);
  }


  // starts animaiton and routes to next page 
  animationCountDown(): any {
    this.animateSeconds = this.animateSeconds - 1;
    if (this.animateSeconds < 0) {
      this.router.navigate(["gym"]);

      console.log(this.total);
    } else {
      setTimeout(() => {
        this.animationCountDown();
      }, 1000);
    }

    console.log("animate countdown happening");
  }

  ngOnInit() {
    this.total = this.service.getTS();
    this.character = this.charService.getCharacter();
    document.body.classList.add('classBody');

  }
}
