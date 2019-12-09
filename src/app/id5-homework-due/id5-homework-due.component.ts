import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { TotalScore } from '../total-score';

@Component({
  selector: 'app-id5-homework-due',
  templateUrl: './id5-homework-due.component.html',
  styleUrls: ['./id5-homework-due.component.css']
})
export class Id5HomeworkDueComponent implements OnInit {
  nextCounter: number = 0;
  hideDialogue: boolean = false;
  showOpt: boolean = false
  academia: number;
  charisma: number;
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

  opt1id5() {
    this.academia = this.academia + 1;
    this.service.setTSacademia(this.academia);

    this.charisma = this.charisma + 1;
    this.service.setTScharisma(this.charisma);

    this.router.navigate(["gym"]);

    console.log(this.total)
  }
  opt2id5() {
    this.academia = this.academia - 1;
    this.service.setTSacademia(this.academia);

    this.charisma = this.charisma - 2;
    this.service.setTScharisma(this.charisma);

    this.router.navigate(["gym"]);
    console.log(this.total)
  }






  ngOnInit() {
    this.academia = this.service.getTSacademia();
    this.charisma = this.service.getTScharisma();
    this.total = this.service.getTS();
    document.body.classList.add('classBody');

  }

}
