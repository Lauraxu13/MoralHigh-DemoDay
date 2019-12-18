import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { TotalScore } from '../total-score';

@Component({
  selector: 'app-id2-intro',
  templateUrl: './id2-intro.component.html',
  styleUrls: ['./id2-intro.component.css']
})
export class Id2IntroComponent implements OnInit {

  name: string;
  total: TotalScore;
  // creates and array to hold the selected images urls
  character: string[] = new Array(6);

  // each of this pull in the URLs from the service and display in the HTML
  body: any[];
  eye: any[];
  hair: any[];
  bottom: any[];
  top: any[];



  constructor(private router: Router, private service: MasterService) { }


  nextButton() {
    this.router.navigate(["hallway"]);
    // sets the character in the service to the updated array
    this.service.setCharacter(this.character)

  }

  // the index of the item selected is passed in as a parameter
  setBody(i: number) {
    //the selected item is set to the main character array
    this.character[1] = this.body[i].main;
    console.log(this.body[i].main);
    console.log(this.character)
  }

  setEye(i: number) {
    this.character[2] = this.eye[i].main;
    console.log(this.character)
  }
  setHair(i: number) {
    this.character[3] = this.hair[i].main;
    console.log(this.character)
  }
  setBottom(i: number) {
    this.character[4] = this.bottom[i].main;
    console.log(this.character)
  }

  setTop(i: number) {
    this.character[5] = this.top[i].main;
    console.log(this.character)
  }





  ngOnInit() {
    this.name = this.service.getName();
    console.log(this.name);
    this.total = this.service.getTS();
    console.log(this.total);
    // set the array to the items in the service
    this.body = this.service.getBody();
    this.eye = this.service.getEyes();
    this.hair = this.service.getHair();
    this.bottom = this.service.getBottom();
    this.top = this.service.getTop();
    this.character = this.service.getCharacter();
    console.log(this.character)
    console.log(this.body)



  }

}
