import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from '../master.service';
import { TotalScore } from '../total-score';

@Component({
  selector: "app-id4-bathroom",
  templateUrl: "./id4-bathroom.component.html",
  styleUrls: ["./id4-bathroom.component.css"]
})
export class Id4BathroomComponent implements OnInit {


  doAnimate: boolean = false;
  nextCounter: number = 0;
  hideDialogue: boolean = false;
  showOpt: boolean = true
  popularity: number;
  charisma: number;
  total: TotalScore;
  flip: boolean= true;
  

  constructor(private router: Router, private service: MasterService) { }

  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.flip = !this.flip
      this.doAnimate = true;
    } else {
      this.showOpt = !this.showOpt;
    }
  }

  opt1id4() {
    this.popularity = this.popularity + 1
    this.service.setTSpopularity(this.popularity)

    this.charisma = this.charisma + 1
    this.service.setTScharisma(this.charisma)

    this.router.navigate(["homework"]);

    console.log(this.total)
  }
  opt2id4() {
    this.popularity = this.popularity - 1
    this.service.setTSpopularity(this.popularity)

    this.charisma = this.charisma - 2
    this.service.setTScharisma(this.charisma)

    this.router.navigate(["homework"]);
    console.log(this.popularity)
  }


  ngOnInit() {
    this.popularity = this.service.getTSpopularity();
    this.charisma = this.service.getTScharisma();
    this.total = this.service.getTS();
    document.body.classList.add('bathroomBody');


  }
}
