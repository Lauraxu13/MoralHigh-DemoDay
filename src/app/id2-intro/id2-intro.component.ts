import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-id2-intro',
  templateUrl: './id2-intro.component.html',
  styleUrls: ['./id2-intro.component.css']
})
export class Id2IntroComponent implements OnInit {

  name: string;

  constructor(private router: Router, private service: MasterService) { }


  nextButton() {
    this.router.navigate(["hallway"]);

  }


  ngOnInit() {
    this.name = this.service.getName();
  }

}
