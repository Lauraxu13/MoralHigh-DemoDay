import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../services/master.service';
import { TotalScore } from '../total-score';

@Component({
  selector: 'app-id8-leaderboard',
  templateUrl: './id8-leaderboard.component.html',
  styleUrls: ['./id8-leaderboard.component.css']
})
export class Id8LeaderboardComponent implements OnInit {

  leaderBoard: [];
  index: number;
  results: boolean = false;


  constructor(private router: Router, private service: MasterService) { }

  showResults(i) {
    this.index = i;
    this.results = !this.results;

  }

  ngOnInit() {
    this.service.getLeaderBoard().subscribe(leaderBoard => {
      this.leaderBoard = leaderBoard
    });
  }

}