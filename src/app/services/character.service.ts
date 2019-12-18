import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

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


  constructor() { }


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
