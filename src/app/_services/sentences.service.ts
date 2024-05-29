import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {
  typingSentences: string[] = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast requires practice and concentration.",
    "A journey of a thousand miles begins with a single step.",
    "Every moment is a fresh beginning.",
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The purpose of our lives is to be happy.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The only impossible journey is the one you never begin.",
    "In the end, we only regret the chances we didn't take.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Our lives are defined by opportunities, even the ones we miss.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Life is what happens when you're busy making other plans.",
    "Happiness is not something ready made. It comes from your own actions.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not watch the clock. Do what it does. Keep going.",
    "To succeed in life, you need two things: ignorance and confidence.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It always seems impossible until it's done.",
    "You must be the change you wish to see in the world.",
    "Life is either a daring adventure or nothing at all.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "The only way to do great work is to love what you do."
  ];

  constructor() { }

  GetRandomSentence(): string {
    return this.typingSentences[Math.floor(Math.random() * this.typingSentences.length)];
  }
}
