import { Component, OnInit } from '@angular/core';
import { TotalScore } from '../total-score';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-id7-scoring',
  templateUrl: './id7-scoring.component.html',
  styleUrls: ['./id7-scoring.component.css']
})
export class Id7ScoringComponent implements OnInit {


  total: TotalScore;
  scores: any[];
  score: any;
  highScore: number;

  constructor(private router: Router, private service: MasterService) { }

  next() {
    this.router.navigate(["leaderboard"]);
  }

  update() {
    this.service.updateDatabase(this.total.name, this.total.popular, this.total.unpopular, this.total.nice, this.total.jock, this.total.bully, this.total.nerd, this.total.personality).subscribe(scores => {
      this.score = scores
    });
  }


  ngOnInit() {
    this.total = this.service.getTS();
    console.log(this.total)
    this.scores = this.service.calculatePersonality();
    this.total.personality = this.service.totalScore.personality;
    this.highScore = this.service.highScore;
    this.update();
    document.body.classList.add('scoresBody');

  }

}
