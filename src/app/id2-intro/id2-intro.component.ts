import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-id2-intro',
  templateUrl: './id2-intro.component.html',
  styleUrls: ['./id2-intro.component.css']
})
export class Id2IntroComponent implements OnInit {

  constructor(private router: Router) { }

  nextButton(){
    this.router.navigate(["hallway"]);
  }



  ngOnInit() {
  }

}
