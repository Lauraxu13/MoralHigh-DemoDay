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
  personality: string;
  highScore: number;

  constructor(private router: Router, private service: MasterService) { }

  next() {
    this.router.navigate(["leaderboard"]);
  }


  ngOnInit() {
    this.total = this.service.getTS();
    console.log(this.total)
    this.scores = this.service.calculatePersonality();
    this.personality = this.service.personality;
    this.highScore = this.service.highScore;
    document.body.classList.add('scoresBody');

  }

}
