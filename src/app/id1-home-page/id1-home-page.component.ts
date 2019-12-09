import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-id1-home-page',
  templateUrl: './id1-home-page.component.html',
  styleUrls: ['./id1-home-page.component.css']
})
export class Id1HomePageComponent implements OnInit {
  name:string;



  constructor(private router: Router,private service: MasterService) { }
  newPlayer(){
    this.service.setName(this.name)
    
  }

  ngOnInit() {
    this.name=this.service.getName()
  }

}
