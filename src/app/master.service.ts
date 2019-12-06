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

// get Name from service to pages

// set score from options to service array

// get score from serice to Score page

// Get from data base

// Push into data base

}