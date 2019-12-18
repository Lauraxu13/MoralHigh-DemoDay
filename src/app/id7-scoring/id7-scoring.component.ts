import { Component, OnInit } from '@angular/core';
import { TotalScore } from '../total-score';
import { Router } from '@angular/router';
import { MasterService } from '../services/master.service';

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
    this.service.updateDatabase(this.total.Name, this.total.Popular, this.total.Unpopular, this.total.Nice, this.total.Jock, this.total.Bully, this.total.Nerd, this.total.Personality).subscribe(scores => {
      this.score = scores
    });
  }


  ngOnInit() {
    this.total = this.service.getTS();
    console.log(this.total)
    this.scores = this.service.calculatePersonality();
    this.total.Personality = this.service.totalScore.Personality;
    this.highScore = this.service.highScore;
    this.update();
    document.body.classList.add('scoresBody');

  }

}
