import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from '../master.service';
import { TotalScore } from '../total-score';

@Component({
  selector: "app-id4-bathroom",
  templateUrl: "./id4-bathroom.component.html",
  styleUrls: ["./id4-bathroom.component.css"]
})
export class Id4BathroomComponent implements OnInit, OnDestroy {


  doAnimate: boolean = false;
  nextCounter: number = 0;
  hideDialogue: boolean = false;
  showOpt: boolean = true
  total: TotalScore;
  totalOnInit: TotalScore;
  flip: boolean = true;
  seconds: number = 8;
  private timer: any;
  character: string[];


  constructor(private router: Router, private service: MasterService) { }

  // if time < 0, run code
  // if score !== score {
  // don't do anything
  // else if, route


  countDown(): any {
    this.seconds = this.seconds - 1
    if (this.seconds < 0) {
      this.total.popular = this.total.popular - 1;
      this.total.unpopular = this.total.unpopular + 1;

      this.service.setTSpopularity(this.total.popular, this.total.unpopular)

      this.total.nice = this.total.nice - 2;
      this.total.bully = this.total.bully + 2;

      this.service.setTScharisma(this.total.nice, this.total.bully)

      this.router.navigate(["homework"]);

      console.log(this.total)
    } else {
      this.timer = setTimeout(() => {
        this.countDown();
      }, 1000);
    }

    console.log("countdown happening")
  };


  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.flip = !this.flip
      this.doAnimate = true;
    } else {
      this.showOpt = !this.showOpt;
      this.countDown();
    }
  }

  opt1id4() {
    this.total.popular = this.total.popular + 1;
    this.total.unpopular = this.total.unpopular - 1;
    this.service.setTSpopularity(this.total.popular, this.total.unpopular)

    this.total.nice = this.total.nice + 2;
    this.total.bully = this.total.bully - 2;
    this.service.setTScharisma(this.total.nice, this.total.bully)

    this.router.navigate(["homework"]);

    console.log(this.total)
  }
  opt2id4() {
    this.total.popular = this.total.popular - 1;
    this.total.unpopular = this.total.unpopular + 1;
    this.service.setTSpopularity(this.total.popular, this.total.unpopular)

    this.total.nice = this.total.nice - 2;
    this.total.bully = this.total.bully + 2;
    this.service.setTScharisma(this.total.nice, this.total.bully)


    this.router.navigate(["homework"]);
    console.log(this.total)
  }


  ngOnInit() {
    this.total = this.service.getTS();
    this.totalOnInit = this.service.getTS();
    this.character = this.service.getCharacter();
    document.body.classList.add('bathroomBody');
    console.log(this.character)



  }

  ngOnDestroy() {
    clearTimeout(this.timer);

  }
}
