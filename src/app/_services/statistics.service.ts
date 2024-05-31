import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  /**
 * WPM (Words Per Minute) is a calculation of exactly how fast someone types with no error penalties.
 * The gross typing speed is calculated by taking all words typed and dividing by the time it took to type the words in minutes.
 * A "word" is equivalent to five keystrokes (including spaces, numbers, letters, and punctuation marks).
 * 
 * Example:
 * If you typed 300 characters in 2 minutes, your Gross WPM typing speed would be:
 * (300 characters / 5) / 2 min = 30 WPM.
 * 
 * Accuracy:
 * Typing accuracy is defined as the percentage of correct entries out of the total entries typed.
 * If you typed 300 characters with 16 errors, you typed 284 correct entries, and your accuracy percentage would be:
 * 284 / 300 = 95%.
 */

  constructor() { }

  readonly LENGTH_OF_WORD: number = 5;

  calculateAccuracy(userInput: string, map: Array<{ char: string; color: string }>): number {
    let correct = 0;
    for (let i = 0; i < map.length; i++) {
      if (userInput[i] === map[i].char) {
        correct++;
      }
    }
    return Math.round((correct / map.length) * 100);
  }

  calculateWPM(userInput: string, seconds: number): number {
    const totalCharactersTyped = userInput.length;
    return Math.round((totalCharactersTyped / this.LENGTH_OF_WORD) / (seconds / 60));
  }
}
