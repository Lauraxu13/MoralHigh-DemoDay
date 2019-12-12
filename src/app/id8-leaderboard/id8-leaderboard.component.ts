import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { TotalScore } from '../total-score';

@Component({
  selector: 'app-id8-leaderboard',
  templateUrl: './id8-leaderboard.component.html',
  styleUrls: ['./id8-leaderboard.component.css']
})
export class Id8LeaderboardComponent implements OnInit {
  leaderBoard:[];
  constructor(private router: Router, private service: MasterService) { }
  // newEL(i:TotalScore){
  //   while(true){
  //     let count =0
  //     if(count<this.leaderBoard.length){
  //        this.leaderBoard.unshift()
  //     }else{
  //       break;
  //     }
     
  //   }
  // }

  ngOnInit() {
    this.service.getLeaderBoard().subscribe(leaderBoard=>{
        this.leaderBoard=leaderBoard
    });
  }

}
