import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from '../services/master.service';
import { TotalScore } from '../total-score';
import { CharacterService } from '../services/character.service';

@Component({
  selector: "app-id4-bathroom",
  templateUrl: "./id4-bathroom.component.html",
  styleUrls: ["./id4-bathroom.component.css"]
})
export class Id4BathroomComponent implements OnInit, OnDestroy {
  doAnimate: boolean = false;
  nextCounter: number = 0;
  hideDialogue: boolean = false;
  showOpt: boolean = true;
  total: TotalScore;
  totalOnInit: TotalScore;
  flip: boolean = true;
  seconds: number = 8;
  private timer: any;
  character: string[];
  transition: boolean = false;
  animateSeconds: number = 5;
  buttonHide: boolean = true;



  constructor(private router: Router, private service: MasterService, private charService: CharacterService) { }



  //countdown for time sensitive question
  countDown(): any {
    //timer starts at 8 then each time -1
    this.seconds = this.seconds - 1;
    //when timer reaches 0 update scores and routes to next page
    if (this.seconds < 0) {
      this.total.Popular = this.total.Popular - 1;
      this.total.Unpopular = this.total.Unpopular + 1;

      this.service.setTSpopularity(this.total.Popular, this.total.Unpopular);

      this.total.Nice = this.total.Nice - 2;
      this.total.Bully = this.total.Bully + 2;

      this.service.setTScharisma(this.total.Nice, this.total.Bully);

      this.showOpt = !this.showOpt;
      this.transition = !this.transition;
      this.animationCountDown();
      this.buttonHide = !this.buttonHide;

      console.log(this.total);
    } else {
      //waits 1second before looping through countdown() again
      this.timer = setTimeout(() => {
        this.countDown();
      }, 1000);
    }

    console.log("countdown happening");
  }

  // onClick -->  shows dialogue, starts flip and animation, brings up options div and starts Countdown
  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.flip = !this.flip;
      this.doAnimate = true;
    } else {
      this.showOpt = !this.showOpt;
      this.countDown();
    }
  }

  //Option 1 for Page 4 -- sets new scores
  opt1id4() {
    this.total.Popular = this.total.Popular + 1;
    this.total.Unpopular = this.total.Unpopular - 1;
    this.service.setTSpopularity(this.total.Popular, this.total.Unpopular);

    this.total.Nice = this.total.Nice + 2;
    this.total.Bully = this.total.Bully - 2;
    this.service.setTScharisma(this.total.Nice, this.total.Bully);

    this.showOpt = !this.showOpt;
    this.doAnimate = !this.doAnimate;
    this.transition = !this.transition;
    this.buttonHide = !this.buttonHide;

    // distroy timer
    clearTimeout(this.timer);
    
    this.animationCountDown();
    console.log(this.transition);

    console.log(this.total);
  }

  //Option 2 for page 4 -- sets new scores
  opt2id4() {
    this.total.Popular = this.total.Popular - 1;
    this.total.Unpopular = this.total.Unpopular + 1;
    this.service.setTSpopularity(this.total.Popular, this.total.Unpopular);

    this.total.Nice = this.total.Nice - 2;
    this.total.Bully = this.total.Bully + 2;
    this.service.setTScharisma(this.total.Nice, this.total.Bully);

    this.showOpt = !this.showOpt;
    this.doAnimate = !this.doAnimate;
    this.transition = !this.transition;
    this.buttonHide = !this.buttonHide;

    // distroy timer
    clearTimeout(this.timer);

    this.animationCountDown();

    console.log(this.total);
  }

  // triggers animaiton and routes to next page
  animationCountDown(): any {
    this.animateSeconds = this.animateSeconds - 1;
    if (this.animateSeconds < 0) {
      this.router.navigate(["homework"]);

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
    this.totalOnInit = this.service.getTS();
    this.character = this.charService.getCharacter();
    document.body.classList.add('bathroomBody');
    console.log(this.character)
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
