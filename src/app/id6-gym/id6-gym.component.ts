import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { TotalScore } from '../total-score';

@Component({
  selector: 'app-id6-gym',
  templateUrl: './id6-gym.component.html',
  styleUrls: ['./id6-gym.component.css']
})
export class Id6GymComponent implements OnInit {

  nextCounter: number = 0;
  hideDialogue: boolean = false;
  showOpt: boolean = false
  academia: number;
  charisma: number;
  popularity: number;
  total: TotalScore;


  constructor(private router: Router, private service: MasterService) { }

  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.showOpt = true;

    }
    console.log(this.nextCounter)
  }

  opt1id6() {
    this.academia = this.academia - 2;
    this.service.setTSacademia(this.academia);

    this.charisma = this.charisma + 1;
    this.service.setTScharisma(this.charisma);

    this.router.navigate(["score"]);

    console.log(this.total)
  }
  opt2id6() {
    this.academia = this.academia - 1;
    this.service.setTSacademia(this.academia);

    this.popularity = this.popularity + 2;
    this.service.setTSpopularity(this.popularity);

    this.router.navigate(["score"]);
    console.log(this.total)
  }


  ngOnInit() {

    this.academia = this.service.getTSacademia();
    this.charisma = this.service.getTScharisma();
    this.popularity = this.service.getTSpopularity();
    this.total = this.service.getTS();
    document.body.classList.add('gymBody');

  }

}
