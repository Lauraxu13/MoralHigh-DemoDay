import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from "../master.service";
import { TotalScore } from "../total-score";

@Component({
  selector: "app-id2-intro",
  templateUrl: "./id2-intro.component.html",
  styleUrls: ["./id2-intro.component.css"]
})
export class Id2IntroComponent implements OnInit {
  name: string;
  total: TotalScore;

  character: string[] = new Array(6);

  body: any[];
  eye: any[];
  hair: any[];
  bottom: any[];
  top: any[];

  constructor(private router: Router, private service: MasterService) {}

  // on click --> sets  custom character design into character service and routes to hallway
  nextButton() {
    this.router.navigate(["hallway"]);
    this.service.setCharacter(this.character);
  }

  setBody(i: number) {
    this.character[1] = this.body[i].main;
    console.log(this.body[i].main);
    console.log(this.character);
  }

  setEye(i: number) {
    this.character[2] = this.eye[i].main;
    console.log(this.character);
  }
  setHair(i: number) {
    this.character[3] = this.hair[i].main;
    console.log(this.character);
  }
  setBottom(i: number) {
    this.character[4] = this.bottom[i].main;
    console.log(this.character);
  }

  setTop(i: number) {
    this.character[5] = this.top[i].main;
    console.log(this.character);
  }

  ngOnInit() {
    this.name = this.service.getName();
    console.log(this.name);
    this.total = this.service.getTS();
    console.log(this.total);
    this.body = this.service.getBody();
    this.eye = this.service.getEyes();
    this.hair = this.service.getHair();
    this.bottom = this.service.getBottom();
    this.top = this.service.getTop();
    this.character = this.service.getCharacter();
    console.log(this.character);
    console.log(this.body);
  }
}
