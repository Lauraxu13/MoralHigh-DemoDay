import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { TotalScore } from '../total-score';
@Component({
  selector: 'app-id6-gym',
  templateUrl: './id6-gym.component.html',
  styleUrls: ['./id6-gym.component.css']
})
export class Id6GymComponent implements OnInit {
  score: any;
  name: string;
  nextCounter: number = 0;
  hideDialogue: boolean = true;
  showOpt: boolean = false
  total: TotalScore;
  personality: string;
  



  constructor(private router: Router, private service: MasterService) { }
  nextButton() {
    this.nextCounter++;
    if (this.nextCounter <= 1) {
      this.hideDialogue = true;
      this.showOpt = true;
    }
    console.log(this.nextCounter)
  }
  opt1id6() {
    this.total.nerd = this.total.nerd - 2;
    this.total.jock = this.total.jock + 2;
    this.service.setTSacademia(this.total.nerd, this.total.jock);

    this.total.popular = this.total.popular + 1;
    this.total.unpopular = this.total.popular - 1;
    this.service.setTSpopularity(this.total.popular, this.total.unpopular);

    // // send updates to database
    // this.update();
    this.router.navigate(["score"]);
    console.log(this.total)
  }
  opt2id6() {
    this.total.nerd = this.total.nerd + 2;
    this.total.jock = this.total.jock - 2;
    this.service.setTSacademia(this.total.nerd, this.total.jock);

    this.total.popular = this.total.popular - 1;
    this.total.unpopular = this.total.popular + 1;
    this.service.setTSpopularity(this.total.popular, this.total.unpopular);
    // // send updates to database
    // this.update();
    this.router.navigate(["score"]);
    console.log(this.total)
  }


  opt3id6() {
    this.total.nerd = this.total.nerd - 1;
    this.total.jock = this.total.jock - 1;
    this.service.setTSacademia(this.total.nerd, this.total.jock);

    this.total.popular = this.total.popular + 2;
    this.total.unpopular = this.total.popular - 2;
    this.service.setTSpopularity(this.total.popular, this.total.unpopular);

    // // send updates to database
    // this.update();
    this.router.navigate(["score"]);
    console.log(this.total)
  }

  // update() {
  //   this.service.updateDatabase(this.name, this.academia, this.charisma, this.popularity, this.personality).subscribe(scores => {
  //     this.score = scores
  //   });



  ngOnInit() {
    document.body.classList.add('gymBody');
    this.name = this.service.getName()
    this.total = this.service.getTS();
    // call the service, add .subscribe();
  }
}
// loadList() {
//   this.studentApiService.getAllStudents().subscribe(students => {
//     this.students = students;
//   });