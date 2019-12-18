import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from "../services/master.service";
import { TotalScore } from "../total-score";
import { CharacterService } from '../services/character.service';
@Component({
  selector: "app-id6-gym",
  templateUrl: "./id6-gym.component.html",
  styleUrls: ["./id6-gym.component.css"]
})
export class Id6GymComponent implements OnInit {
  name: string;
  nextCounter: number = 0;
  hideDialogue: boolean = true;
  showOpt: boolean = false;
  total: TotalScore;
  personality: string;
  character: string[];
  

  constructor(private router: Router, private service: MasterService, private charService: CharacterService) { }

  //onClick -->  shows Options
  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.showOpt = true;
    }
    console.log(this.nextCounter);
  }

  //Option 1 on page 6 -- sets new scores and routes to score page
  opt1id6() {
    this.total.Nerd = this.total.Nerd - 2;
    this.total.Jock = this.total.Jock + 2;
    this.service.setTSacademia(this.total.Nerd, this.total.Jock);

    this.total.Popular = this.total.Popular + 1;
    this.total.Unpopular = this.total.Unpopular - 1;
    this.service.setTSpopularity(this.total.Popular, this.total.Unpopular);

    //send updates to database
    this.router.navigate(["score"]);
    console.log(this.total);
  }

  //Option 2 on page 6 -- sets new scores and routes to score page
  opt2id6() {
    this.total.Nerd = this.total.Nerd + 2;
    this.total.Jock = this.total.Jock - 2;
    this.service.setTSacademia(this.total.Nerd, this.total.Jock);

    this.total.Popular = this.total.Popular - 1;
    this.total.Unpopular = this.total.Unpopular + 1;
    this.service.setTSpopularity(this.total.Popular, this.total.Unpopular);
    // send updates to database
    this.router.navigate(["score"]);
    console.log(this.total);
  }

  //Option 3 on page 6 --!! only appears if you helped Heather earlier condition set in HTML sets new scores and routes to score page
  opt3id6() {
    this.total.Nerd = this.total.Nerd - 1;
    this.total.Jock = this.total.Jock - 1;
    this.service.setTSacademia(this.total.Nerd, this.total.Jock);

    this.total.Popular = this.total.Popular + 2;
    this.total.Popular = this.total.Popular - 2;
    this.service.setTSpopularity(this.total.Popular, this.total.Unpopular);

    // send updates to database
    this.router.navigate(["score"]);
    console.log(this.total);
  }

  ngOnInit() {
    document.body.classList.add("gymBody");
    this.name = this.service.getName();
    this.total = this.service.getTS();
    this.character = this.charService.getCharacter();
    this.name = this.service.getName();
  }
}
