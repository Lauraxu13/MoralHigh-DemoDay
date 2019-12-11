import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private router: Router, private service: MasterService) { }
  leaderBoard:[];
  ngOnInit() {
    this.service.getLeaderBoard().subscribe(data=>{
      this.leaderBoard=data
    })
  }

}
