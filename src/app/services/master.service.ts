import { Injectable } from "@angular/core";
import { TotalScore } from "../total-score";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class MasterService {
  // Master Empty Array
  totalScore: TotalScore = {
    Name: "",
    Popular: 0,
    Unpopular: 0,
    Nice: 0,
    Bully: 0,
    Jock: 0,
    Nerd: 0,
    Personality: ""

  };

  highScore: number = 0;

  private readonly BASE_URL = environment.playerBaseUrl

  constructor(private http: HttpClient) { }
  // set name from home page form to service
  setTSname(newInfo: string) {
    this.totalScore.Name = newInfo;
  }

  // get Name from service to pages
  getTSname(): string {
    return this.totalScore.Name;
  }


  // set score from options to service array
  setTSpopularity(popular: number, unpopular: number) {
    this.totalScore.Popular = popular;
    this.totalScore.Unpopular = unpopular;

  }

  setTScharisma(nice: number, bully: number) {
    this.totalScore.Nice = nice;
    this.totalScore.Bully = bully;
  }

  setTSacademia(nerd: number, jock: number) {
    this.totalScore.Nerd = nerd;
    this.totalScore.Jock = jock;
  }

  // get score from serice to Score page
  getTS(): TotalScore {
    return this.totalScore;
  }

  getName(): string {
    return this.totalScore.Name
  }
  setName(playerInfo: string) {
    this.totalScore.Name = playerInfo

  }



  calculatePersonality(): any {

    // total score object converted to array
    const scores = Object.entries(this.totalScore)
    console.log(scores)

    // scores = (8) [["name", ""], ["popular", 0], ["unpopular", 0], ["nice", 0], ["bully", 0], ["jock", 0], ["nerd", 0], ["personality", ""]]
    // 0 is the index for item
    // within the item, 0 is the index for first item (eg, "popular"), 1 is the index for the second item (eg, score)
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
      this.totalScore.Personality = scores[1][0];
    } else {
      this.highScore = scores[2][1];
      this.totalScore.Personality = scores[2][0];
    }
    // if high score < 3 = set to nice
    if (this.highScore < scores[3][1]) {
      this.highScore = scores[3][1];
      this.totalScore.Personality = scores[3][0];
    }
    // if high score < 4 = set to bully
    if (this.highScore < scores[4][1]) {
      this.highScore = scores[4][1];
      this.totalScore.Personality = scores[4][0];
    }
    // if high score < 5 = do set to jock
    if (this.highScore < scores[5][1]) {
      this.highScore = scores[5][1];
      this.totalScore.Personality = scores[5][0];
    }

    // if high score < 6 = set to nerd
    if (this.highScore < scores[6][1]) {
      this.highScore = scores[6][1];
      this.totalScore.Personality = scores[6][0];
    }

    console.log(this.highScore);
    console.log(this.totalScore.Personality);
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



  getLeaderBoard(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/player-info`)
  }



}