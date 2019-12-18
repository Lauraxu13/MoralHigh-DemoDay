import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from "../master.service";
import { TotalScore } from "../total-score";

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

  constructor(private router: Router, private service: MasterService) {}


  //onClick  -- converstaion counting when divs should appear
  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.showOpt = true;
    }
  }

  //Option 1 on page 5  -- sets scores and starts animation to route
  opt1id5() {
    this.total.nerd = this.total.nerd + 2;
    this.total.jock = this.total.jock - 2;
    this.service.setTSacademia(this.total.nerd, this.total.jock);

    this.total.nice = this.total.nice + 1;
    this.total.bully = this.total.bully - 1;
    this.service.setTScharisma(this.total.nice, this.total.bully);

    this.showOpt = !this.showOpt;
    this.transition = !this.transition;
    this.animationCountDown();

    console.log(this.total);
  }

  //Option 2 on page 5  -- sets scores and starts animation to route
  opt2id5() {
    this.total.nerd = this.total.nerd - 2;
    this.total.jock = this.total.jock + 2;
    this.service.setTSacademia(this.total.nerd, this.total.jock);

    this.total.nice = this.total.nice - 1;
    this.total.bully = this.total.bully + 1;
    this.service.setTScharisma(this.total.nice, this.total.bully);

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
    this.character = this.service.getCharacter();
    document.body.classList.add("classBody");
  }
}
