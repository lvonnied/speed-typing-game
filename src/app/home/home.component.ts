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
export class HomeComponent {
  sampleSpeedTypingText = 'The quick brown fox jumps over the lazy dog';
  userInput = '';
  map: { char: string; color: string }[] = [];
  accuracy = 0;
  time = 30;
  started = false;

  constructor(public dialog: MatDialog) {
    this.initializeObjectArray();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '300px',
      data: {
        accuracy: this.accuracy,
        time: 30,
        wpm: 0,
      },
    })

    dialogRef.afterClosed().subscribe(() => {
      // TODO Reset the game
    });
  }

  initializeObjectArray(): void {
    this.map = this.sampleSpeedTypingText.split('').map((char) => ({
      char,
      color: 'black',
    }));
  }

  compareInput(): void {
    if (!this.started) {
      this.started = true;
      this.setInterval();
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

  setInterval(): void {
    const interval = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        // TODO calculate metrics
        clearInterval(interval);
        this.started = false;
        this.openDialog();
      }
    }, 1000);
  }
}
