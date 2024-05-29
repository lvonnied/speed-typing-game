import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

// TODO Move this to a service
export class HomeComponent {
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

  private readonly TYPING_TIME = 30;

  userInput = '';
  map: { char: string; color: string }[] = [];
  time = this.TYPING_TIME;
  started = false;
  // ? Maybe this can be done differently
  interval: any = null;

  constructor(public dialog: MatDialog) {
    this.initializeObjectArray(this.getRandomSentence());
  }

  private getRandomSentence(): string {
    return this.typingSentences[Math.floor(Math.random() * this.typingSentences.length)];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '300px',
      data: {
        accuracy: this.calculateAccuracy(),
        time: this.time,
        wpm: this.calculateWPM(),
      },
    })

    dialogRef.afterClosed().subscribe(() => {
      this.time = this.TYPING_TIME;
      this.initializeObjectArray(this.getRandomSentence());
      this.userInput = '';
      this.started = false;
    });
  }

  initializeObjectArray(text: string): void {
    this.map = text.split('').map((char) => ({
      char,
      color: 'black',
    }));
  }

  compareInput(): void {
    if (!this.started) {
      this.started = true;
      this.setInterval();
    } else if (this.map.length === this.userInput.length) {
      this.resetGame(this.interval);
    }
    for (let i = 0; i < this.map.length; i++) {
      if (this.userInput[i] === undefined) {
        this.map[i].color = 'black';
      } else if (this.userInput[i] === this.map[i].char) {
        this.map[i].color = 'green';
      } else {
        this.map[i].color = 'red';
      }
    }
  }

  calculateAccuracy(): number {
    let correct = 0;
    for (let i = 0; i < this.map.length; i++) {
      if (this.userInput[i] === this.map[i].char) {
        correct++;
      }
    }
    return Math.round((correct / this.map.length) * 100);
  }

  calculateWPM(): number {
    const totalCharactersTyped = this.userInput.length;
    return Math.round((totalCharactersTyped / 5) * (60 / (this.TYPING_TIME - this.time)));
  }

  setInterval(): void {
    this.interval = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        this.resetGame(this.interval);
      }
    }, 1000);
  }

  private resetGame(interval: any) {
    clearInterval(interval);
    this.openDialog();
  }
}
