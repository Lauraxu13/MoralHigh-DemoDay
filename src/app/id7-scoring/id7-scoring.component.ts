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


  constructor(private router: Router, private service: MasterService) { }

  next(){
    this.router.navigate(["leaderboard"]);
  }


  ngOnInit() {
    this.total = this.service.getTS();
    console.log(this.total)
  }

}
