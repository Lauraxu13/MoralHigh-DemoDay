import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-id9-transition',
  templateUrl: './id9-transition.component.html',
  styleUrls: ['./id9-transition.component.css']
})
export class Id9TransitionComponent implements OnInit {

  transitionCounter: number = 0;


  character: any[] = [];
  constructor(private router: Router, private service: MasterService) { }


  nextButton() {
    this.transitionCounter++;
    if (this.transitionCounter <= 1) {
      this.router.navigate(["homework"]);
      this.service.setTransitionCounter(this.transitionCounter);

    } else {
      this.router.navigate(["gym"]);
    }
    console.log(this.transitionCounter)
  }



  ngOnInit() {
    document.body.classList.add('hallwayBody');
    this.character = this.service.getCharacter();
    this.transitionCounter = this.service.getTransitionCounter();
    console.log(this.transitionCounter)


  }

}
