import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sampleSpeedTypingText = 'The quick brown fox jumps over the lazy dog';
  userInput = '';
  map: { char: string; color: string }[] = [];
  accuracy = 0;
  time = 30;

  constructor() {
    // Initialize the map array with the sample text
    this.map = this.sampleSpeedTypingText.split('').map((char) => ({
      char,
      color: 'black',
    }));

    console.log(this.map);
  }

  compareInput(): void {
    for (let i = 0; i < this.map.length; i++) {
      if (this.userInput[i] === undefined) {
        this.map[i].color = 'black';
      } else if (this.userInput[i] === this.map[i].char) {
        this.map[i].color = 'green';
      } else {
        this.map[i].color = 'red';
      }
    }
    this.calculateAccuracy();
  }

  calculateAccuracy(): void {
    let correct = 0;
    for (let i = 0; i < this.map.length; i++) {
      if (this.userInput[i] === this.map[i].char) {
        correct++;
      }
    }
    this.accuracy = Math.round((correct / this.map.length) * 100);
  }
}
