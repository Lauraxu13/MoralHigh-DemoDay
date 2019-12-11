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
    popular: 0,
    unpopular: 0,
    nice: 0,
    bully: 0,
    jock: 0,
    nerd: 0,
    personality: ""

  };


  character: string[] = [
    "url('/assets/options/maincharskin2.png')",
    "url('/assets/options/mainchareye3.png')",
    "url('/assets/options/maincharhair4.png')",
    "url('/assets/options/maincharbottom1.png')",
    "url('/assets/options/mainchartop1.png')"
  ];



  body: any[] =

    [
      { main: "url('/assets/options/maincharskin1.png')", prev: "url('/assets/options/maincharskin1prev.png')" },
      { main: "url('/assets/options/maincharskin2.png')", prev: "url('/assets/options/maincharskin2prev.png')" },
      { main: "url('/assets/options/maincharskin3.png')", prev: "url('/assets/options/maincharskin3prev.png')" },
      { main: "url('/assets/options/maincharskin4.png')", prev: "url('/assets/options/maincharskin4prev.png')" }


    ]

  eye: any[] =

    [
      { main: "url('/assets/options/mainchareye1.png')", prev: "url('/assets/options/mainchareye1prev.png')" },
      { main: "url('/assets/options/mainchareye2.png')", prev: "url('/assets/options/mainchareye2prev.png')" },
      { main: "url('/assets/options/mainchareye3.png')", prev: "url('/assets/options/mainchareye3prev.png')" }

    ]

  hair: any[] =

    [
      { main: "url('/assets/options/maincharhair1.png')", prev: "url('/assets/options/maincharhair1prev.png')" },
      { main: "url('/assets/options/maincharhair2.png')", prev: "url('/assets/options/maincharhair2prev.png')" },
      { main: "url('/assets/options/maincharhair3.png')", prev: "url('/assets/options/maincharhair3prev.png')" },
      { main: "url('/assets/options/maincharhair4.png')", prev: "url('/assets/options/maincharhair4prev.png')" }

    ]

  bottom: any[] =

    [
      { main: "url('/assets/options/maincharbottom1.png')", prev: "url('/assets/options/maincharbottom1prev.png')" },
      { main: "url('/assets/options/maincharbottom2.png')", prev: "url('/assets/options/maincharbottom2prev.png')" },
      { main: "url('/assets/options/maincharbottom3.png')", prev: "url('/assets/options/maincharbottom3prev.png')" }

    ]

  top: any[] =

    [
      { main: "url('/assets/options/mainchartop1.png')", prev: "url('/assets/options/mainchartop1prev.png')" },
      { main: "url('/assets/options/mainchartop2.png')", prev: "url('/assets/options/mainchartop2prev.png')" },
      { main: "url('/assets/options/mainchartop3.png')", prev: "url('/assets/options/mainchartop3prev.png')" }
    ]



  private readonly BASE_URL = environment.playerBaseUrl



  constructor(private http: HttpClient) { }
  // set name from home page form to service
  setTSname(newInfo: string) {
    this.totalScore.name = newInfo;
  }

  // get Name from service to pages
  getTSname(): string {
    return this.totalScore.name;
  }

  // // get score from service to  components
  // getTSpopularity(): number {

  //   return this.totalScore.popularity;
  //   // return this.http.get<Student[]>(`${this.BASE_URL}/students`)
  // }

  // getTScharisma(): number {
  //   return this.totalScore.charisma;
  // }

  // getTSacademia(): number {
  //   return this.totalScore.academia;
  // }
  // set score from options to service array
  setTSpopularity(popular: number, unpopular: number) {
    this.totalScore.popular = popular;
    this.totalScore.unpopular = unpopular;

  }

  setTScharisma(nice: number, bully: number) {
    this.totalScore.nice = nice;
    this.totalScore.bully = bully;
  }

  setTSacademia(nerd: number, jock: number) {
    this.totalScore.nerd = nerd;
    this.totalScore.jock = jock;
  }

  // get score from serice to Score page
  getTS(): TotalScore {
    return this.totalScore;
  }

  getName(): string {
    return this.totalScore.name
  }
  setName(playerInfo: string) {
    this.totalScore.name = playerInfo

  }


  calculatePersonality() {
    // is popularity > academic and charisma?

    // is academic > popularity and charisma?

    // is charisma > academic and popularity?
  }

  // Get from data base

  // Push into data base
  updateDatabase(name: string, popularity: number, academic: number, charisma: number, personality: string): Observable<void> {
    const body = {
      "name": name,
      "popularity": popularity,
      "academic": academic,
      "charisma": charisma,
      "personality": personality
    };
    return this.http.post<void>(`${this.BASE_URL}/player-info`, body);
    // return this.http.get<Student[]>(`${this.BASE_URL}/students`)

  }


  getBody(): any[] {
    return this.body;
  }

  getEyes(): any[] {
    return this.eye;
  }

  getHair(): any[] {
    return this.hair;
  }

  getBottom(): any[] {
    return this.bottom;
  }
  getTop(): any[] {
    return this.top;
  }


  getCharacter() {
    return this.character;
  }

  setCharacter(character: string[]) {
    this.character = character;
  }
}