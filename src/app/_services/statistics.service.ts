import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor() { }

  calculateAccuracy(userInput: string, map: Array<{ char: string; color: string }>): number {
    let correct = 0;
    for (let i = 0; i < map.length; i++) {
      if (userInput[i] === map[i].char) {
        correct++;
      }
    }
    return Math.round((correct / map.length) * 100);
  }

  calculateWPM(userInput: string, time: number): number {
    const totalCharactersTyped = userInput.length;
    return Math.round((totalCharactersTyped / 5) * (60 / time));
  }
}
