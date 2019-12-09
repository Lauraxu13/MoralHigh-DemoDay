import { Component, OnInit } from "@angular/core";
import { MasterService } from "../master.service";
import { Router } from "@angular/router";
import { Id2IntroComponent } from "../id2-intro/id2-intro.component";
import { TotalScore } from "../total-score";

@Component({
  selector: "app-id1-home-page",
  templateUrl: "./id1-home-page.component.html",
  styleUrls: ["./id1-home-page.component.css"]
})
export class Id1HomePageComponent implements OnInit {
  name: string;
  total: TotalScore;

  newPlayer() {
    this.service.setName(this.name);
    console.log(this.total);
    this.router.navigate(["/intro"]);
  }

  constructor(private router: Router, private service: MasterService) {}

  ngOnInit() {
    this.name = this.service.getName();
    this.total = this.service.getTS();
  }
}
