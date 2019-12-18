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

  highScore: number = 0;

  transitionCounter: number = 0;

  character: string[] = [
    "url('/assets/options/mainchardefault.png')",
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



  calculatePersonality(): any {

    const scores = Object.entries(this.totalScore)
    console.log(scores)

    //     (8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
    // 0: (2) ["name", ""]
    // 1: (2) ["popular", 0]
    // 2: (2) ["unpopular", 0]
    // 3: (2) ["nice", 0]
    // 4: (2) ["bully", 0]
    // 5: (2) ["jock", 0]
    // 6: (2) ["nerd", 0]
    // 7: (2) ["personality", ""]

    console.log(scores[1][1])


    // if 1 > 2 = popular, else unpopular
    // set high score =  #
    // set personality = name
    if (scores[1][1] > scores[2][1]) {
      this.highScore = scores[1][1];
      this.totalScore.personality = scores[1][0];
    } else {
      this.highScore = scores[2][1];
      this.totalScore.personality = scores[2][0];
    }
    // if high score < 3 = set to nice
    if (this.highScore < scores[3][1]) {
      this.highScore = scores[3][1];
      this.totalScore.personality = scores[3][0];
    }
    // if high score < 4 = set to bully
    if (this.highScore < scores[4][1]) {
      this.highScore = scores[4][1];
      this.totalScore.personality = scores[4][0];
    }
    // if high score < 5 = do set to jock
    if (this.highScore < scores[5][1]) {
      this.highScore = scores[5][1];
      this.totalScore.personality = scores[5][0];
    }

    // if high score < 6 = set to nerd
    if (this.highScore < scores[6][1]) {
      this.highScore = scores[6][1];
      this.totalScore.personality = scores[6][0];
    }

    console.log(this.highScore);
    console.log(this.totalScore.personality);
  }


  // Get from data base

  // Push into data base
  updateDatabase(name: string, popular: number, unpopular: number, nice: number, jock: number, bully: number, nerd: number, personality: string, ): Observable<void> {
    const body = {
      "name": name,
      "popular": popular,
      "unpopular": unpopular,
      "nice": nice,
      "jock": jock,
      "bully": bully,
      "nerd": nerd,
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

  getLeaderBoard(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/player-info`)
  }


  getTransitionCounter(): number {
    return this.transitionCounter;
  }

  setTransitionCounter(count: number) {
    this.transitionCounter = count;
  }
}