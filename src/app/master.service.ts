import { Injectable } from "@angular/core";
import { TotalScore } from "./total-score";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

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

  private readonly BASE_URL = environment.playerBaseUrl


 
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
  // return this.http.get<Student[]>(`${this.BASE_URL}/students`)
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
updateDatabase(name,popularity,academic,charisma):Observable<void> {
  const body = {
    "name": name,
    "popularity":popularity,
    "academic":academic,
    "charisma":charisma
  };
  return this.http.post<void>(`${this.BASE_URL}/player-info`, body);
  // return this.http.get<Student[]>(`${this.BASE_URL}/students`)

}
 
}