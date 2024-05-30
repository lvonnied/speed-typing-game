import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {
  readonly wordAPI: string = "https://random-word-api.herokuapp.com/word?number=20";

  constructor() { }

  async GetRandomSentence(): Promise<string> {
    try {
      const response: Response = await fetch(this.wordAPI);
      const data: string[] = await response.json();
      if (Array.isArray(data)) {
        const concatenatedString: string = data.join(' ');
        return concatenatedString;
      } else {
        console.error('Expected an array of strings');
        return '';
      }
    } catch (error: any) {
      console.error(error);
      return '';
    }
  }
}
