import {
  Component,
  ɵflushModuleScopingQueueAsMuchAsPossible,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
 
  title = "MoralHigh-DemoDay";

  off: boolean = false;
  backMusic = new Audio("assets/flatZone.mp3") ;


  toggleSound() {
    if (this.backMusic.paused) {
    this.backMusic.play();
    this.off = !this.off;
  }
    else this.backMusic.pause();
    // !this.off = this.off;
  } 
  
  ngOnInit() {
    this.backMusic.play();


  }
}
