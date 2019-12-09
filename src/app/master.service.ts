import { Injectable } from "@angular/core";
import { TotalScore } from "./total-score";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MasterService {
  // Master Empty Array
  totalScore: TotalScore = {
    name: "",
    popularity: 5,
    charisma: 5,
    academia: 5
  };


 
constructor(private http: HttpClient) {}
// set name from home page form to service
setTSname(newInfo:string){
  this.totalScore.name =newInfo;
}

// get Name from service to pages
getTSname():string{
  return this.totalScore.name;
}

// get score from service to  components
getTSpopularity():number{
  return this.totalScore.popularity;
}

getTScharisma():number{
  return this.totalScore.charisma;
}

getTSacademia():number{
  return this.totalScore.academia;
}
// set score from options to service array
setTSpopularity(newInfo:number){
  this.totalScore.popularity =newInfo;
}

setTScharisma(newInfo:number){
  this.totalScore.charisma =newInfo;
}

setTSacademia(newInfo:number){
  this.totalScore.academia =newInfo;
}

// get score from serice to Score page
getTS():TotalScore{
  return this.totalScore;
}

getName():string{
  return this.totalScore.name
}
setName(playerInfo:string){
this.totalScore.name=playerInfo

}


// Get from data base

// Push into data base
 
}