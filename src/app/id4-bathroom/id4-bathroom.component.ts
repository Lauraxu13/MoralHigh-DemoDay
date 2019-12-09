import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-id4-bathroom',
  templateUrl: './id4-bathroom.component.html',
  styleUrls: ['./id4-bathroom.component.css']
})
export class Id4BathroomComponent implements OnInit {


  doAnimate: boolean = false;

  nextCounter: number = 0;

  hideDialogue: boolean = false;
  showOpt: boolean = false

  constructor(private router: Router) { }

  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.doAnimate = !this.doAnimate
      this.hideDialogue = true;
    }
    else {
      this.showOpt = true
    }
  }




  ngOnInit() {
    document.body.classList.add('bathroomBody');

  }
}

